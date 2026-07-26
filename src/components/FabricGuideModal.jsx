import React, { useState } from 'react';
import { BookOpen, X, CheckCircle, ShieldCheck, Sparkles, Bed, Layers, Columns, Thermometer } from 'lucide-react';

export default function FabricGuideModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('bedsheets');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0b1833] border-2 border-[#e6c265] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f7e6a1] to-[#b88d2d] p-0.5">
            <div className="w-full h-full bg-[#070d1a] rounded-[10px] flex items-center justify-center text-[#e6c265]">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-white">Fabric & Quality Buying Guide</h3>
            <p className="text-xs text-[#e6c265]">Learn how to select thread counts, fabric materials & sizes for your home</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-3">
          {[
            { id: 'bedsheets', label: 'Bedsheet Thread Count', icon: Bed },
            { id: 'curtains', label: 'Curtain Blackout %', icon: Columns },
            { id: 'blankets', label: 'Blanket GSM Warmth', icon: Thermometer },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#e6c265] text-[#070d1a] font-bold shadow-md'
                    : 'bg-[#070d1a] text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panels */}
        <div className="space-y-4 text-xs text-slate-300">
          {activeTab === 'bedsheets' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#070d1a] border border-[#e6c265]/30">
                <span className="font-bold text-[#e6c265] block mb-1">What is Thread Count (TC)?</span>
                <p>Thread count refers to the number of horizontal and vertical threads woven into one square inch of fabric. Higher thread counts mean denser, smoother, and longer-lasting bedsheets.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-white/10 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">200 - 250 TC</span>
                  <span className="text-[10px] text-slate-400 block font-semibold">Everyday Breathable</span>
                  <p className="text-[11px]">Lightweight pure cotton, ideal for hot summer months and regular daily usage.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-[#e6c265]/40 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">300 - 400 TC</span>
                  <span className="text-[10px] text-emerald-400 block font-semibold">Recommended / Most Popular</span>
                  <p className="text-[11px]">Ultra soft percale weave with crisp hotel finish and fast-color durability.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-white/10 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">500+ TC</span>
                  <span className="text-[10px] text-slate-400 block font-semibold">Luxury Hotel Grade</span>
                  <p className="text-[11px]">Silky smooth satin striped cotton offering five-star opulent softness.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curtains' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#070d1a] border border-[#e6c265]/30">
                <span className="font-bold text-[#e6c265] block mb-1">Choosing The Right Curtain Material</span>
                <p>Curtains define your room lighting, privacy, and indoor temperature control. Choose based on room function:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-white/10 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">Light Sheer (40%)</span>
                  <p className="text-[11px]">Filters harsh glare while filling rooms with soft daylight. Perfect for living rooms.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-[#e6c265]/40 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">Jacquard (85%)</span>
                  <p className="text-[11px]">Woven floral patterns providing privacy, heat control, and elegant room drape.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-white/10 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">Thermal Velvet (100%)</span>
                  <p className="text-[11px]">Complete room darkening, outside sound reduction, and AC heat insulation.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blankets' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#070d1a] border border-[#e6c265]/30">
                <span className="font-bold text-[#e6c265] block mb-1">Understanding GSM & Ply</span>
                <p>GSM (Grams per Square Meter) measures fabric density. Higher GSM indicates plush warmth and weight for cold winter seasons.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-white/10 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">Polar Fleeces (280 GSM)</span>
                  <p className="text-[11px]">Ultra lightweight, easy travel fleece for mild AC chills and sofa throws.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-[#e6c265]/40 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">Single Ply Mink (2.5 KG)</span>
                  <p className="text-[11px]">Silky velvet touch mink blanket for moderate winter warmth.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#162d5a]/60 border border-white/10 space-y-1">
                  <span className="font-serif font-bold text-[#f7e6a1] text-sm block">Double Ply 3D Mink (5.5 KG)</span>
                  <p className="text-[11px]">Heavyweight 3D embossed Korean mink locking in maximum body heat.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Guarantee */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" /> 100% Quality Inspected at Haryana Handloom Camp
          </span>
          <button onClick={onClose} className="btn-gold py-1.5 px-4 text-xs">
            Got It!
          </button>
        </div>

      </div>
    </div>
  );
}
