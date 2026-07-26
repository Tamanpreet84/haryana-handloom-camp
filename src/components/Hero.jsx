import React from 'react';
import { Award, Sparkles, MessageCircle, Phone, ArrowRight, IndianRupee, Layers, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:py-20">
      {/* Background Decorative Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#e6c265]/25 via-indigo-600/15 to-amber-500/10 blur-[170px] pointer-events-none rounded-full animate-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Hero Header Replica */}
        <div className="max-w-5xl mx-auto text-center space-y-5 mb-12">
          
          {/* Poster Top Emblem Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#0d1c3a] via-[#1b3469] to-[#0d1c3a] border border-[#e6c265]/70 shadow-[0_4px_25px_rgba(230,194,101,0.35)] backdrop-blur-md">
            <Award className="w-4.5 h-4.5 text-[#e6c265] animate-bounce" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#fdf2cd] font-cinzel uppercase">
              WEAVE COMFORT INTO YOUR LIFE
            </span>
          </div>

          {/* Title Banner */}
          <div className="space-y-2">
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight">
              HARYANA <span className="gold-shimmer-text">HANDLOOM CAMP</span>
            </h1>
            <p className="text-base sm:text-2xl font-bold tracking-widest text-[#e6c265] uppercase font-serif">
              {STORE_DETAILS.subtitle}
            </p>
          </div>

          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Nandyal's flagship store on NK Road for high-thread-count bedsheets, heavy velvet cushion covers, blackout curtains, plush Korean mink blankets, polar fleeces & hotel bounce pillows.
          </p>

          {/* Poster Quick Contact Buttons for both 9215211025 and 9215511025 */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <a
              href={`tel:+91${STORE_DETAILS.phones[0].number}`}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#162d5a] to-[#0a1733] border border-[#e6c265]/60 text-white hover:bg-[#e6c265] hover:text-[#050c1e] text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(230,194,101,0.5)]"
            >
              <Phone className="w-4 h-4 text-[#e6c265]" />
              <span>Call Line 1: {STORE_DETAILS.phones[0].number}</span>
            </a>
            <a
              href={`tel:+91${STORE_DETAILS.phones[1].number}`}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#162d5a] to-[#0a1733] border border-[#e6c265]/60 text-white hover:bg-[#e6c265] hover:text-[#050c1e] text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(230,194,101,0.5)]"
            >
              <Phone className="w-4 h-4 text-[#e6c265]" />
              <span>Call Line 2: {STORE_DETAILS.phones[1].number}</span>
            </a>
          </div>

        </div>

        {/* Poster Digital Showcase Frame */}
        <div className="relative mx-auto max-w-6xl">
          
          {/* Outer Golden Glow Frame */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#fdf2cd] via-[#e6c265] to-[#b88d2d] opacity-60 blur-2xl animate-glow"></div>

          <div className="relative rounded-3xl bg-[#0a1733] border-2 border-[#e6c265] p-6 sm:p-10 shadow-2xl space-y-10">
            
            {/* Poster Quality Statement Ribbon */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#030814] via-[#0d1c3a] to-[#030814] border border-[#e6c265]/50 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e6c265]/30 text-center gap-4 md:gap-0">
                <div className="py-2 md:py-0 md:px-6 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#e6c265]">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="font-cinzel font-bold text-base sm:text-lg">Finest Quality</span>
                  </div>
                  <span className="text-xs text-slate-300 block">100% Handloom Checked & Color Fast</span>
                </div>
                <div className="py-2 md:py-0 md:px-6 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#e6c265]">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-cinzel font-bold text-base sm:text-lg">Beautiful Designs</span>
                  </div>
                  <span className="text-xs text-slate-300 block">Exclusive Heritage & Modern Collections</span>
                </div>
                <div className="py-2 md:py-0 md:px-6 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#e6c265]">
                    <HeartHandshake className="w-5 h-5" />
                    <span className="font-cinzel font-bold text-base sm:text-lg">Unmatched Comfort</span>
                  </div>
                  <span className="text-xs text-slate-300 block">Super Soft Touch & High Thread Counts</span>
                </div>
              </div>
            </div>

            {/* 7 Store Categories Interactive Grid with Exact Store Images */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#e6c265]"></div>
                <h3 className="font-cinzel font-extrabold text-xl text-white tracking-wider">
                  EXPLORE STORE CATEGORIES
                </h3>
                <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#e6c265]"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                    className="relative group overflow-hidden rounded-2xl border-2 border-[#e6c265]/40 bg-[#030814] h-36 sm:h-40 block shadow-xl transition-all duration-300 hover:border-[#e6c265] hover:shadow-[0_10px_30px_rgba(230,194,101,0.3)]"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-3">
                      <span className="font-cinzel font-bold text-xs sm:text-sm text-white group-hover:text-[#e6c265] transition-colors leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-slate-300 font-sans">
                        {item.desc}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Poster 4 Main Quality Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#030814] border border-[#e6c265]/40 text-center hover:border-[#e6c265] transition-colors">
                <Award className="w-6 h-6 text-[#e6c265] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-white block">BEST QUALITY</span>
                <span className="text-[11px] text-slate-300">100% Tested Fabrics</span>
              </div>
              <div className="p-4 rounded-xl bg-[#030814] border border-[#e6c265]/40 text-center hover:border-[#e6c265] transition-colors">
                <Sparkles className="w-6 h-6 text-[#e6c265] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-white block">LATEST DESIGNS</span>
                <span className="text-[11px] text-slate-300">Traditional & Modern</span>
              </div>
              <div className="p-4 rounded-xl bg-[#030814] border border-[#e6c265]/40 text-center hover:border-[#e6c265] transition-colors">
                <IndianRupee className="w-6 h-6 text-[#e6c265] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-white block">AFFORDABLE PRICES</span>
                <span className="text-[11px] text-slate-300">Direct Loom Pricing</span>
              </div>
              <div className="p-4 rounded-xl bg-[#030814] border border-[#e6c265]/40 text-center hover:border-[#e6c265] transition-colors">
                <Layers className="w-6 h-6 text-[#e6c265] mx-auto mb-1.5" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-white block">ALL SIZES</span>
                <span className="text-[11px] text-slate-300">Single, Double & Custom</span>
              </div>
            </div>

            {/* Poster Footer Info Ribbon */}
            <div className="p-5 rounded-2xl bg-[#030814] border border-[#e6c265]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs">
              <div className="space-y-1">
                <p className="font-bold text-[#e6c265] flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-cinzel">
                  <MapPin className="w-4 h-4 text-[#e6c265]" /> STORE ADDRESS:
                </p>
                <p className="text-slate-200 text-xs sm:text-sm">{STORE_DETAILS.address}</p>
              </div>

              <div className="flex gap-3">
                <a href="#categories" className="btn-gold py-2.5 px-5 text-xs whitespace-nowrap">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl(0, 'Hello! I saw the Haryana Handloom Camp store poster on your website.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold py-2.5 px-5 text-xs whitespace-nowrap"
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
