import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with Neymar image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-6xl">
          {/* This would be where Neymar's image goes - using a placeholder for now */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-black/20 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">Neymar Image Placeholder</span>
          </div>
        </div>
      </div>

      {/* Large NEYMAR Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-wider">
          NEYMAR
        </h1>
      </div>

      {/* Shop Latest Button */}
      <div className="absolute bottom-20 left-8">
        <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors group">
          <span className="font-medium tracking-wider">SHOP LATEST</span>
          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center group-hover:border-gray-200 transition-colors">
            <span className="text-xs">→</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;