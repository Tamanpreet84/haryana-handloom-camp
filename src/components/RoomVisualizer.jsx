import React, { useState } from 'react';
import { Sparkles, Palette, Layers, CheckCircle2, MessageCircle } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function RoomVisualizer() {
  const [bedsheetTheme, setBedsheetTheme] = useState('indigo');
  const [cushionTheme, setCushionTheme] = useState('gold');
  const [curtainTheme, setCurtainTheme] = useState('cream');

  const themes = {
    indigo: { name: 'Royal Indigo Floral', color: '#1e3a8a', desc: 'Sanganeri indigo block prints with classic borders' },
    maroon: { name: 'Heritage Maroon Zari', color: '#881337', desc: 'Rich traditional crimson floral motifs' },
    mustard: { name: 'Warm Golden Harvest', color: '#d97706', desc: 'Vibrant ethnic prints with warm undertones' },
    emerald: { name: 'Palace Emerald Leaves', color: '#065f46', desc: 'Refreshing botanical handwoven textures' }
  };

  const cushionThemes = {
    gold: { name: 'Heavy Zari Embroidery', color: '#e6c265' },
    navy: { name: 'Navy Velvet Tufted', color: '#172554' },
    terracotta: { name: 'Jute Boho Tassels', color: '#9a3412' }
  };

  const curtainThemes = {
    cream: { name: 'Soft Cream Jacquard', color: '#fef08a' },
    navy: { name: 'Dark Navy Blackout', color: '#0f172a' },
    white: { name: 'Airy Sheer Linen', color: '#ffffff' }
  };

  const handleShareStyling = () => {
    const text = `Hello Haryana Handloom Camp! I customized a room look on your website visualizer:\n\n- *Bedsheet Theme:* ${themes[bedsheetTheme].name}\n- *Cushion Covers:* ${cushionThemes[cushionTheme].name}\n- *Curtains:* ${curtainThemes[curtainTheme].name}\n\nCould you please suggest matching products and prices from your shop?`;
    window.open(`https://wa.me/${STORE_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
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
            Experiment with matching bedsheets, cushion covers, and curtains to preview your home makeover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Preview Room Canvas */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#e6c265]/40 bg-[#091326] shadow-2xl p-6">
              
              {/* Room Graphic Stage */}
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between p-6 transition-colors duration-500"
                style={{
                  background: `linear-gradient(180deg, ${curtainThemes[curtainTheme].color}15 0%, #091326 100%)`
                }}
              >
                {/* Wall & Curtain Background */}
                <div className="flex justify-between items-start opacity-90">
                  <div
                    className="w-20 sm:w-28 h-48 rounded-b-xl border-b-2 border-r-2 border-[#e6c265]/40 transition-colors duration-500 shadow-xl"
                    style={{ backgroundColor: curtainThemes[curtainTheme].color }}
                  >
                    <div className="p-2 text-[9px] font-bold uppercase text-slate-800 tracking-tighter opacity-80">
                      Curtains
                    </div>
                  </div>

                  {/* Wall Decor Accent */}
                  <div className="w-20 h-20 rounded-full border border-[#e6c265]/30 flex items-center justify-center text-center p-2 bg-[#070d1a]/60">
                    <span className="font-serif text-xs text-[#e6c265] font-bold">HH Logo Frame</span>
                  </div>

                  <div
                    className="w-20 sm:w-28 h-48 rounded-b-xl border-b-2 border-l-2 border-[#e6c265]/40 transition-colors duration-500 shadow-xl"
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
                        className="w-12 h-10 sm:w-16 sm:h-12 rounded-xl border border-white/40 shadow-lg transition-colors duration-500 flex items-center justify-center text-[9px] font-bold text-white uppercase"
                        style={{ backgroundColor: cushionThemes[cushionTheme].color }}
                      >
                        Cushion
                      </div>
                    ))}
                  </div>

                  {/* Bed Matress & Bedsheet Frame */}
                  <div
                    className="h-28 sm:h-32 rounded-2xl border-4 border-[#e6c265]/40 shadow-2xl transition-colors duration-500 p-4 flex flex-col justify-between"
                    style={{ backgroundColor: themes[bedsheetTheme].color }}
                  >
                    <div className="flex justify-between items-center text-white/90">
                      <span className="font-serif font-bold text-xs sm:text-sm tracking-wide">
                        {themes[bedsheetTheme].name}
                      </span>
                      <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded-full font-sans">
                        100% Pure Cotton
                      </span>
                    </div>

                    <div className="text-[11px] text-white/80 font-sans line-clamp-1">
                      {themes[bedsheetTheme].desc}
                    </div>
                  </div>

                </div>

              </div>

              {/* Status Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Live Preview Match
                </span>
                <span className="text-[#e6c265] font-semibold">
                  All sizes available at Haryana Handloom Camp
                </span>
              </div>

            </div>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bedsheet Choice */}
            <div className="p-5 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 space-y-3">
              <label className="flex items-center gap-2 font-serif font-bold text-white text-base">
                <Palette className="w-4 h-4 text-[#e6c265]" />
                1. Select Bedsheet Theme:
              </label>
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
                    <div className="w-3 h-3 rounded-full mb-1" style={{ backgroundColor: themes[key].color }}></div>
                    {themes[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Cushion Covers Choice */}
            <div className="p-5 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 space-y-3">
              <label className="flex items-center gap-2 font-serif font-bold text-white text-base">
                <Layers className="w-4 h-4 text-[#e6c265]" />
                2. Select Cushion Covers Accent:
              </label>
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
            <div className="p-5 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 space-y-3">
              <label className="flex items-center gap-2 font-serif font-bold text-white text-base">
                <Sparkles className="w-4 h-4 text-[#e6c265]" />
                3. Select Curtain Drapes:
              </label>
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
              <span>Inquire This Look On WhatsApp</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
