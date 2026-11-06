import { Bot, Compass, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export default function TripPlanner({ trip }) {
  const [form, setForm] = useState({ destination: "", days: "3", budget: "", style: "Family", month: "" });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const suggestions = ["3-day Jaipur plan", "Best temples in Tamil Nadu", "What should I eat in Kerala?"];
  const send = async (text = input) => {
    const prompt = text.trim();
    if (!prompt || loading) return;
    const next = [...messages, { role: "user", content: prompt }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt, trip: form, history: messages.slice(-8) }),
      });
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.error || "The trip planner is unavailable right now.");
      }
      if (!response.body) throw new Error("The trip planner returned an empty response.");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      let streamBuffer = "";
      const readEvent = (line) => {
        if (!line.startsWith("data: ")) return;
        const data = line.slice(6).trim();
        if (!data || data === "[DONE]") return;
        const event = JSON.parse(data);
        if (event.error) throw new Error(event.error);
        answer += event.text || "";
      };
      setMessages([...next, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        streamBuffer += decoder.decode(value, { stream: true });
        const lines = streamBuffer.split("\n");
        streamBuffer = lines.pop() || "";
        lines.forEach(readEvent);
        setMessages([...next, { role: "assistant", content: answer }]);
      }
      streamBuffer += decoder.decode();
      if (streamBuffer.trim()) readEvent(streamBuffer);
      setMessages([...next, { role: "assistant", content: answer }]);
    } catch (error) {
      setMessages([...next, { role: "assistant", content: error.message }]);
    } finally {
      setLoading(false);
    }
  };
  const download = () => window.print();
  return (
    <main className="planner-page section-wrap">
      <div className="planner-heading"><p className="eyebrow"><span /> YOUR NEXT GREAT STORY</p><h1>Plan a trip that<br /><em>feels like yours.</em></h1><p>Tell us what you love. Our India travel guide will help shape the days.</p></div>
      <div className="planner-layout">
        <form className="planner-form" onSubmit={(event) => { event.preventDefault(); send(`Plan a ${form.days}-day ${form.style.toLowerCase()} trip to ${form.destination || "India"}${form.budget ? ` with a budget of ${form.budget}` : ""}${form.month ? ` in ${form.month}` : ""}.`); }}>
          <h2>Make it personal</h2>
          <label>Where to? <input value={form.destination} onChange={(event) => setForm({ ...form, destination: event.target.value })} placeholder="A state, city or region" /></label>
          <div className="form-row"><label>Number of days<input type="number" min="1" max="30" value={form.days} onChange={(event) => setForm({ ...form, days: event.target.value })} /></label><label>Travel month<input value={form.month} onChange={(event) => setForm({ ...form, month: event.target.value })} placeholder="e.g. October" /></label></div>
          <label>Approx. budget <input value={form.budget} onChange={(event) => setForm({ ...form, budget: event.target.value })} placeholder="e.g. ₹30,000 per person" /></label>
          <label>Your travel style<select value={form.style} onChange={(event) => setForm({ ...form, style: event.target.value })}>{["Family", "Solo", "Couple", "Spiritual", "Adventure"].map((style) => <option key={style}>{style}</option>)}</select></label>
          <button className="button-primary" type="submit"><Sparkles size={16} /> Build my itinerary</button>
          <p className="form-hint">Share just one detail to get started; the planner can ask follow-up questions.</p>
        </form>
        <section className="chat-panel" aria-label="India trip planner chat">
          <div className="chat-heading"><span className="chat-avatar"><Bot size={19} /></span><div><strong>Your India travel companion</strong><small>Ideas for a journey worth remembering</small></div><button className="button-secondary print-button" onClick={download} disabled={!messages.some((message) => message.role === "assistant")} title="Print or save your itinerary as PDF">Download PDF</button></div>
          <div className="chat-messages" aria-live="polite">
            {!messages.length && <div className="chat-welcome"><Compass size={29} /><h3>Where shall we begin?</h3><p>Ask me anything about travelling in India—or pick an idea below.</p></div>}
            {messages.map((message, index) => <div key={index} className={`chat-message ${message.role}`}>{message.content || (loading && <span className="typing-indicator"><i /><i /><i /></span>)}</div>)}
            {loading && messages.at(-1)?.role === "user" && <div className="chat-message assistant"><span className="typing-indicator"><i /><i /><i /></span></div>}
          </div>
          {!messages.length && <div className="quick-replies">{suggestions.map((suggestion) => <button key={suggestion} onClick={() => send(suggestion)}>{suggestion}</button>)}</div>}
          {messages.some((message) => message.role === "assistant") && <button className="button-secondary copy-itinerary" onClick={() => navigator.clipboard.writeText(messages.filter((message) => message.role === "assistant").map((message) => message.content).join("\n\n"))}>Copy itinerary</button>}
          <form className="chat-input" onSubmit={(event) => { event.preventDefault(); send(); }}><label className="sr-only" htmlFor="chat-prompt">Ask the trip planner</label><input id="chat-prompt" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about your India trip..." /><button className="button-primary" type="submit" disabled={loading || !input.trim()} aria-label="Send message"><Send size={17} /></button></form>
        </section>
      </div>
      <section className="trip-preview"><h2><MapPin size={20} /> Places in your trip <span>{trip.length}</span></h2>{trip.length ? <div className="trip-chip-list">{trip.map((place) => <span key={place.id}>{place.name}<small>{place.district}</small></span>)}</div> : <p>Add places from any collection and they’ll be waiting here.</p>}</section>
    </main>
  );
}
