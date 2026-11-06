import { Heart } from "lucide-react";
import PlaceCard from "./PlaceCard.jsx";

export default function Favorites({ places, favorites, onAdd, onFavorite, onOpen }) {
  const saved = places.filter((place) => favorites.includes(place.id));
  return <main className="favorites-page section-wrap">
    <header className="page-banner"><p className="eyebrow"><span /> YOUR PERSONAL COLLECTION</p><h1>Places to <em>remember.</em></h1><p>Keep the destinations you love close at hand.</p></header>
    {saved.length ? <div className="place-grid">{saved.map((place) => <PlaceCard key={place.id} place={place} onOpen={onOpen} onAdd={onAdd} favorite onFavorite={onFavorite} />)}</div>
      : <div className="empty-trip"><Heart size={32} /><h2>A few favourites make a journey.</h2><p>Tap the heart on any destination to save it here.</p><a className="button-primary" href="#/places">Explore places</a></div>}
  </main>;
}
