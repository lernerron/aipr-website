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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top row: logos + phone — balanced with consistent heights */}
        <div className="flex items-center justify-between py-4 lg:py-5">
          <a href="/" className="shrink-0">
            <Image
              src="/images/aging-in-place-logo.png"
              alt="Aging in Place Remodeling"
              width={220}
              height={48}
              className="w-40 md:w-48 lg:w-52 h-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs lg:text-sm font-bold text-text-light tracking-wide uppercase whitespace-nowrap">
              #1 US Dealer of
            </span>
            <Image
              src="/images/sitltz-logo.jpg"
              alt="Stiltz Homelifts"
              width={120}
              height={44}
              className="h-9 lg:h-10 w-auto"
            />
          </div>

          <div className="hidden md:block text-right">
            <a
              href="tel:8587768700"
              className="text-xl lg:text-2xl font-bold text-primary no-underline hover:text-primary-hover transition-colors"
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

        {/* Navigation — centered, separated by a subtle top border */}
        <nav
          className={`${
            menuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          } md:border-t md:border-gray-100 overflow-hidden transition-all duration-300 ease-in-out`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-8 lg:gap-10 md:py-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 md:py-1 text-base lg:text-lg font-semibold text-text-main no-underline hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact-us/"
                className="inline-block mt-2 md:mt-0 px-7 py-2.5 bg-primary text-white font-bold text-base lg:text-lg rounded-lg no-underline border-2 border-primary hover:bg-primary-hover hover:border-primary-hover hover:text-white transition-all"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile phone */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
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
