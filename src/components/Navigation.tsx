"use client";
import { useState } from "react";

const links = [
  ["Projects", "projects"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Journey", "journey"],
  ["Certificates", "certificates"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="wordmark" href="#home" aria-label="Rohith Kumar home">
          Rk
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
