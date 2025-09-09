"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 md:py-6 text-white relative z-30">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-sm md:text-lg lg:text-xl font-bold tracking-[0.2em] hover:text-gray-200 transition-colors cursor-pointer">
          TRUETICKMAN
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
        <Link href="/about" className="hover:text-gray-200 transition-colors font-semibold text-sm lg:text-base tracking-wide relative group">
          ABOUT
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
        </Link>
        <a href="#" className="hover:text-gray-200 transition-colors font-semibold text-sm lg:text-base tracking-wide relative group">
          SOCIAL MEDIA
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
        </a>
        <a href="#" className="hover:text-gray-200 transition-colors font-semibold text-sm lg:text-base tracking-wide relative group">
          SKILLSET
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
        </a>
      </nav>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="text-white hover:text-gray-200 transition-colors ml-2 p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Close icon (X)
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-6 md:h-6">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger icon
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-6 md:h-6">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-red-700/95 backdrop-blur-sm lg:hidden border-t border-white/20">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link 
              href="/about" 
              className="hover:text-gray-200 transition-colors font-semibold text-base tracking-wide py-2 border-b border-white/10 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <a 
              href="#" 
              className="hover:text-gray-200 transition-colors font-semibold text-base tracking-wide py-2 border-b border-white/10 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SOCIAL MEDIA
            </a>
            <a 
              href="#" 
              className="hover:text-gray-200 transition-colors font-semibold text-base tracking-wide py-2 border-b border-white/10 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SKILLSET
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;