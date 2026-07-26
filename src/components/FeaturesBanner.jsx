import React from 'react';
import { Award, Palette, IndianRupee, Layers } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function FeaturesBanner() {
  const icons = [Award, Palette, IndianRupee, Layers];

  return (
    <section id="usps" className="py-12 bg-gradient-to-r from-[#070d1a] via-[#0f2042] to-[#070d1a] border-y border-[#e6c265]/20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e6c265]">Why Choose Haryana Handloom Camp</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
            Transform Your Home With <span className="gold-text">Comfort & Style</span>
          </h2>
          <p className="text-slate-300 text-sm">
            Handcrafted luxury meets direct-loom affordability for your dream living space.
          </p>
        </div>

        {/* 4 Poster Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_DETAILS.highlights.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 hover:border-[#e6c265] transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f7e6a1] via-[#e6c265] to-[#b88d2d] p-0.5 mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-[#091326] rounded-[10px] flex items-center justify-center text-[#e6c265]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#e6c265] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
