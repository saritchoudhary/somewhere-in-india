import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { title: "The pink city", place: "Hawa Mahal", state: "Jaipur, Rajasthan", image: "photo-1599661046827-dacff0c0f09a", tone: "amber" },
  { title: "A quieter kind of blue", place: "Dal Lake", state: "Srinagar, Jammu & Kashmir", image: "photo-1566837497312-7be7830ae9b1", tone: "blue" },
  { title: "Where the hills breathe", place: "Tea gardens", state: "Munnar, Kerala", image: "photo-1602216056096-3b40cc0c9944", tone: "green" },
  { title: "A monument to forever", place: "Taj Mahal", state: "Agra, Uttar Pradesh", image: "photo-1564507592333-c60657eea523", tone: "rose" },
  { title: "The long way to the sea", place: "Palolem Beach", state: "South Goa", image: "photo-1512343879784-a960bf40e7f2", tone: "teal" },
];

export function imageUrl(id, width = 1500) {
  if (!id) return "";
  if (/^(https?:\/\/|\/)/i.test(id)) return id;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export default function Hero({ onSearch }) {
  const [slide, setSlide] = useState(0);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % slides.length), 4000);
    return () => window.clearInterval(timer);
  }, []);
  const submit = (event) => {
    event.preventDefault();
    window.location.hash = "#/places";
    onSearch(query);
  };
  return (
    <section className="hero" aria-label="Discover India">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide}
          className={`hero-slide tone-${slides[slide].tone}`}
          style={{ backgroundImage: `url("${imageUrl(slides[slide].image)}")` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
          aria-hidden="true"
        />
      </AnimatePresence>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow light-eyebrow"><span /> A COUNTRY OF A THOUSAND STORIES</p>
        <h1>Find your<br /><em>somewhere.</em></h1>
        <p className="hero-lede">From Himalayan mornings to coastlines warmed by the sun—there's always more to discover in India.</p>
        <form className="hero-search" onSubmit={submit} role="search">
          <Search size={19} aria-hidden="true" />
          <label className="sr-only" htmlFor="hero-search">Search a place, district or state</label>
          <input id="hero-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Where would you like to go?" />
          <button type="submit" aria-label="Search destinations"><ArrowRight size={20} /></button>
        </form>
        <a className="hero-scroll" href="#discover"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </div>
      <div className="hero-caption"><span>{slides[slide].place}</span><small>{slides[slide].state}</small><span className="photo-credit">Photo via Unsplash</span></div>
      <div className="hero-index"><strong>0{slide + 1}</strong><span />0{slides.length}</div>
    </section>
  );
}
