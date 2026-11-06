import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const config = { maxDuration: 60 };

const here = path.dirname(fileURLToPath(import.meta.url));
const places = JSON.parse(await readFile(path.join(here, "../data/places.json"), "utf8"));

function findRelevantPlaces(message) {
  const words = message.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
  const query = new Set(words.filter((word) => word.length > 2));
  const ranked = places.map((place) => {
    const text = `${place.name} ${place.state} ${place.district} ${place.tags.join(" ")}`.toLowerCase();
    const score = [...query].reduce((total, word) => total + (text.includes(word) ? 1 : 0), 0);
    return { place, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, 8);
  return ranked.map(({ place }) => ({
    name: place.name,
    type: place.type,
    state: place.state,
    district: place.district,
    description: place.description,
    bestTime: place.bestTime,
    tags: place.tags,
  }));
}

function sendError(res, status, message) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ error: message }));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendError(res, 405, "Use POST to send a trip-planning message.");
  }

  const { message, history = [], trip = {} } = req.body || {};
  if (typeof message !== "string" || !message.trim() || message.length > 4000) {
    return sendError(res, 400, "Please enter a message of 1–4,000 characters.");
  }
  if (!Array.isArray(history) || history.length > 8 || history.some((item) =>
    !item || !["user", "assistant"].includes(item.role) || typeof item.content !== "string" || item.content.length > 4000)) {
    return sendError(res, 400, "The conversation has an invalid format. Please start a new chat.");
  }
  if (!trip || typeof trip !== "object" || Array.isArray(trip)) {
    return sendError(res, 400, "Trip preferences must be sent as an object.");
  }
  if (!process.env.GROQ_API_KEY) {
    return sendError(res, 503, "The AI trip planner is not configured yet. Please try again later.");
  }

  const preferences = ["destination", "days", "budget", "style", "month"]
    .map((key) => `${key}: ${String(trip[key] || "not provided").slice(0, 120)}`)
    .join("; ");
  const context = findRelevantPlaces(message);
  const system = [
    "You are Somewhere in India, a friendly, careful travel guide focused exclusively on travel within India.",
    "Answer questions about Indian destinations, temples, food, weather, festivals, transport and local travel tips. If a request is outside Indian travel, briefly explain your focus and redirect helpfully.",
    "Use the supplied place records when relevant. Do not invent opening hours, fares, live weather, travel times or safety conditions; qualify estimates and ask travelers to verify current details with official sources.",
    "When the destination, duration, budget or travel style is essential but missing, ask one concise follow-up question. Otherwise make reasonable assumptions and say what they are.",
    "For itineraries, use day-by-day headings and morning, afternoon and evening sections; include realistic transfer estimates only as approximate ranges, meal ideas, and rough per-person costs when a budget is known.",
    `Traveler preferences: ${preferences}.`,
    `Relevant records from the local places collection: ${JSON.stringify(context)}.`,
  ].join("\n\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55000);
  try {
    const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "openai/gpt-oss-20b",
        stream: true,
        messages: [{ role: "system", content: system }, ...history, { role: "user", content: message.trim() }],
      }),
    });
    if (!upstream.ok) {
      const details = await upstream.json().catch(() => ({}));
      console.error("AI provider chat request failed:", upstream.status, details.error?.message || upstream.statusText);
      const quotaUnavailable = upstream.status === 429
        && (["insufficient_quota", "billing_hard_limit_reached"].includes(details.error?.code)
          || /quota|no credits|billing/i.test(details.error?.message || ""));
      return sendError(res, upstream.status === 429 ? 503 : 502, quotaUnavailable
        ? "The AI trip planner needs available API credits. Please check the account billing settings and try again."
        : upstream.status === 429
          ? "The trip planner is busy. Please try again shortly."
          : "We couldn’t reach the trip planner right now. Please try again in a moment.");
    }
    if (!upstream.body) throw new Error("The AI provider returned an empty response stream.");

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (!data || data === "[DONE]") continue;
        const event = JSON.parse(data);
        const text = event.choices?.[0]?.delta?.content;
        if (typeof text === "string") res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }
    buffer += decoder.decode();
    if (buffer.startsWith("data: ")) {
      const data = buffer.slice(6).trim();
      if (data && data !== "[DONE]") {
        const event = JSON.parse(data);
        const text = event.choices?.[0]?.delta?.content;
        if (typeof text === "string") res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }
    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Chat stream failed:", error.message);
    if (!res.headersSent) sendError(res, 502, "The trip planner couldn’t complete that reply. Please try again.");
    else {
      res.write(`data: ${JSON.stringify({ error: "The connection was interrupted. Please try sending your message again." })}\n\n`);
      res.end();
    }
  } finally {
    clearTimeout(timeout);
  }
}
