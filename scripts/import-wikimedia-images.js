import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data", "places.json");
const temporaryPath = `${dataPath}.tmp`;
const stopWords = new Set([
  "a", "an", "and", "at", "by", "for", "from", "in", "near", "of", "on", "or", "the", "to", "with",
  "best", "famous", "guide", "places", "things", "top", "visit", "visiting",
]);
const genericNames = new Set([
  "beach", "cave", "church", "fort", "hill", "island", "lake", "market", "museum", "palace", "park",
  "temple", "waterfall",
]);
const concurrency = 1;
const requestIntervalMs = 5000;
const limitArg = process.argv.find((argument) => argument.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.slice("--limit=".length)) : Infinity;
const featuredOnly = process.argv.includes("--featured");
const featuredIds = new Set([
  "raj-place-1", "ker-place-1", "tn-temple-1", "up-place-1", "goa-place-1",
  "mh-place-1", "ka-place-1", "as-place-1", "hp-place-1",
]);
let lastRequestAt = 0;
let requestQueue = Promise.resolve();
let saveQueue = Promise.resolve();

if (!(limit > 0)) throw new Error("--limit must be a positive number.");

const records = JSON.parse(await readFile(dataPath, "utf8"));
const unsearched = records.filter((place) => !place.imageSourceUrl
  && (featuredOnly ? featuredIds.has(place.id) : !place.photoLookupAttempted));
const byState = new Map();
for (const place of unsearched) {
  if (!byState.has(place.state)) byState.set(place.state, []);
  byState.get(place.state).push(place);
}
const spreadTargets = [];
const stateGroups = [...byState.values()];
for (let index = 0; stateGroups.some((group) => index < group.length); index += 1) {
  for (const group of stateGroups) {
    if (group[index]) spreadTargets.push(group[index]);
  }
}
const targets = spreadTargets.slice(0, limit);
let cursor = 0;
let scanned = 0;
let matched = 0;
let failed = 0;

function words(value) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/&/g, " and ").match(/[a-z0-9]+/g) || [];
}

function meaningfulWords(value) {
  return [...new Set(words(value).filter((word) => word.length > 1 && !stopWords.has(word)))];
}

function decodeHtml(value = "") {
  return value.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, "\"")
    .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\s+/g, " ").trim();
}

function candidateScore(title, place) {
  const placeWords = meaningfulWords(place.name);
  if (!placeWords.length || (placeWords.length === 1 && genericNames.has(placeWords[0]))) return 0;
  const titleWords = new Set(meaningfulWords(title));
  const matchedWords = placeWords.filter((word) => titleWords.has(word));
  const minimumMatches = placeWords.length === 1 ? 1 : 2;
  const score = matchedWords.length / placeWords.length;
  return matchedWords.length >= minimumMatches && score >= 0.6 ? score : 0;
}

async function findImage(place) {
  const query = new URLSearchParams({
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: `${place.name} ${place.district} ${place.state}`,
    gsrnamespace: "6",
    gsrlimit: "30",
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    iiurlwidth: "960",
    maxlag: "5",
  });
  const url = `https://commons.wikimedia.org/w/api.php?${query}`;
  let response;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const requestSlot = requestQueue.then(async () => {
      const wait = Math.max(0, requestIntervalMs - (Date.now() - lastRequestAt));
      if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
      lastRequestAt = Date.now();
    });
    requestQueue = requestSlot.catch(() => {});
    await requestSlot;
    response = await fetch(url, {
      headers: { "User-Agent": "SomewhereInIndia/1.0 (Wikimedia Commons attribution lookup)" },
      signal: AbortSignal.timeout(20000),
    });
    if (response.ok) break;
    if (![429, 503].includes(response.status) || attempt === 3) {
      throw new Error(`Wikimedia Commons returned HTTP ${response.status}`);
    }
    const retryAfter = Number(response.headers.get("retry-after")) || 2 ** attempt;
    await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
  }

  const result = await response.json();
  if (result.error) {
    if (result.error.code === "maxlag") throw new Error("Wikimedia Commons is busy; rerun the photo refresh later.");
    throw new Error(`Wikimedia Commons API error: ${result.error.info}`);
  }
  const candidates = Object.values(result.query?.pages || {})
    .map((page) => {
      const info = page.imageinfo?.[0];
      return {
        title: page.title,
        score: candidateScore(page.title, place),
        info,
      };
    })
    .filter(({ score, info }) => score >= 0.75
      && ["image/jpeg", "image/png", "image/webp", "image/avif"].includes(info?.mime)
      && info?.thumburl && info?.descriptionurl);
  candidates.sort((a, b) => b.score - a.score);
  const best = candidates[0];
  if (!best) return null;

  const metadata = best.info.extmetadata || {};
  const artist = decodeHtml(metadata.Artist?.value) || "Wikimedia Commons contributor";
  const license = decodeHtml(metadata.LicenseShortName?.value) || "Wikimedia Commons";
  return {
    image: best.info.thumburl,
    imageCredit: `${artist} · ${license}`,
    imageSourceUrl: best.info.descriptionurl,
    imageTitle: best.title.replace(/^File:/, ""),
  };
}

async function save() {
  const pendingSave = saveQueue.then(async () => {
    await writeFile(temporaryPath, `${JSON.stringify(records, null, 2)}\n`);
    await rename(temporaryPath, dataPath);
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
      const result = await findImage(place);
      place.photoLookupAttempted = true;
      if (result) {
        Object.assign(place, result);
        matched += 1;
      } else if (place.sourceUrl || place.image?.startsWith("photo-") || place.imageCredit?.includes("illustrative")) {
        place.image = null;
        place.imageCredit = "No matching Wikimedia Commons photo found";
      }
    } catch (error) {
      failed += 1;
      console.warn(`Photo lookup failed for ${place.name}, ${place.state}: ${error.message}`);
    }
    scanned += 1;
    if (scanned % 25 === 0 || scanned === targets.length) {
      await save();
      console.log(`Checked ${scanned}/${targets.length}; found ${matched} matching photos; ${failed} lookups failed.`);
    }
  }
}

await Promise.all(Array.from({ length: Math.min(concurrency, targets.length) }, worker));
if (!targets.length) console.log("All records already have a Wikimedia Commons photo attribution.");
console.log(`Finished Wikimedia Commons photo lookup for ${targets.length} places.`);
