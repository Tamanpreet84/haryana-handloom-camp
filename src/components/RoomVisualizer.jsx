import React, { useState } from 'react';
import { Sparkles, Palette, Layers, CheckCircle2, MessageCircle, Sun, Moon, Sunset } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';

export default function RoomVisualizer() {
  const [bedsheetTheme, setBedsheetTheme] = useState('indigo');
  const [cushionTheme, setCushionTheme] = useState('gold');
  const [curtainTheme, setCurtainTheme] = useState('cream');
  const [lightingMode, setLightingMode] = useState('day'); // day, warm, night

  const themes = {
    indigo: { name: 'Royal Indigo Floral', color: '#1e3a8a', pattern: 'Indigo Sanganeri Motifs', price: 899 },
    maroon: { name: 'Heritage Crimson Zari', color: '#881337', pattern: 'Traditional Crimson Motifs', price: 1199 },
    mustard: { name: 'Warm Golden Harvest', color: '#d97706', pattern: 'Jaipuri Elephant Prints', price: 999 },
    emerald: { name: 'Palace Emerald Leaves', color: '#065f46', pattern: 'Botanical Leaf Pattern', price: 1099 }
  };

  const cushionThemes = {
    gold: { name: 'Heavy Zari Velvet (5 Pcs)', color: '#e6c265', price: 699 },
    navy: { name: 'Navy Tufted Velvet (5 Pcs)', color: '#172554', price: 649 },
    terracotta: { name: 'Jute Boho Tassels (5 Pcs)', color: '#9a3412', price: 599 }
  };

  const curtainThemes = {
    cream: { name: 'Soft Cream Jacquard (Set of 2)', color: '#fef08a', price: 1299 },
    navy: { name: 'Dark Navy Thermal Blackout (Set of 2)', color: '#0f172a', price: 1699 },
    white: { name: 'Airy Sheer Linen (Set of 2)', color: '#ffffff', price: 899 }
  };

  const totalBundlePrice = themes[bedsheetTheme].price + cushionThemes[cushionTheme].price + curtainThemes[curtainTheme].price;

  const handleShareStyling = () => {
    const text = `Hello Haryana Handloom Camp!\n\nI customized a custom room makeover look on your website visualizer:\n\n• *Bedsheet:* ${themes[bedsheetTheme].name} (₹${themes[bedsheetTheme].price})\n• *Cushion Covers:* ${cushionThemes[cushionTheme].name} (₹${cushionThemes[cushionTheme].price})\n• *Curtains:* ${curtainThemes[curtainTheme].name} (₹${curtainThemes[curtainTheme].price})\n\n*Total Estimated Package:* ₹${totalBundlePrice}\n\nCould you please confirm if this set is ready for pickup/delivery in Nandyal?`;
    const targetUrl = getWhatsAppUrl(0, text);
    window.open(targetUrl, '_blank');
  };

  // Lighting overlay styling
  const getLightingStyle = () => {
    if (lightingMode === 'warm') {
      return 'bg-amber-950/20 backdrop-sepia';
    } else if (lightingMode === 'night') {
      return 'bg-blue-950/40 backdrop-brightness-75';
    }
    return 'bg-transparent'; // day
  };

  return (
    <section id="visualizer" className="py-16 bg-[#070d1a] border-t border-[#e6c265]/20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162d5a] border border-[#e6c265]/40 text-xs font-semibold text-[#f7e6a1]">
            <Sparkles className="w-3.5 h-3.5 text-[#e6c265]" /> Interactive Home Decor Tool
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            Virtual <span className="gold-text">Room Visualizer</span>
          </h2>
          <p className="text-slate-300 text-sm">
            Experiment with matching bedsheets, cushion covers, curtains, and room lighting to preview your dream bedroom makeover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Preview Room Canvas */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#e6c265]/40 bg-[#091326] shadow-2xl p-6">
              
              {/* Lighting Mode Selector Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                <span className="font-serif font-bold text-white flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-[#e6c265]" /> Room Ambiance Lighting:
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setLightingMode('day')}
                    className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors ${
                      lightingMode === 'day' ? 'bg-[#e6c265] text-[#070d1a] font-bold' : 'bg-[#070d1a] text-slate-400'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" /> Day
                  </button>
                  <button
                    onClick={() => setLightingMode('warm')}
                    className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors ${
                      lightingMode === 'warm' ? 'bg-[#e6c265] text-[#070d1a] font-bold' : 'bg-[#070d1a] text-slate-400'
                    }`}
                  >
                    <Sunset className="w-3.5 h-3.5" /> Warm
                  </button>
                  <button
                    onClick={() => setLightingMode('night')}
                    className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors ${
                      lightingMode === 'night' ? 'bg-[#e6c265] text-[#070d1a] font-bold' : 'bg-[#070d1a] text-slate-400'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" /> Night
                  </button>
                </div>
              </div>

              {/* Room Graphic Stage */}
              <div className={`relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between p-6 transition-all duration-500 ${getLightingStyle()}`}
                style={{
                  background: `linear-gradient(180deg, ${curtainThemes[curtainTheme].color}20 0%, #091326 100%)`
                }}
              >
                {/* Wall & Curtain Background */}
                <div className="flex justify-between items-start opacity-95">
                  <div
                    className="w-24 sm:w-32 h-52 rounded-b-2xl border-b-4 border-r-4 border-[#e6c265]/40 transition-colors duration-500 shadow-2xl relative"
                    style={{ backgroundColor: curtainThemes[curtainTheme].color }}
                  >
                    <div className="p-2 text-[10px] font-bold uppercase text-slate-900 bg-white/80 rounded-br-md inline-block">
                      Curtain Drape
                    </div>
                  </div>

                  {/* Wall Framing Art */}
                  <div className="w-24 h-24 rounded-full border-2 border-[#e6c265]/40 flex flex-col items-center justify-center text-center p-2 bg-[#070d1a]/80 shadow-lg">
                    <span className="font-serif text-[11px] text-[#e6c265] font-extrabold leading-tight">HARYANA HANDLOOM</span>
                    <span className="text-[9px] text-slate-300">CAMP</span>
                  </div>

                  <div
                    className="w-24 sm:w-32 h-52 rounded-b-2xl border-b-4 border-l-4 border-[#e6c265]/40 transition-colors duration-500 shadow-2xl relative"
                    style={{ backgroundColor: curtainThemes[curtainTheme].color }}
                  ></div>
                </div>

                {/* Bed & Cushions Stage */}
                <div className="relative z-10 space-y-3">
                  
                  {/* Cushion Pillow Row */}
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3].map((idx) => (
                      <div
                        key={idx}
                        className="w-14 h-11 sm:w-20 sm:h-14 rounded-2xl border-2 border-white/40 shadow-xl transition-all duration-500 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider"
                        style={{ backgroundColor: cushionThemes[cushionTheme].color }}
                      >
                        Cushion {idx}
                      </div>
                    ))}
                  </div>

                  {/* Bed Mattress & Bedsheet Frame */}
                  <div
                    className="h-28 sm:h-32 rounded-2xl border-4 border-[#e6c265]/50 shadow-2xl transition-colors duration-500 p-4 flex flex-col justify-between"
                    style={{ backgroundColor: themes[bedsheetTheme].color }}
                  >
                    <div className="flex justify-between items-center text-white">
                      <span className="font-serif font-bold text-sm sm:text-base tracking-wide">
                        {themes[bedsheetTheme].name}
                      </span>
                      <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded-full font-semibold">
                        100% Pure Cotton
                      </span>
                    </div>

                    <div className="text-[11px] text-white/90 font-sans line-clamp-1">
                      Pattern: {themes[bedsheetTheme].pattern}
                    </div>
                  </div>

                </div>

              </div>

              {/* Status Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Live Preview Match
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Bundle Price:</span>
                  <span className="font-serif font-bold text-base text-[#f7e6a1]">₹{totalBundlePrice}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Bedsheet Choice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-serif font-bold text-white text-sm">
                  <Palette className="w-4 h-4 text-[#e6c265]" />
                  1. Bedsheet Theme:
                </label>
                <span className="text-xs font-bold text-[#f7e6a1]">₹{themes[bedsheetTheme].price}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(themes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setBedsheetTheme(key)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      bedsheetTheme === key
                        ? 'border-[#e6c265] bg-[#162d5a] text-white font-bold shadow-md'
                        : 'border-white/10 bg-[#070d1a]/60 text-slate-300 hover:border-[#e6c265]/40'
                    }`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full mb-1 border border-white/30" style={{ backgroundColor: themes[key].color }}></div>
                    {themes[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Cushion Covers Choice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-serif font-bold text-white text-sm">
                  <Layers className="w-4 h-4 text-[#e6c265]" />
                  2. Cushion Accent:
                </label>
                <span className="text-xs font-bold text-[#f7e6a1]">₹{cushionThemes[cushionTheme].price}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(cushionThemes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setCushionTheme(key)}
                    className={`p-2 rounded-xl border text-center text-xs transition-all ${
                      cushionTheme === key
                        ? 'border-[#e6c265] bg-[#162d5a] text-white font-bold'
                        : 'border-white/10 bg-[#070d1a]/60 text-slate-300'
                    }`}
                  >
                    {cushionThemes[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Curtain Choice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-serif font-bold text-white text-sm">
                  <Sparkles className="w-4 h-4 text-[#e6c265]" />
                  3. Curtain Drapes:
                </label>
                <span className="text-xs font-bold text-[#f7e6a1]">₹{curtainThemes[curtainTheme].price}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(curtainThemes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setCurtainTheme(key)}
                    className={`p-2 rounded-xl border text-center text-xs transition-all ${
                      curtainTheme === key
                        ? 'border-[#e6c265] bg-[#162d5a] text-white font-bold'
                        : 'border-white/10 bg-[#070d1a]/60 text-slate-300'
                    }`}
                  >
                    {curtainThemes[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Custom Look to WhatsApp */}
            <button
              onClick={handleShareStyling}
              className="w-full btn-gold justify-center py-3 text-sm shadow-xl"
            >
              <MessageCircle className="w-5 h-5 text-emerald-950" />
              <span>Inquire Look (₹{totalBundlePrice}) On WhatsApp</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
