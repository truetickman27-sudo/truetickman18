"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Neymar image - centered behind text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image 
          src="/images/neymar-background.png" 
          alt="Neymar Jr. Background" 
          width={800}
          height={600}
          className="w-auto h-full max-w-none object-cover opacity-100"
          priority
        />
        {/* Gradient blend overlay at the bottom only */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-red-700 via-red-600/60 via-red-600/30 via-red-600/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Main MAYURESH Text - centered over background image */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-black leading-none tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/20 stroke-white stroke-1 md:stroke-2">
            MAYURESH
          </span>
        </h1>
      </div>

      {/* Shop Latest Button */}
      <div className="absolute bottom-6 md:bottom-12 left-4 md:left-8 lg:left-16 z-30">
        <button className="flex items-center space-x-2 md:space-x-3 text-white hover:text-gray-200 transition-all duration-300 group">
          <span className="font-bold tracking-wider text-xs md:text-sm lg:text-base">SHOP LATEST</span>
          <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full flex items-center justify-center group-hover:border-gray-200 group-hover:scale-110 transition-all duration-300">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="md:w-3 md:h-3 transform group-hover:translate-x-0.5 transition-transform">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-white/20 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000 z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 md:w-1.5 md:h-1.5 bg-white/15 rounded-full animate-pulse delay-500 z-10"></div>
    </section>
  );
};

export default Hero;