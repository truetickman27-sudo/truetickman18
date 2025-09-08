"use client";

import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      <Header />
      <Hero />
      
      {/* Additional sections */}
      <section className="py-10 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-white">
            {/* Latest News */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-wide">LATEST NEWS</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Stay updated with the latest PSG news, match results, and player updates.
              </p>
              <button className="mt-3 md:mt-4 text-sm font-semibold hover:text-gray-200 transition-colors">
                READ MORE →
              </button>
            </div>
            
            {/* Match Schedule */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-wide">NEXT MATCH</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Check out our upcoming fixtures and get your tickets for the next big game.
              </p>
              <button className="mt-3 md:mt-4 text-sm font-semibold hover:text-gray-200 transition-colors">
                VIEW SCHEDULE →
              </button>
            </div>
            
            {/* Store */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-wide">OFFICIAL STORE</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Get the latest PSG jerseys, merchandise, and exclusive collections.
              </p>
              <button className="mt-3 md:mt-4 text-sm font-semibold hover:text-gray-200 transition-colors">
                SHOP NOW →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
