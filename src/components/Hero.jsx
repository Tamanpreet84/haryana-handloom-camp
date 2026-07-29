import React from 'react';
import { Award, Sparkles, MessageCircle, Phone, ArrowRight, IndianRupee, Layers, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-14 md:py-20 bg-gradient-to-b from-[#F9F7F1] via-[#F1ECE1] to-[#F9F7F1]">
      {/* Background Decorative Soft Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-amber-200/40 via-orange-100/30 to-amber-300/20 blur-[140px] pointer-events-none rounded-full animate-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-5xl mx-auto text-center space-y-5 mb-10 md:mb-12">
          
          {/* Top Emblem Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#F3EFE6] border border-amber-300/80 shadow-sm">
            <Award className="w-4.5 h-4.5 text-[#B45309] animate-bounce" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0F172A] font-cinzel uppercase">
              WEAVE COMFORT INTO YOUR LIFE
            </span>
          </div>

          {/* Title Banner */}
          <div className="space-y-2">
            <h1 className="font-cinzel text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#0F172A] leading-tight">
              HARYANA <span className="gold-text">HANDLOOM CAMP</span>
            </h1>
            <p className="text-sm sm:text-xl font-extrabold tracking-widest text-[#B45309] uppercase font-serif">
              {STORE_DETAILS.subtitle}
            </p>
          </div>

          <p className="text-slate-700 text-xs sm:text-base md:text-lg max-w-3xl mx-auto font-sans font-medium leading-relaxed">
            Welcome to Nandyal's premier home furnishing destination on NK Road! Explore high-thread-count bedsheets, heavy velvet cushion covers, blackout curtains, plush Korean mink blankets, polar fleeces & hotel bounce pillows.
          </p>

          {/* Quick Contact Buttons for both 9215211025 and 9215511025 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:+91${STORE_DETAILS.phones[0].number}`}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-[#0F172A] text-white hover:bg-[#B45309] text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg touch-target"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Call Line 1: {STORE_DETAILS.phones[0].number}</span>
            </a>
            <a
              href={`tel:+91${STORE_DETAILS.phones[1].number}`}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-[#0F172A] text-white hover:bg-[#B45309] text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg touch-target"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Call Line 2: {STORE_DETAILS.phones[1].number}</span>
            </a>
          </div>

        </div>

        {/* Store Digital Showcase Frame */}
        <div className="relative mx-auto max-w-6xl">
          
          {/* Outer Golden Glow Frame */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#0F172A] opacity-25 blur-xl"></div>

          <div className="relative rounded-3xl bg-white border-2 border-amber-200/80 p-5 sm:p-8 md:p-10 shadow-xl space-y-8 md:space-y-10">
            
            {/* Poster Quality Statement Ribbon */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF7] border border-amber-200/80 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center gap-3 md:gap-0">
                <div className="py-2 md:py-0 md:px-6 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#0F172A]">
                    <ShieldCheck className="w-5 h-5 text-[#D97706]" />
                    <span className="font-cinzel font-bold text-base sm:text-lg">Finest Quality</span>
                  </div>
                  <span className="text-xs text-slate-600 block font-semibold">100% Handloom Checked & Color Fast</span>
                </div>
                <div className="py-2 md:py-0 md:px-6 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#0F172A]">
                    <Sparkles className="w-5 h-5 text-[#D97706]" />
                    <span className="font-cinzel font-bold text-base sm:text-lg">Beautiful Designs</span>
                  </div>
                  <span className="text-xs text-slate-600 block font-semibold">Exclusive Heritage & Modern Collections</span>
                </div>
                <div className="py-2 md:py-0 md:px-6 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#0F172A]">
                    <HeartHandshake className="w-5 h-5 text-[#D97706]" />
                    <span className="font-cinzel font-bold text-base sm:text-lg">Unmatched Comfort</span>
                  </div>
                  <span className="text-xs text-slate-600 block font-semibold">Super Soft Touch & High Thread Counts</span>
                </div>
              </div>
            </div>

            {/* 7 Store Categories Interactive Grid */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#D97706]"></div>
                <h3 className="font-cinzel font-extrabold text-lg sm:text-xl text-[#0F172A] tracking-wider text-center">
                  EXPLORE STORE CATEGORIES
                </h3>
                <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#D97706]"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { name: 'BED SHEETS', img: '/images/bedsheets/bs-light-blue-block.png', desc: 'Single, Double & King' },
                  { name: 'CUSHION COVERS', img: '/images/cushion-covers/cc-crimson-velvet-zari.png', desc: 'Embroidered Velvet' },
                  { name: 'CURTAINS', img: '/images/curtains/curtain-emerald-jacquard.png', desc: '85% - 100% Blackout' },
                  { name: 'COMFORTERS', img: '/images/comforters/com-cashmere-sky-blue.jpg', desc: 'Microfiber & Duvets' },
                  { name: 'MINK BLANKETS', img: '/images/blankets/blk-brown-rose-leopard.png', desc: 'Korean 3D Embossed' },
                  { name: 'POLAR BLANKETS', img: '/images/polar-fleeces/pb-blue-checked-rose.png', desc: 'Light AC Fleeces' },
                  { name: 'PILLOWS & FORM', img: '/images/pillows/pil-white-plush-bounce.png', desc: 'Ergonomic Bounce' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#categories"
                    className="relative group overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-900 h-36 sm:h-40 block shadow-md transition-all duration-300 hover:border-[#D97706] hover:shadow-xl"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                      <span className="font-cinzel font-bold text-xs sm:text-sm text-white group-hover:text-amber-300 transition-colors leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-slate-200 font-sans">
                        {item.desc}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 4 Main Quality Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-amber-200/80 text-center hover:border-[#D97706] transition-colors shadow-sm">
                <Award className="w-6 h-6 text-[#D97706] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-[#0F172A] block">BEST QUALITY</span>
                <span className="text-[11px] text-slate-600 font-semibold">100% Tested Fabrics</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-amber-200/80 text-center hover:border-[#D97706] transition-colors shadow-sm">
                <Sparkles className="w-6 h-6 text-[#D97706] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-[#0F172A] block">LATEST DESIGNS</span>
                <span className="text-[11px] text-slate-600 font-semibold">Traditional & Modern</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-amber-200/80 text-center hover:border-[#D97706] transition-colors shadow-sm">
                <IndianRupee className="w-6 h-6 text-[#D97706] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-[#0F172A] block">AFFORDABLE PRICES</span>
                <span className="text-[11px] text-slate-600 font-semibold">Direct Loom Pricing</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-amber-200/80 text-center hover:border-[#D97706] transition-colors shadow-sm">
                <Layers className="w-6 h-6 text-[#D97706] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-[#0F172A] block">ALL SIZES</span>
                <span className="text-[11px] text-slate-600 font-semibold">Single, Double & Custom</span>
              </div>
            </div>

            {/* Poster Footer Info Ribbon */}
            <div className="p-5 rounded-2xl bg-[#0F172A] text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs">
              <div className="space-y-1">
                <p className="font-bold text-amber-300 flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-cinzel">
                  <MapPin className="w-4 h-4 text-amber-300" /> STORE ADDRESS:
                </p>
                <p className="text-slate-200 text-xs sm:text-sm font-medium">{STORE_DETAILS.address}</p>
              </div>

              <div className="flex gap-3">
                <a href="#categories" className="px-5 py-2.5 rounded-full bg-[#D97706] text-white hover:bg-[#B45309] text-xs font-bold transition-all flex items-center gap-1.5 shadow touch-target">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl(0, 'Hello! I saw the Haryana Handloom Camp store poster on your website.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-amber-300 text-white hover:bg-white/10 text-xs font-bold transition-all flex items-center gap-1.5 touch-target"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
