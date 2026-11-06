import { Heart, MapPin, Plus, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { imageUrl } from "./Hero.jsx";

function PlaceCardPhoto({ place }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageFailed, setImageFailed] = useState(false);
  return place.image && !imageFailed
    ? <img className={imageLoading ? "is-loading" : ""} src={imageUrl(place.image, 700)} alt={`${place.name}, ${place.state}`} loading="lazy" onLoad={() => setImageLoading(false)} onError={() => { setImageLoading(false); setImageFailed(true); }} />
    : <span className="card-image-placeholder"><MapPin size={24} /><span>{imageFailed ? "Photo could not be loaded" : "Place photo unavailable"}</span></span>;
}

export default function PlaceCard({ place, onOpen, onAdd, favorite, onFavorite }) {
  const share = async (event) => {
    event.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#/places`;
    if (navigator.share) await navigator.share({ title: place.name, text: `${place.name}, ${place.state}`, url });
    else if (navigator.clipboard) await navigator.clipboard.writeText(`${place.name} — ${place.state}: ${url}`);
  };
  return (
    <motion.article className="place-card" layout whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <button className="card-image-button" onClick={() => onOpen(place)} aria-label={`View details for ${place.name}`}>
        <PlaceCardPhoto key={place.image || "no-image"} place={place} />
        <span className="card-category">{place.tags[0]}</span>
        {place.imageSourceUrl && <span className="card-photo-credit">{place.imageSourceName || "Wikimedia Commons"}</span>}
      </button>
      <div className="card-body">
        <div className="card-location"><MapPin size={13} /> {place.district}, {place.state}</div>
        <button className="card-title" onClick={() => onOpen(place)}>{place.name}</button>
        <p>{place.description}</p>
        <div className="card-actions">
          <button onClick={() => onAdd(place)} className="card-add"><Plus size={15} /> Add to my trip</button>
          <button className={`icon-button ${favorite ? "is-favorite" : ""}`} onClick={() => onFavorite(place.id)} aria-label={favorite ? "Remove from favourites" : "Add to favourites"} aria-pressed={favorite}><Heart size={16} fill={favorite ? "currentColor" : "none"} /></button>
          <button className="icon-button" onClick={share} aria-label={`Share ${place.name}`}><Share2 size={15} /></button>
        </div>
      </div>
    </motion.article>
  );
}
