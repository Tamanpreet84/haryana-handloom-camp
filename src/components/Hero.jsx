import React from 'react';
import { Award, Sparkles, MessageCircle, Phone, ArrowRight, IndianRupee, Layers, MapPin } from 'lucide-react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-14 md:py-16">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#e6c265]/20 via-indigo-600/10 to-amber-500/10 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Hero Header Replica */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
          
          {/* Poster Top Emblem Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#162d5a] via-[#203c75] to-[#162d5a] border border-[#e6c265]/60 shadow-[0_4px_20px_rgba(230,194,101,0.3)]">
            <Award className="w-4 h-4 text-[#e6c265]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#f7e6a1] font-serif uppercase">
              WEAVE COMFORT INTO YOUR LIFE
            </span>
          </div>

          {/* Title Banner */}
          <div className="space-y-1">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              HARYANA <span className="gold-text">HANDLOOM CAMP</span>
            </h1>
            <p className="text-sm sm:text-xl font-semibold tracking-widest text-[#e6c265] uppercase">
              {STORE_DETAILS.subtitle}
            </p>
          </div>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Welcome to Nandyal's premier home furnishing destination! Explore our high-thread-count bedsheets, heavy velvet cushion covers, blackout jacquard curtains, plush Korean mink blankets, light polar fleeces, and handcrafted shawls.
          </p>

          {/* Poster Quick Contact Buttons for both 9215211025 and 9215511025 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:+91${STORE_DETAILS.phones[0].number}`}
              className="px-4 py-2 rounded-full bg-[#162d5a] border border-[#e6c265]/50 text-white hover:bg-[#e6c265] hover:text-[#091326] text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#e6c265]" />
              <span>Call Line 1: {STORE_DETAILS.phones[0].number}</span>
            </a>
            <a
              href={`tel:+91${STORE_DETAILS.phones[1].number}`}
              className="px-4 py-2 rounded-full bg-[#162d5a] border border-[#e6c265]/50 text-white hover:bg-[#e6c265] hover:text-[#091326] text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#e6c265]" />
              <span>Call Line 2: {STORE_DETAILS.phones[1].number}</span>
            </a>
          </div>

        </div>

        {/* Poster Digital Showcase Frame */}
        <div className="relative mx-auto max-w-5xl">
          
          {/* Outer Golden Glow Frame */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#f7e6a1] via-[#e6c265] to-[#b88d2d] opacity-50 blur-xl animate-glow"></div>

          <div className="relative rounded-3xl bg-[#0b1833] border-2 border-[#e6c265] p-6 sm:p-8 shadow-2xl space-y-8">
            
            {/* Poster Quality Statement Circle */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#070d1a] via-[#162d5a] to-[#070d1a] border border-[#e6c265]/40 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e6c265]/30 text-center gap-3 md:gap-0">
                <div className="py-2 md:py-0 md:px-4 space-y-0.5">
                  <span className="block font-serif font-extrabold text-[#e6c265] text-base sm:text-lg">Finest Quality</span>
                  <span className="text-xs text-slate-300">100% Handloom Checked Fabrics</span>
                </div>
                <div className="py-2 md:py-0 md:px-4 space-y-0.5">
                  <span className="block font-serif font-extrabold text-[#e6c265] text-base sm:text-lg">Beautiful Designs</span>
                  <span className="text-xs text-slate-300">Exclusive Heritage & Modern Prints</span>
                </div>
                <div className="py-2 md:py-0 md:px-4 space-y-0.5">
                  <span className="block font-serif font-extrabold text-[#e6c265] text-base sm:text-lg">Unmatched Comfort</span>
                  <span className="text-xs text-slate-300">Super Soft Touch & High Thread Counts</span>
                </div>
              </div>
            </div>

            {/* 8 Poster Categories Interactive Grid with Exact Store Images */}
            <div>
              <h3 className="text-center font-serif font-bold text-lg text-white mb-4 tracking-wide">
                EXPLORE STORE CATEGORIES
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { name: 'BED SHEETS', img: '/images/bedsheets/bs-light-blue-block.png', desc: 'Single, Double & King' },
                  { name: 'CUSHION COVERS', img: '/images/cushion-covers/cc-crimson-velvet-zari.png', desc: 'Embroidered Velvet' },
                  { name: 'CURTAINS', img: '/images/curtains/curtain-emerald-jacquard.png', desc: '85% - 100% Blackout' },
                  { name: 'COMFORTERS', img: '/images/comforters/com-cashmere-sky-blue.jpg', desc: 'Microfiber & Duvets' },
                  { name: 'MINK BLANKETS', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80', desc: 'Korean 3D Embossed' },
                  { name: 'POLAR BLANKETS', img: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=400&q=80', desc: 'Light AC Fleeces' },
                  { name: 'SHAWLS & WRAPS', img: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80', desc: 'Kashmiri Pure Wool' },
                  { name: 'PILLOWS & FORM', img: '/images/pillows/pil-white-plush-bounce.png', desc: 'Ergonomic Bounce' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#categories"
                    className="relative group overflow-hidden rounded-2xl border border-[#e6c265]/40 bg-[#070d1a] h-32 sm:h-36 block shadow-lg"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-2.5">
                      <span className="font-serif font-bold text-xs sm:text-sm text-white group-hover:text-[#e6c265] transition-colors leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-300 font-sans">
                        {item.desc}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Poster 4 Main Quality Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-center">
                <Award className="w-5 h-5 text-[#e6c265] mx-auto mb-1" />
                <span className="font-serif font-bold text-xs text-white block">BEST QUALITY</span>
                <span className="text-[10px] text-slate-400">100% Tested Fabrics</span>
              </div>
              <div className="p-3 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-center">
                <Sparkles className="w-5 h-5 text-[#e6c265] mx-auto mb-1" />
                <span className="font-serif font-bold text-xs text-white block">LATEST DESIGNS</span>
                <span className="text-[10px] text-slate-400">Traditional & Modern</span>
              </div>
              <div className="p-3 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-center">
                <IndianRupee className="w-5 h-5 text-[#e6c265] mx-auto mb-1" />
                <span className="font-serif font-bold text-xs text-white block">AFFORDABLE PRICES</span>
                <span className="text-[10px] text-slate-400">Direct Loom Pricing</span>
              </div>
              <div className="p-3 rounded-xl bg-[#070d1a] border border-[#e6c265]/30 text-center">
                <Layers className="w-5 h-5 text-[#e6c265] mx-auto mb-1" />
                <span className="font-serif font-bold text-xs text-white block">ALL SIZES</span>
                <span className="text-[10px] text-slate-400">Single, Double & Custom</span>
              </div>
            </div>

            {/* Poster Footer Info Ribbon */}
            <div className="p-4 rounded-2xl bg-[#070d1a] border border-[#e6c265]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs">
              <div className="space-y-0.5">
                <p className="font-bold text-[#e6c265] flex items-center justify-center sm:justify-start gap-1">
                  <MapPin className="w-4 h-4 text-[#e6c265]" /> STORE ADDRESS:
                </p>
                <p className="text-slate-200">{STORE_DETAILS.address}</p>
              </div>

              <div className="flex gap-2">
                <a href="#categories" className="btn-gold py-2 px-4 text-xs whitespace-nowrap">
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl(0, 'Hello! I saw the Haryana Handloom Camp store poster on your website.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold py-2 px-4 text-xs whitespace-nowrap"
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
