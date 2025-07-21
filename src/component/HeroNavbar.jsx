import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", target: "home" },
  { label: "Feature", target: "feature" },
  { label: "App Intro", target: "intro" },
  { label: "Download", target: "download" },
];

export default function HeroNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky after leaving hero section (100px below top)
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-300
        ${
          isSticky
            ? "fixed  translate-y-0 bg-background/80 backdrop-blur-sm border-b"
            : "absolute bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-24" />
        </div>
        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 transition"
            >
              {link.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t shadow-lg">
          <div className="flex flex-col gap-2 px-4 py-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2 text-left w-full"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
