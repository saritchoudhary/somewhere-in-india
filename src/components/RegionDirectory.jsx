import { MapPin } from "lucide-react";
import { indiaDistricts } from "../../data/india-districts.js";
import { regions } from "../data/regions.js";

export default function RegionDirectory({ onSelectState, selectedState, selectedDistrict, onSelectDistrict, places, onOpen }) {
  const officialDistricts = indiaDistricts.find((entry) => entry.state === selectedState)?.districts || [];
  const districts = [...new Set([
    ...officialDistricts,
    ...places.filter((place) => place.state === selectedState).map((place) => place.district),
  ])].sort((a, b) => a.localeCompare(b));
  const statePlaces = places.filter((place) => place.state === selectedState && (!selectedDistrict || place.district.toLowerCase() === selectedDistrict.toLowerCase()));
  const districtCount = (district) => places.filter((place) => place.state === selectedState && place.district.toLowerCase() === district.toLowerCase()).length;
  return <section className="directory section-wrap"><div className="section-intro"><div><p className="eyebrow"><span /> THE INDIA DIRECTORY</p><h2>Thirty-six ways to <em>begin.</em></h2></div><p>Choose a state or union territory to discover its districts and featured places.</p></div>
    <div className="region-grid directory-grid">{regions.map((region) => <button key={region.name} className={selectedState === region.name ? "selected" : ""} onClick={() => { onSelectState(selectedState === region.name ? "" : region.name); onSelectDistrict(""); }}>{region.name}<small>{region.kind === "state" ? "STATE" : "UNION TERRITORY"}</small></button>)}</div>
    {selectedState && <div className="district-browser"><h3>{selectedState} <small>{officialDistricts.length} districts · {districts.length - officialDistricts.length} listed localities</small></h3><div className="district-chips">{districts.map((district) => <button key={district} className={district === selectedDistrict ? "selected" : ""} onClick={() => onSelectDistrict(district === selectedDistrict ? "" : district)}>{district}<small>{districtCount(district)}</small></button>)}</div><div className="directory-results"><h3>{selectedDistrict || "All listed places"} <small>{statePlaces.length} places in this collection</small></h3>{statePlaces.length ? <div className="directory-place-list">{statePlaces.map((place) => <button onClick={() => onOpen(place)} key={place.id}><MapPin size={14} />{place.name}<small>{place.type}</small></button>)}</div> : <p>There are no catalog entries for this district yet. Try another district or explore all listed places in {selectedState}.</p>}</div></div>}
  </section>;
}
