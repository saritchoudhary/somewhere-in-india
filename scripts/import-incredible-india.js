import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemapUrl = "https://www.incredibleindia.gov.in/sitemap.xml";
const officialHost = "www.incredibleindia.gov.in";
const stateSlugs = new Map([
  ["andhra-pradesh", "Andhra Pradesh"],
  ["arunachal-pradesh", "Arunachal Pradesh"],
  ["assam", "Assam"],
  ["bihar", "Bihar"],
  ["chhattisgarh", "Chhattisgarh"],
  ["goa", "Goa"],
  ["gujarat", "Gujarat"],
  ["haryana", "Haryana"],
  ["himachal-pradesh", "Himachal Pradesh"],
  ["jharkhand", "Jharkhand"],
  ["karnataka", "Karnataka"],
  ["kerala", "Kerala"],
  ["madhya-pradesh", "Madhya Pradesh"],
  ["maharashtra", "Maharashtra"],
  ["manipur", "Manipur"],
  ["meghalaya", "Meghalaya"],
  ["mizoram", "Mizoram"],
  ["nagaland", "Nagaland"],
  ["odisha", "Odisha"],
  ["punjab", "Punjab"],
  ["rajasthan", "Rajasthan"],
  ["sikkim", "Sikkim"],
  ["tamil-nadu", "Tamil Nadu"],
  ["telangana", "Telangana"],
  ["tripura", "Tripura"],
  ["uttar-pradesh", "Uttar Pradesh"],
  ["uttarakhand", "Uttarakhand"],
  ["west-bengal", "West Bengal"],
  ["andaman-and-nicobar-islands", "Andaman and Nicobar Islands"],
  ["chandigarh", "Chandigarh"],
  ["dadra-and-nagar-haveli-and-daman-and-diu", "Dadra and Nagar Haveli and Daman and Diu"],
  ["delhi", "Delhi"],
  ["jammu-and-kashmir", "Jammu and Kashmir"],
  ["ladakh", "Ladakh"],
  ["lakshadweep", "Lakshadweep"],
  ["puducherry", "Puducherry"],
]);
const districtAliases = new Map([
  ["nilgiris", "the-nilgiris"],
  ["mayabunder", "north-and-middle-andaman"],
  ["rangat", "north-and-middle-andaman"],
  ["sri-vijaya-puram", "south-andamans"],
  ["amaravati", "guntur"],
  ["anantapur", "ananthapuramu"],
  ["machilipatnam", "krishna"],
  ["nellore", "sri-potti-sriramulu-nellore"],
  ["rajahmundry", "east-godavari"],
  ["bomdila", "west-kameng"],
  ["dirang", "west-kameng"],
  ["itanagar", "papum-pare"],
  ["mechuka", "shi-yomi"],
  ["pakke-kesang-hill-station", "pakke-kessang"],
  ["pasighat", "east-siang"],
  ["roing", "lower-dibang-valley"],
  ["yingkiong", "upper-siang"],
  ["ziro", "lower-subansiri"],
  ["guwahati", "kamrup-metro"],
  ["tezpur", "sonitpur"],
  ["umrangso", "dima-hasao"],
  ["arrah", "bhojpur"],
  ["jagdalpur", "bastar"],
  ["silvassa", "dadra-and-nagar-haveli"],
  ["balasinor", "mahisagar"],
  ["bhuj", "kachchh"],
  ["champaner", "panch-mahals"],
  ["dwarka", "devbhumi-dwarka"],
  ["kutch", "kachchh"],
  ["vadnagar", "mahesana"],
  ["chitrakoot", "satna"],
  ["dalhousie", "chamba"],
  ["dharamshala", "kangra"],
  ["kasauli", "solan"],
  ["keylong", "lahaul-and-spiti"],
  ["manali", "kullu"],
  ["spiti-valley", "lahaul-and-spiti"],
  ["gulmarg", "baramulla"],
  ["pahalgam", "anantnag"],
  ["patnitop", "udhampur"],
  ["jamshedpur", "east-singhbum"],
  ["badami", "bagalkote"],
  ["bengaluru", "bengaluru-urban"],
  ["coorg", "kodagu"],
  ["gokarna", "uttara-kannada"],
  ["hampi", "vijayanagara"],
  ["lakkundi", "gadag"],
  ["mangalore", "dakshina-kannada"],
  ["somnathpura", "mysuru"],
  ["bekal", "kasaragod"],
  ["kasargod", "kasaragod"],
  ["kochi", "ernakulam"],
  ["kumarakom", "kottayam"],
  ["munnar", "idukki"],
  ["varkala", "thiruvananthapuram"],
  ["leh", "leh-ladakh"],
  ["kavaratti", "lakshadweep-district"],
  ["chanderi", "ashoknagar"],
  ["khajuraho", "chhatarpur"],
  ["orchha", "niwari"],
  ["pachmarhi", "narmadapuram"],
  ["sanchi", "raisen"],
  ["chhatrapati-sambhaji-nagar", "chhatrapati-sambhajinagar"],
  ["igatpuri", "nashik"],
  ["mahabaleshwar", "satara"],
  ["cherrapunjee", "east-khasi-hills"],
  ["shillong", "east-khasi-hills"],
  ["bhubaneswar", "khordha"],
  ["cuttack", "kataka"],
  ["firozepur", "ferozepur"],
  ["sas-nagar", "s-a-s-nagar"],
  ["mount-abu", "sirohi"],
  ["pelling", "gyalshing"],
  ["kanchipuram", "kancheepuram"],
  ["mamallapuram", "chengalpattu"],
  ["ooty", "the-nilgiris"],
  ["rameswaram", "ramanathapuram"],
  ["bhongir", "yadadri-bhuvanagiri"],
  ["agartala", "west-tripura"],
  ["kanpur", "kanpur-nagar"],
  ["durgapur", "paschim-bardhaman"],
  ["siliguri", "darjeeling"],
  ["berinag", "pithoragarh"],
  ["bhimtal", "nainital"],
  ["badrinath", "chamoli"],
  ["gangotri", "uttarkashi"],
  ["kedarnath", "rudraprayag"],
  ["kausani", "bageshwar"],
  ["lansdowne", "pauri-garhwal"],
  ["mussoorie", "dehradun"],
  ["new-tehri", "tehri-garhwal"],
  ["rishikesh", "dehradun"],
  ["east-singhbhum", "east-singhbum"],
  ["cooch-behar", "cooch-behar"],
  ["delhi", "district-not-specified"],
  ["goa", "district-not-specified"],
  ["imphal", "district-not-specified"],
]);
const placeNameOverrides = new Map([
  ["avis-island", "Alvis Island"],
  ["humayuns-tomb-taj-mahal-of", "Humayun's Tomb"],
]);

function slug(value) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function titleFromSlug(value) {
  const lowercaseWords = new Set(["a", "an", "and", "at", "by", "for", "from", "in", "near", "of", "on", "or", "the", "to", "with"]);
  const wordOverrides = new Map([
    ["cant", "can't"], ["didnt", "didn't"], ["dont", "don't"], ["indias", "India's"], ["isnt", "isn't"],
  ]);
  const formatted = [];
  for (const [index, word] of value.split("-").filter(Boolean).entries()) {
    if (word.toLowerCase() === "s" && formatted.length) {
      formatted[formatted.length - 1] += "'s";
      continue;
    }
    if (/^(asi|ii|up|mp|ncr|unesco)$/i.test(word)) {
      formatted.push(word.toUpperCase());
      continue;
    }
    if (wordOverrides.has(word.toLowerCase())) {
      formatted.push(wordOverrides.get(word.toLowerCase()));
      continue;
    }
    formatted.push(index > 0 && lowercaseWords.has(word.toLowerCase())
      ? word.toLowerCase()
      : word[0].toUpperCase() + word.slice(1));
  }
  return formatted.join(" ");
}

function classify(name, sourcePath) {
  const text = `${name} ${sourcePath}`.toLowerCase();
  if (/(temple|mandir|monastery|math\b|gurudwara|gurdwara|mosque|masjid|church|cathedral|shrine|dargah|tirth|pilgrim|gompa|stupa|ashram|jain temple)/.test(text)) return "temple";
  if (/(food|restaurant|culinary|gastronom|street-food|dining|market|bazaar|bazar|cafe|cafes|eatery|tea-estate|tea-garden|spice-market|food-walk|local-cuisine|haat|shopping-experience)/.test(text)) return "food";
  return "place";
}

function recordFromUrl(url, districts) {
  const route = new URL(url).pathname.split("/").filter(Boolean);
  if (route.length !== 4 || route[0] !== "en" || !stateSlugs.has(route[1])) return null;
  const state = stateSlugs.get(route[1]);
  const localitySlug = route[2];
  const normalizedLocality = slug(localitySlug);
  const placeSlug = route[3];
  const name = placeNameOverrides.get(placeSlug) || titleFromSlug(placeSlug);
  const type = classify(name, placeSlug);
  const rawLocality = titleFromSlug(normalizedLocality);
  const wantedDistrict = state === "Uttar Pradesh" && normalizedLocality === "chitrakoot"
    ? normalizedLocality
    : districtAliases.get(normalizedLocality) || normalizedLocality;
  const actualDistrict = districts.find((item) => item.state === state)
    ?.districts.find((item) => slug(item) === wantedDistrict);
  const district = wantedDistrict === "district-not-specified"
    ? `${rawLocality} (district not specified)`
    : actualDistrict || `${rawLocality} (district not specified)`;
  const common = {
    id: `official-${route[1]}-${localitySlug}-${placeSlug}`,
    type,
    name,
    state,
    district,
    locality: rawLocality,
    description: `${name} is listed as a destination in ${rawLocality}, ${state}, in the official Incredible India destination directory. Check the linked official listing for current visitor details.`,
    tags: type === "temple" ? ["Sacred site", "Official tourism listing", state]
      : type === "food" ? ["Food and markets", "Official tourism listing", state]
        : ["Official tourism listing", state],
    bestTime: "Check seasonal visitor guidance on the official listing.",
    image: null,
    imageCredit: "No verified photo available",
    lat: null,
    lng: null,
    sourceUrl: url,
    sourceName: "Incredible India",
  };
  if (type === "temple") {
    return {
      ...common,
      deity: "See the official listing for site-specific details.",
      history: `Consult the official Incredible India listing for verified history of ${name}.`,
      timings: "Not specified here; confirm current visitor hours with the site.",
      dressCode: "Follow site-specific visitor guidance.",
      nearestCity: rawLocality,
      airport: "Check current local transport and airport information.",
      railway: "Check current local transport and railway information.",
    };
  }
  if (type === "food") {
    return {
      ...common,
      venue: rawLocality,
      highlight: "See the official listing for local food and market details.",
      buy: "Check current local market listings and opening hours.",
    };
  }
  return {
    ...common,
    entryFee: "Check the official listing or venue for current access and fees.",
    highlight: "Check the linked official listing for current visitor information.",
    nearbyAttractions: [],
  };
}

const response = await fetch(sitemapUrl, { signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`Could not download the official sitemap: HTTP ${response.status}`);
const xml = await response.text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
const candidateUrls = new Set();
for (const rawUrl of urls) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    continue;
  }
  if (url.hostname !== officialHost || url.search || url.hash) continue;
  const route = url.pathname.split("/").filter(Boolean);
  if (route.length === 4 && route[0] === "en" && stateSlugs.has(route[1])) candidateUrls.add(url.href);
}

const dataPath = path.join(root, "data", "places.json");
const districtPath = path.join(root, "data", "india-districts.js");
const current = JSON.parse(await readFile(dataPath, "utf8"));
const districtSource = await readFile(districtPath, "utf8");
const districtJson = districtSource.slice(districtSource.indexOf("["), districtSource.lastIndexOf("]") + 1);
const districts = JSON.parse(districtJson);
const existingOfficialRecords = new Map(current.filter((place) => place.sourceUrl).map((place) => [place.id, place]));
const photoFields = ["image", "imageCredit", "imageSourceUrl", "imageSourceName", "imageTitle", "officialPhotoLookupAttempted"];
const officialRecords = [...candidateUrls]
  .map((url) => recordFromUrl(url, districts))
  .filter(Boolean)
  .map((place) => {
    const existing = existingOfficialRecords.get(place.id);
    if (!existing) return place;
    for (const field of photoFields) {
      if (existing[field] !== undefined) place[field] = existing[field];
    }
    return place;
  });
const curatedRecords = current.filter((place) => !place.sourceUrl).map((place) => {
  const unsplashImage = typeof place.image === "string" && place.image.startsWith("photo-");
  if (!place.imageSourceUrl && (unsplashImage || place.imageCredit?.includes("illustrative") || place.photoLookupAttempted)) {
    const refreshed = { ...place, image: null, imageCredit: "No verified photo available" };
    delete refreshed.photoLookupAttempted;
    return refreshed;
  }
  return place;
});
const combined = [...curatedRecords, ...officialRecords].sort((a, b) =>
  a.state.localeCompare(b.state) || a.district.localeCompare(b.district) || a.type.localeCompare(b.type) || a.name.localeCompare(b.name));

await writeFile(dataPath, `${JSON.stringify(combined, null, 2)}\n`);
console.log(`Read ${urls.length} official sitemap URLs.`);
console.log(`Imported ${officialRecords.length} destination pages across ${stateSlugs.size} states and union territories.`);
console.log(`Catalog now contains ${combined.length} records.`);
console.log("New entries link to their official pages; add only verified, credited photos with npm run refresh-photos.");
