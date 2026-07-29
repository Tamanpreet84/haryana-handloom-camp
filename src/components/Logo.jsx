import React from 'react';

export default function Logo({ size = 'md', variant = 'light' }) {
  const isFooter = variant === 'dark';

  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Handloom Woven Badge Icon */}
      <div className="relative">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#D97706] p-0.5 shadow-md group-hover:scale-105 transition-transform">
          <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center text-center p-0.5 border border-amber-200/60">
            <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
              <path d="M7 3v18M12 3v18M17 3v18" strokeDasharray="2 2" />
            </svg>
            <span className="text-[8px] font-cinzel font-black tracking-tighter text-[#0F172A] leading-none mt-0.5">
              HHC
            </span>
          </div>
        </div>
        {/* Shiny Crown Badge */}
        <span className="absolute -top-1.5 -right-1.5 bg-[#D97706] text-white text-[8px] font-extrabold px-1 rounded-full border border-white shadow-sm">
          ★
        </span>
      </div>

      {/* Brand Text */}
      <div>
        <h1 className={`font-serif font-bold text-base sm:text-lg md:text-xl tracking-wide leading-tight group-hover:text-[#D97706] transition-colors ${
          isFooter ? 'text-white' : 'text-[#0F172A]'
        }`}>
          HARYANA <span className="text-[#D97706]">HANDLOOM</span> CAMP
        </h1>
        <p className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-bold flex items-center gap-1 ${
          isFooter ? 'text-amber-300' : 'text-[#B45309]'
        }`}>
          <span>WEAVE COMFORT INTO YOUR LIFE</span>
        </p>
      </div>
    </div>
  );
}
