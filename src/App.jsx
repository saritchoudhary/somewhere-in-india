import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Compass, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero.jsx";
import Favorites from "./components/Favorites.jsx";
import MyTrip from "./components/MyTrip.jsx";
import Navbar from "./components/Navbar.jsx";
import PlaceDetailModal from "./components/PlaceDetailModal.jsx";
import PlaceExplorer from "./components/PlaceExplorer.jsx";
import RegionDirectory from "./components/RegionDirectory.jsx";
import TripPlanner from "./components/TripPlanner.jsx";

const readStored = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from local storage.`, error);
    return fallback;
  }
};
function App() {
  const [page, setPage] = useState(() => window.location.hash.replace("#/", "").split("?")[0] || "home");
  const [search, setSearch] = useState(() => new URLSearchParams(window.location.hash.split("?")[1] || "").get("search") || "");
  const [placesData, setPlacesData] = useState(null);
  const [placesError, setPlacesError] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [trip, setTrip] = useState(() => readStored("india-trip", []));
  const [favorites, setFavorites] = useState(() => readStored("india-favorites", []));
  const [dark, setDark] = useState(() => readStored("india-dark", false));
  const [language, setLanguage] = useState(() => readStored("india-language", "EN"));
  useEffect(() => {
    let active = true;
    import("../data/places.json")
      .then(({ default: places }) => { if (active) setPlacesData(places); })
      .catch((error) => {
        console.error("Could not load the destination catalog.", error);
        if (active) setPlacesError("We couldn’t load the destination guide. Please refresh the page to try again.");
      });
    return () => { active = false; };
  }, []);
  useEffect(() => {
    const onHash = () => {
      const [route, query] = window.location.hash.replace("#/", "").split("?");
      const params = new URLSearchParams(query || "");
      setPage(route || "home");
      setSearch(params.get("search") || "");
      const placeId = params.get("place");
      if (placeId) setSelectedPlace(placesData.find((place) => place.id === placeId) || null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    const placeId = new URLSearchParams(window.location.hash.split("?")[1] || "").get("place");
    if (placeId && placesData) setSelectedPlace(placesData.find((place) => place.id === placeId) || null);
    return () => window.removeEventListener("hashchange", onHash);
  }, [placesData]);
  useEffect(() => {
    if (!placesData) return;
    const currentPlaces = new Map(placesData.map((place) => [place.id, place]));
    setTrip((saved) => saved.map((place) => currentPlaces.get(place.id)).filter(Boolean));
  }, [placesData]);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; localStorage.setItem("india-dark", JSON.stringify(dark)); }, [dark]);
  useEffect(() => { localStorage.setItem("india-language", JSON.stringify(language)); document.documentElement.lang = language === "हि" ? "hi" : "en"; }, [language]);
  useEffect(() => { localStorage.setItem("india-trip", JSON.stringify(trip)); }, [trip]);
  useEffect(() => { localStorage.setItem("india-favorites", JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => {
    const onKey = (event) => { if (event.key === "Escape") { setSelectedPlace(null); setChatOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const addToTrip = (place) => setTrip((current) => current.some((item) => item.id === place.id) ? current : [...current, place]);
  const removeFromTrip = (id) => setTrip((current) => current.filter((place) => place.id !== id));
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const reorderTrip = (from, to) => setTrip((current) => { const ordered = [...current]; ordered.splice(to, 0, ordered.splice(from, 1)[0]); return ordered; });
  const pageExists = ["home", "temples", "places", "food", "favorites", "plan", "trip", "directory"].includes(page);
  const explorer = useMemo(() => <PlaceExplorer key={`${page}-${search}`} places={placesData || []} page={page} initialSearch={search} onAdd={addToTrip} favorites={favorites} onFavorite={toggleFavorite} onOpen={setSelectedPlace} />, [page, search, favorites, placesData]);
  if (!placesData) return <>
    <Navbar page={page} dark={dark} onTheme={() => setDark(!dark)} language={language} onLanguage={() => setLanguage(language === "EN" ? "हि" : "EN")} />
    <main className="catalog-state"><div className="catalog-skeleton" aria-hidden="true" /><p role={placesError ? "alert" : "status"}>{placesError || "Finding your somewhere..."}</p></main>
  </>;
  return <>
    <Navbar page={page} dark={dark} onTheme={() => setDark(!dark)} language={language} onLanguage={() => setLanguage(language === "EN" ? "हि" : "EN")} />
    <AnimatePresence mode="wait">
      {!pageExists ? <main className="not-found"><h1>That path isn’t on the map.</h1><a href="#/">Return home</a></main>
      : page === "home" ? <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Hero onSearch={(value) => { setSearch(value); window.location.hash = `#/places?search=${encodeURIComponent(value)}`; }} /><section className="section-wrap category-cards" id="discover"><div className="section-intro"><div><p className="eyebrow"><span /> PICK YOUR PATH</p><h2>Start with what <em>moves you.</em></h2></div><p>Every journey has its own rhythm. Find the one that feels right.</p></div><div className="category-grid">{[["places", "Tourist Places", "Discover landmarks, landscapes, heritage sites and local attractions.", "photo-1477587458883-47145ed94245"], ["food", "Markets & Food", "Find local markets, bazaars and regional food experiences.", "photo-1603894584373-5ac82b2ae398"], ["temples", "Temples", "Explore temples and sacred places across India.", "photo-1606293926075-69a00dbfde81"]].map(([href, title, copy, image]) => <a href={`#/${href}`} key={href} style={{ backgroundImage: `linear-gradient(0deg,rgba(13,31,31,.78),transparent 90%),url(https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=80)` }}><span>{title}</span><p>{copy}</p><ArrowRight size={18} /></a>)}</div></section>{explorer}<section className="section-wrap trending"><p className="eyebrow"><span /> THE TRAVEL EDIT</p><h2>Trending this <em>month.</em></h2><div className="trend-pills">{["Jaipur, Rajasthan", "Munnar, Kerala", "Varanasi, Uttar Pradesh", "Goa coast"].map((item) => <a key={item} href={`#/places?search=${encodeURIComponent(item.split(",")[0])}`}>{item}<ArrowRight size={15} /></a>)}</div></section><RegionDirectory places={placesData} selectedState={selectedState} selectedDistrict={selectedDistrict} onSelectState={setSelectedState} onSelectDistrict={setSelectedDistrict} onOpen={setSelectedPlace} /></motion.main>
      : page === "directory" ? <motion.main key="directory" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><RegionDirectory places={placesData} selectedState={selectedState} selectedDistrict={selectedDistrict} onSelectState={setSelectedState} onSelectDistrict={setSelectedDistrict} onOpen={setSelectedPlace} /></motion.main>
      : page === "favorites" ? <motion.div key="favorites" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Favorites places={placesData} favorites={favorites} onAdd={addToTrip} onFavorite={toggleFavorite} onOpen={setSelectedPlace} /></motion.div>
      : page === "plan" ? <motion.div key="plan" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><TripPlanner trip={trip} /></motion.div>
      : page === "trip" ? <motion.div key="trip" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><MyTrip trip={trip} onRemove={removeFromTrip} onReorder={reorderTrip} /></motion.div>
      : <motion.main key={page} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><header className="page-banner"><p className="eyebrow"><span /> SOMEWHERE IN INDIA</p><h1>{page === "temples" ? <>Temples across <em>India.</em></> : page === "food" ? <>Markets &amp; <em>local flavours.</em></> : <>Tourist places worth the <em>journey.</em></>}</h1><p>Find your next somewhere, one story at a time.</p></header>{explorer}{page === "places" && <RegionDirectory places={placesData} selectedState={selectedState} selectedDistrict={selectedDistrict} onSelectState={setSelectedState} onSelectDistrict={setSelectedDistrict} onOpen={setSelectedPlace} />}</motion.main>}
    </AnimatePresence>
    <footer className="site-footer"><a className="brand footer-brand" href="#/"><span className="brand-mark"><Compass size={20} /></span><span>SOMEWHERE <b>IN INDIA</b><small>FIND YOUR NEXT STORY</small></span></a><p>A starting point for the curious. Please verify opening hours, entry fees and local travel information before your visit.</p><div><a href="#/directory">Explore regions</a><a href="#/favorites">Favourites ({favorites.length})</a><a href="#/plan">Plan a trip</a><a href="#/trip">My trip ({trip.length})</a></div><div className="reference-links"><a href="https://www.incredibleindia.gov.in/en" target="_blank" rel="noreferrer">India Tourism</a><a href="https://whc.unesco.org/en/statesparties/in/" target="_blank" rel="noreferrer">UNESCO India</a><a href="https://asi.nic.in/" target="_blank" rel="noreferrer">Archaeological Survey of India</a></div><small>Photos use credited Wikimedia Commons media where a match is verified; other images are credited Unsplash selections.</small></footer>
    <button className="floating-chat" onClick={() => setChatOpen(true)} aria-label="Open AI trip planner"><Bot size={20} /><span>Plan with AI</span></button>
    <AnimatePresence>{chatOpen && <motion.div className="chat-drawer-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setChatOpen(false)}><motion.aside className="chat-drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}><button className="drawer-close icon-button" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={19} /></button><TripPlanner trip={trip} /><a className="drawer-link" href="#/plan" onClick={() => setChatOpen(false)}>Open full trip planner <ArrowRight size={15} /></a></motion.aside></motion.div>}</AnimatePresence>
    <PlaceDetailModal place={selectedPlace} onClose={() => setSelectedPlace(null)} onAdd={addToTrip} />
  </>;
}

export default App;
