"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "About Us", href: "/about-us/" },
  { label: "Products & Services", href: "/products-and-services/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "B2B Consulting", href: "/consulting/" },
  { label: "Locations", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 lg:py-5">
        {/* Top row: logos + phone */}
        <div className="flex items-center justify-between">
          <a href="/" className="shrink-0">
            <Image
              src="/images/aging-in-place-logo.png"
              alt="Aging in Place Remodeling"
              width={280}
              height={60}
              className="w-48 md:w-64 lg:w-72 h-auto"
              priority
            />
          </a>

          <div className="hidden md:flex flex-col items-center text-center">
            <Image
              src="/images/sitltz-logo.jpg"
              alt="Stiltz Homelifts"
              width={160}
              height={60}
              className="h-14 lg:h-16 w-auto"
            />
            <span className="text-sm font-bold text-text-main mt-1">#1 US Dealer</span>
          </div>

          <div className="hidden md:block text-right">
            <a
              href="tel:8587768700"
              className="text-2xl lg:text-3xl font-bold text-primary no-underline hover:text-primary-hover"
            >
              (858) 776-8700
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-text-main hover:bg-gray-100"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          } md:mt-4 overflow-hidden transition-all duration-300 ease-in-out`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 md:py-1 text-lg font-semibold text-text-main no-underline hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact-us/"
                className="inline-block mt-2 md:mt-0 px-6 py-3 bg-primary text-white font-bold text-lg rounded-lg border-2 border-primary no-underline hover:bg-white hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile phone + Stiltz */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            <a
              href="tel:8587768700"
              className="block text-xl font-bold text-primary no-underline text-center"
            >
              (858) 776-8700
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
