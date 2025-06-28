"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Verifly</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                className="text-gray-300 hover:text-[var(--neon-green)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-[var(--neon-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-[var(--neon-purple)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <button className="bg-[var(--neon-green)] text-black px-4 py-2 rounded-lg font-medium hover:bg-[var(--neon-blue)] transition-colors neon-glow">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 rounded-lg mt-2">
              <a
                href="#features"
                className="text-gray-300 hover:text-[var(--neon-green)] block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-[var(--neon-blue)] block px-3 py-2 rounded-md text-base font-medium"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-[var(--neon-purple)] block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
              <button className="w-full bg-[var(--neon-green)] text-black px-4 py-2 rounded-lg font-medium hover:bg-[var(--neon-blue)] transition-colors mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
