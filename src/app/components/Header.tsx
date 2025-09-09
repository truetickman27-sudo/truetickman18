import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 md:py-6 text-white relative z-30">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-sm md:text-lg lg:text-xl font-bold tracking-[0.2em] hover:text-gray-200 transition-colors cursor-pointer">
          TRUETICKMAN
        </Link>
      </div>

      {/* Navigation */}
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

      {/* Navigation end spacer */}
      <div className="flex items-center">
        {/* Spacer for responsive layout */}
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button className="text-white hover:text-gray-200 transition-colors ml-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-6 md:h-6">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;