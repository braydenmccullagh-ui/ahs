"use client";

import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#whyus" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const animationDelays = [
    "animation-delay-100",
    "animation-delay-200",
    "animation-delay-300",
    "animation-delay-400",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 animate-slide-down">
      <nav
        className="bg-gray-900/90 backdrop-blur-sm rounded-2xl max-w-6xl mx-auto"
        aria-label="Main navigation"
      >
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo - Left */}
            <div className="shrink-0 animate-fade-in-up animation-delay-100 opacity-0">
              <Logo />
            </div>

            {/* Nav Links - Center (hidden on mobile/tablet) */}
            <ul className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`animate-fade-in-up opacity-0 ${animationDelays[index]}`}
                >
                  <a
                    href={link.href}
                    className="inline-block text-gray-200 hover:text-white hover:scale-105 font-medium transition-all duration-200 active:scale-95"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button with Phone - Right (hidden on mobile/tablet) */}
            <div className="hidden lg:block animate-fade-in-up opacity-0 animation-delay-500">
              <Button size="md" variant="outline" />
            </div>

            {/* Hamburger Menu Button (mobile/tablet only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-200 hover:bg-gray-800 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isOpen ? (
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

          {/* Mobile/Tablet Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="py-4 space-y-2 border-t border-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-gray-200 hover:bg-gray-800 hover:text-white hover:translate-x-2 active:scale-95 font-medium rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-4 pt-2">
                <Button
                  size="md"
                  variant="outline"
                  className="w-full justify-center"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
