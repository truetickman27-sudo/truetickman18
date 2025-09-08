import React from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold tracking-wider">PARIS SAINT-GERMAIN</h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="hover:text-gray-200 transition-colors font-medium">
          STORE
        </a>
        <a href="#" className="hover:text-gray-200 transition-colors font-medium">
          TICKETS
        </a>
        <a href="#" className="hover:text-gray-200 transition-colors font-medium">
          MY PARIS
        </a>
      </nav>

      {/* Right side with Shop and Cart */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 hover:text-gray-200 transition-colors cursor-pointer">
          <span className="font-medium">SHOP</span>
          <ChevronRight size={16} />
        </div>
        <div className="cursor-pointer hover:text-gray-200 transition-colors">
          <ShoppingCart size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;