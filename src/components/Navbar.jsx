import { Compass, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "होम", "#/"], ["Tourist places", "पर्यटन स्थल", "#/places"], ["Markets & Food", "बाज़ार और भोजन", "#/food"],
  ["Temples", "मंदिर", "#/temples"], ["Favourites", "पसंदीदा", "#/favorites"], ["Plan my trip", "यात्रा की योजना", "#/plan"], ["My trip", "मेरी यात्रा", "#/trip"],
];

export default function Navbar({ page, dark, onTheme, language, onLanguage }) {
  const [open, setOpen] = useState(false);
  const active = page === "home" ? "#/" : `#/${page}`;
  return (
    <header className="nav-shell">
      <a className="brand" href="#/" aria-label="Somewhere in India home">
        <span className="brand-mark"><Compass size={21} /></span>
        <span>SOMEWHERE <b>IN INDIA</b><small>FIND YOUR NEXT STORY</small></span>
      </a>
      <button className="mobile-menu icon-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-navigation">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label={language === "EN" ? "Main navigation" : "मुख्य नेविगेशन"}>
        {links.map(([label, hindi, href]) => (
          <a key={href} href={href} className={active === href ? "active" : ""} onClick={() => setOpen(false)}>{language === "EN" ? label : hindi}</a>
        ))}
        <div className="nav-tools">
          <button className="icon-button" onClick={onTheme} aria-label={language === "EN" ? `Switch to ${dark ? "light" : "dark"} theme` : "थीम बदलें"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="language-toggle" onClick={onLanguage} aria-label={language === "EN" ? "Switch to Hindi" : "अंग्रेज़ी पर स्विच करें"}>{language === "EN" ? "हि" : "EN"}</button>
        </div>
      </nav>
    </header>
  );
}
