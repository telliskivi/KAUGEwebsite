"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
    { href: "#schedule", label: "Schedule" },
    { href: "#venue", label: "Venue" },
    { href: "#sponsors", label: "Sponsors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-neutral-950/90 backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          KAUGE
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#register"
          className="hidden md:inline-flex items-center gap-2 bg-white text-neutral-950 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200"
        >
          Register Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-white/70">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-white transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className="inline-flex items-center bg-white text-neutral-950 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
