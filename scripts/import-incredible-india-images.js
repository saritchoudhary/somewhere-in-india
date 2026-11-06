import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data", "places.json");
const temporaryPath = `${dataPath}.tmp`;
const pageHost = "www.incredibleindia.gov.in";
const concurrency = 12;
const limitArg = process.argv.find((argument) => argument.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.slice("--limit=".length)) : Infinity;
const force = process.argv.includes("--force");
const photoFields = ["attractionImage", "thumbnailImage", "experienceImage"];
let saveQueue = Promise.resolve();

if (!(limit > 0)) throw new Error("--limit must be a positive number.");

const records = JSON.parse(await readFile(dataPath, "utf8"));
const targets = records.filter((place) => {
  if (!place.sourceUrl || new URL(place.sourceUrl).hostname !== pageHost) return false;
  return force || !place.officialPhotoLookupAttempted;
}).slice(0, limit);
let cursor = 0;
let scanned = 0;
let matched = 0;
let failed = 0;

function decodeHtml(value) {
  return value.replace(/&amp;/g, "&").replace(/&quot;/g, "\"")
    .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_match, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#([0-9]+);/g, (_match, code) => String.fromCodePoint(Number.parseInt(code, 10)));
}

function imageFromPage(html, pageUrl) {
  const fields = new Map();
  for (const [tag] of html.matchAll(/<input\b[^>]*>/gi)) {
    const name = tag.match(/\bname=["']([^"']+)["']/i)?.[1];
    const value = tag.match(/\bvalue=["']([^"']*)["']/i)?.[1];
    if (name && value) fields.set(name, decodeHtml(value.trim()));
  }

  for (const field of photoFields) {
    const value = fields.get(field);
    if (!value) continue;
    let url;
    try {
      url = new URL(value, pageUrl);
    } catch {
      continue;
    }
    if (!["www.incredibleindia.gov.in", "s7ap1.scene7.com"].includes(url.hostname)) continue;
    if (url.hostname === "www.incredibleindia.gov.in"
      && !url.pathname.startsWith("/content/dam/incredible-india/images/")) continue;
    if (/\/global\//i.test(url.pathname) || !/\.(?:avif|jpe?g|png|webp)$/i.test(url.pathname)) continue;
    return { image: url.href, imageTitle: path.posix.basename(url.pathname) };
  }
  return null;
}

async function fetchPage(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch(url, {
      headers: { "User-Agent": "SomewhereInIndia/1.0 (authorized Incredible India photo lookup)" },
      signal: AbortSignal.timeout(30000),
    });
    if (response.ok || response.status === 404) return response;
    if (![429, 503].includes(response.status) || attempt === 3) {
      throw new Error(`Incredible India returned HTTP ${response.status}`);
    }
    const retryAfter = Number(response.headers.get("retry-after")) || 2 ** attempt;
    await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
  }
  throw new Error("Incredible India request retries were exhausted.");
}

async function save() {
  const pendingSave = saveQueue.then(async () => {
    await writeFile(temporaryPath, `${JSON.stringify(records, null, 2)}\n`);
    for (let attempt = 0; ; attempt += 1) {
      try {
        await rename(temporaryPath, dataPath);
        break;
      } catch (error) {
        if (!["EPERM", "EBUSY"].includes(error.code) || attempt >= 7) throw error;
        await new Promise((resolve) => setTimeout(resolve, 100 * (attempt + 1)));
      }
    }
  });
  saveQueue = pendingSave.catch(() => {});
  await pendingSave;
}

async function worker() {
  while (true) {
    const index = cursor;
    cursor += 1;
    if (index >= targets.length) return;

    const place = targets[index];
    try {
      const response = await fetchPage(place.sourceUrl);
      if (response.status === 404) {
        place.officialPhotoLookupAttempted = true;
      } else {
        const result = imageFromPage(await response.text(), place.sourceUrl);
        place.officialPhotoLookupAttempted = true;
        if (result) {
          place.image = result.image;
          place.imageTitle = result.imageTitle;
          place.imageCredit = "Incredible India";
          place.imageSourceUrl = place.sourceUrl;
          place.imageSourceName = "Incredible India";
          matched += 1;
        }
      }
    } catch (error) {
      failed += 1;
      console.warn(`Photo lookup failed for ${place.name}, ${place.state}: ${error.message}`);
    }
    scanned += 1;
    if (scanned % 50 === 0 || scanned === targets.length) {
      await save();
      console.log(`Checked ${scanned}/${targets.length}; found ${matched} Incredible India photos; ${failed} lookups failed.`);
    }
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, targets.length) }, worker));

const officialByPlace = new Map();
for (const place of records) {
  if (!place.image || place.imageSourceName !== "Incredible India") continue;
  const key = `${place.state.normalize("NFKC").toLowerCase()}|${place.name.normalize("NFKC").toLowerCase()}`;
  if (!officialByPlace.has(key)) officialByPlace.set(key, place);
}

let inherited = 0;
for (const place of records) {
  if (place.sourceUrl) continue;
  const key = `${place.state.normalize("NFKC").toLowerCase()}|${place.name.normalize("NFKC").toLowerCase()}`;
  const match = officialByPlace.get(key);
  if (!match) continue;
  Object.assign(place, {
    image: match.image,
    imageTitle: match.imageTitle,
    imageCredit: match.imageCredit,
    imageSourceUrl: match.imageSourceUrl,
    imageSourceName: match.imageSourceName,
  });
  inherited += 1;
}

await save();
if (!targets.length) console.log("All official destination pages have already been checked.");
console.log(`Finished checking ${targets.length} Incredible India destination pages.`);
console.log(`Matched ${matched} page photos and reused ${inherited} exact-name matches for curated records.`);
console.log(`Catalog currently has ${records.filter((place) => place.image).length}/${records.length} places with photos.`);
