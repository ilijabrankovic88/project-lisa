"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#uvod", label: "Увод" },
  { href: "#o-jazavicarima", label: "О јазавичарима" },
  { href: "#istorija", label: "Историја" },
  { href: "#moj-ljubimac", label: "Мој љубимац" },
  { href: "#galerija", label: "Галерија" },
  { href: "#video", label: "Видео" },
  { href: "#kontakt", label: "Контакт" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-amber-900/95 backdrop-blur-sm shadow-lg"
          : "bg-amber-900"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <a
          href="#"
          onClick={handleClick}
          className="text-white font-bold text-lg tracking-wide hover:text-amber-300 transition-colors"
        >
          🐕 Лиса
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-amber-100 hover:text-white hover:bg-amber-700/60 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-md hover:bg-amber-700/60 transition-colors"
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-amber-900/95 backdrop-blur-sm border-t border-amber-700">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="block px-6 py-2.5 text-amber-100 hover:text-white hover:bg-amber-700/60 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
