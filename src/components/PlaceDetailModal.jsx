import { AnimatePresence, motion } from "framer-motion";
import { Clock3, MapPin, Plus, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { imageUrl } from "./Hero.jsx";

export default function PlaceDetailModal({ place, onClose, onAdd }) {
  const [imageFailed, setImageFailed] = useState(false);
  useEffect(() => setImageFailed(false), [place?.image]);
  if (!place) return null;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, ${place.district}, ${place.state}, India`)}`;
  const commonsSearchUrl = `https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=${encodeURIComponent(`${place.name} ${place.district} ${place.state}`)}`;
  const photoSourceUrl = place.imageSourceUrl || (place.image && place.sourceUrl ? place.sourceUrl : "");
  const photoSourceName = place.imageSourceName
    || (photoSourceUrl.includes("wikimedia.org") ? "Wikimedia Commons" : place.sourceName || "Photo source");
  const gallery = place.image && !imageFailed ? [place] : [];
  const share = async () => {
    if (navigator.share) await navigator.share({ title: place.name, url: mapUrl });
    else if (navigator.clipboard) await navigator.clipboard.writeText(mapUrl);
  };
  return (
    <AnimatePresence>
      {place && <motion.div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.section className="place-modal" role="dialog" aria-modal="true" aria-labelledby="modal-place-name" initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
          <button className="modal-close icon-button" onClick={onClose} aria-label="Close details"><X size={20} /></button>
          <div className="modal-gallery">
            {gallery.length
              ? gallery.map((item) => <img key={item.id} className="modal-image" src={imageUrl(item.image, 1200)} alt={`${place.name}, ${place.district}, ${place.state}`} loading="eager" onError={() => setImageFailed(true)} />)
              : <div className="modal-image-placeholder"><MapPin size={28} /><span>{imageFailed ? "Photo could not be loaded" : "Place photo unavailable"}</span></div>}
          </div>
          <div className="modal-content">
            <p className="eyebrow"><span /> {place.type === "food" ? "A TASTE OF INDIA" : place.type === "temple" ? "SACRED PLACES" : "GO A LITTLE FURTHER"}</p>
            <h2 id="modal-place-name">{place.name}</h2>
            <p className="modal-place"><MapPin size={15} /> {place.district}, {place.state}</p>
            <p className="modal-description">{place.description}</p>
            <div className="modal-facts">
              <div><span>BEST TIME</span><strong>{place.bestTime}</strong></div>
              <div><span>{place.type === "food" ? "DON'T MISS" : "GOOD TO KNOW"}</span><strong>{place.highlight}</strong></div>
              {place.type === "temple" && <>
                <div><span>DEITY / DEDICATION</span><strong>{place.deity}</strong></div>
                <div><span>VISIT NOTES</span><strong><Clock3 size={14} /> {place.timings} · {place.dressCode}</strong></div>
                <div><span>NEAREST CONNECTIONS</span><strong>{place.nearestCity} · {place.airport} · {place.railway}</strong></div>
              </>}
              {place.type === "temple" && <div><span>HISTORY</span><strong>{place.history}</strong></div>}
              {place.type === "place" && <>
                <div><span>ENTRY</span><strong>{place.entryFee}</strong></div>
                <div><span>NEARBY</span><strong>{place.nearbyAttractions.join(" · ")}</strong></div>
              </>}
              {place.type === "food" && <>
                <div><span>WHERE TO FIND IT</span><strong>{place.venue}</strong></div>
                <div><span>WHAT TO EAT OR BUY</span><strong>{place.buy}</strong></div>
              </>}
            </div>
            <div className="modal-tags">{place.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="modal-actions"><button className="button-primary" onClick={() => { onAdd(place); onClose(); }}><Plus size={16} /> Add to my trip</button><a className="button-secondary" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={15} /> Open map</a><button className="icon-button" onClick={share} aria-label="Share place"><Share2 size={16} /></button></div>
            {place.sourceUrl && <p className="official-source">Source listing: <a href={place.sourceUrl} target="_blank" rel="noreferrer">{place.sourceName || "Official tourism website"} <span aria-hidden="true">↗</span></a></p>}
            {photoSourceUrl
              ? <small className="photo-note">Photo: <a href={photoSourceUrl} target="_blank" rel="noreferrer">{place.imageCredit || photoSourceName}</a>{place.imageCredit && place.imageCredit !== photoSourceName ? ` · ${photoSourceName}` : ""}.</small>
              : <small className="photo-note">{place.image ? `Photo credit: ${place.imageCredit || "Unsplash"}.` : "No matching place photo is available in our collection yet."} <a href={commonsSearchUrl} target="_blank" rel="noreferrer">Search Wikimedia Commons for a photo of this place</a></small>}
          </div>
        </motion.section>
      </motion.div>}
    </AnimatePresence>
  );
}
