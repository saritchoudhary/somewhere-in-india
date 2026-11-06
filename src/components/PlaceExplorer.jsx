import { ArrowRight, ChevronDown, Compass, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { regions } from "../data/regions.js";
import { indiaDistricts } from "../../data/india-districts.js";
import PlaceCard from "./PlaceCard.jsx";

const headings = {
  all: ["A little inspiration", "Places worth the journey", "From old forts and quiet beaches to the trails less travelled."],
  temple: ["A trail through time", "Sacred India", "Explore temples, monasteries, mosques, churches and pilgrimage places."],
  place: ["Out there, somewhere", "India, wide open", "A few of the extraordinary landscapes, neighbourhoods and landmarks waiting for you."],
  food: ["Markets & food", "Local markets and flavours", "Browse markets, bazaars and food experiences from across India."],
};
const homeFeatured = new Set(["raj-place-1", "ker-place-1", "tn-temple-1", "up-place-1", "goa-place-1", "mh-place-1", "ka-place-1", "as-place-1", "hp-place-1"]);

export default function PlaceExplorer({ places, page, initialSearch = "", onAdd, favorites, onFavorite, onOpen }) {
  const [query, setQuery] = useState(initialSearch);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [activeRegion, setActiveRegion] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);
  const type = page === "temples" ? "temple" : page === "food" ? "food" : page === "places" ? "place" : "all";
  const config = headings[type];
  const matching = useMemo(() => places.filter((place) => (type === "all" || place.type === type)
    && (!state || place.state === state)
    && (!district || place.district === district)
    && (!query || `${place.name} ${place.state} ${place.district} ${place.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase()))), [places, type, page, state, district, query]);
  useEffect(() => setVisibleCount(24), [page, state, district, query]);
  const districts = state
    ? [...new Set([
      ...(indiaDistricts.find((region) => region.state === state)?.districts || []),
      ...places.filter((place) => place.state === state).map((place) => place.district),
    ])].sort()
    : [...new Set(places.map((place) => place.district))].sort();
  const states = regions.map((region) => region.name);
  const filteredPlaces = page === "home" && !query && !state && !district ? matching.filter((place) => homeFeatured.has(place.id)) : matching;
  const visiblePlaces = filteredPlaces.slice(0, visibleCount);
  const title = page === "home" ? headings.all[1] : config[1];
  return (
    <section className="explorer-section section-wrap" id="discover">
      <div className="section-intro">
        <div><p className="eyebrow"><span /> {config[0].toUpperCase()}</p><h2>{title.split(" ").slice(0, -1).join(" ")} <em>{title.split(" ").slice(-1)}</em></h2></div>
        <p>{page === "home" ? headings.all[2] : config[2]}</p>
      </div>
      <div className="explorer-controls">
        <label className="explorer-search"><Search size={18} /><span className="sr-only">Search places, districts or states</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search places, districts or states" /></label>
        <label className="select-control"><span className="sr-only">Filter by state</span><select value={state} onChange={(event) => { setState(event.target.value); setDistrict(""); }}><option value="">All states & territories</option>{states.map((name) => <option key={name}>{name}</option>)}</select><ChevronDown size={15} /></label>
        <label className="select-control"><span className="sr-only">Filter by district</span><select value={district} onChange={(event) => setDistrict(event.target.value)}><option value="">All districts</option>{districts.map((name) => <option key={name}>{name}</option>)}</select><ChevronDown size={15} /></label>
        <button className={`filter-toggle ${activeRegion ? "selected" : ""}`} onClick={() => setActiveRegion(!activeRegion)} aria-expanded={activeRegion}><SlidersHorizontal size={16} /><span>Browse states</span></button>
      </div>
      {activeRegion && <motion.div className="region-grid" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
        {regions.map((region) => <button key={region.name} className={state === region.name ? "selected" : ""} onClick={() => { setState(state === region.name ? "" : region.name); setDistrict(""); }}>{region.name}<small>{region.kind === "state" ? "STATE" : "UNION TERRITORY"}</small></button>)}
      </motion.div>}
      <div className="results-heading"><div><Compass size={16} /><span>{filteredPlaces.length} {filteredPlaces.length === 1 ? "place" : "places"} to explore</span></div><span className="results-note">28 states · 8 union territories</span></div>
      {visiblePlaces.length ? <motion.div className="place-grid" layout>
        {visiblePlaces.map((place) => <PlaceCard key={place.id} place={place} onOpen={onOpen} onAdd={onAdd} favorite={favorites.includes(place.id)} onFavorite={onFavorite} />)}
      </motion.div> : <div className="empty-results"><Compass size={25} /><h3>No places match those filters.</h3><p>Try a different search or clear the selected state and district.</p><button className="button-secondary" onClick={() => { setState(""); setDistrict(""); setQuery(""); }}>Clear filters <ArrowRight size={15} /></button></div>}
      {visibleCount < filteredPlaces.length && <button className="button-secondary load-more" onClick={() => setVisibleCount((count) => count + 24)}>Show more places ({filteredPlaces.length - visibleCount} remaining)</button>}
      {page === "home" && <a className="text-link" href="#/places">Explore all destinations <ArrowRight size={16} /></a>}
      <p className="data-note">Browse curated highlights and destinations listed by Incredible India. Always check official local visitor information before setting off.</p>
    </section>
  );
}
