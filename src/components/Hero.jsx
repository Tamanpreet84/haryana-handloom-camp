import React from 'react';
import { ShieldCheck, Award, Sparkles, MessageCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:py-20">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#e6c265]/15 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Poster Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#162d5a] via-[#203c75] to-[#162d5a] border border-[#e6c265]/50 shadow-[0_4px_20px_rgba(230,194,101,0.2)]">
              <Award className="w-4 h-4 text-[#e6c265]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#f7e6a1] font-serif">
                WEAVE COMFORT INTO YOUR LIFE
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                HARYANA <br />
                <span className="gold-text">HANDLOOM CAMP</span>
              </h1>
              <p className="text-base sm:text-xl text-slate-300 font-medium tracking-wide">
                PREMIUM HOME FURNISHING COLLECTION
              </p>
            </div>

            {/* Quality Statement from Poster */}
            <div className="p-4 rounded-2xl bg-[#0f2042]/70 border border-[#e6c265]/30 backdrop-blur-md max-w-xl mx-auto lg:mx-0">
              <div className="grid grid-cols-3 divide-x divide-[#e6c265]/20 text-center">
                <div className="px-2">
                  <span className="block text-[#e6c265] font-serif font-bold text-sm sm:text-base">Finest Quality</span>
                  <span className="text-[11px] text-slate-300">100% Handloom</span>
                </div>
                <div className="px-2">
                  <span className="block text-[#e6c265] font-serif font-bold text-sm sm:text-base">Beautiful Designs</span>
                  <span className="text-[11px] text-slate-300">Exclusive Patterns</span>
                </div>
                <div className="px-2">
                  <span className="block text-[#e6c265] font-serif font-bold text-sm sm:text-base">Unmatched Comfort</span>
                  <span className="text-[11px] text-slate-300">Super Soft Touch</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-sans">
              Transform your home with comfort & style! Discover our extensive range of high-thread-count bedsheets, luxurious cushion covers, blackout curtains, plush mink blankets, light polar fleeces, and warm woolen shawls.
            </p>

            {/* Poster Quick Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1 text-xs">
              {['BED SHEETS', 'CUSHION COVERS', 'CURTAINS', 'COMFORTERS', 'BLANKETS', 'POLAR BLANKETS', 'SHAWLS', 'PILLOWS'].map((item) => (
                <span key={item} className="badge-gold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e6c265]" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#categories" className="btn-gold">
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STORE_DETAILS.whatsapp}?text=Hello!%20I%20saw%20your%20Haryana%20Handloom%20Camp%20website%20and%20would%20like%20to%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Order</span>
              </a>
              <a
                href={`tel:+91${STORE_DETAILS.phones[0]}`}
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#e6c265] underline underline-offset-4 font-medium px-2 py-1"
              >
                <Phone className="w-4 h-4 text-[#e6c265]" />
                <span>Call {STORE_DETAILS.phones[0]}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Poster Feature Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow Border Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#f7e6a1] via-[#e6c265] to-[#b88d2d] opacity-40 blur-lg animate-glow"></div>
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-[#0b1833] border-2 border-[#e6c265]/50 p-6 shadow-2xl space-y-6">
                
                {/* Poster Header Replica */}
                <div className="flex items-center justify-between pb-4 border-b border-[#e6c265]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-[#e6c265] bg-[#070d1a] flex items-center justify-center font-serif font-black text-lg text-[#e6c265]">
                      HH
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-white text-base">HARYANA HANDLOOM</h3>
                      <p className="text-[10px] text-[#e6c265] font-semibold tracking-wider">CAMP • NANDYAL</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#162d5a] border border-[#e6c265]/40 text-xs font-semibold text-[#f7e6a1]">
                    Direct Loom Prices
                  </div>
                </div>

                {/* Grid Showcase of Poster Categories */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative group overflow-hidden rounded-xl border border-[#e6c265]/30">
                    <img
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80"
                      alt="Bed Sheets"
                      className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
                      <span className="font-serif font-bold text-xs text-white">BED SHEETS</span>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-xl border border-[#e6c265]/30">
                    <img
                      src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80"
                      alt="Cushion Covers"
                      className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
                      <span className="font-serif font-bold text-xs text-white">CUSHION COVERS</span>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-xl border border-[#e6c265]/30">
                    <img
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
                      alt="Curtains"
                      className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
                      <span className="font-serif font-bold text-xs text-white">CURTAINS</span>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-xl border border-[#e6c265]/30">
                    <img
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80"
                      alt="Comforters"
                      className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
                      <span className="font-serif font-bold text-xs text-white">COMFORTERS & MINK</span>
                    </div>
                  </div>
                </div>

                {/* Poster Footer Info */}
                <div className="pt-2 text-center text-xs text-slate-300 bg-[#070d1a]/80 p-3 rounded-xl border border-[#e6c265]/20">
                  <p className="font-semibold text-[#e6c265]">📍 Store Address:</p>
                  <p>{STORE_DETAILS.address}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
