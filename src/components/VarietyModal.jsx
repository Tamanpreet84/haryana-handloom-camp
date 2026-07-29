import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Check, Palette, Sparkles, Star } from 'lucide-react';
import { PRODUCTS, getWhatsAppUrl } from '../data/products';

export default function VarietyModal({ isOpen, onClose, selectedProduct, onAddToCart }) {
  if (!isOpen || !selectedProduct) return null;

  // Filter all uploaded varieties in the same category
  const categoryVarieties = PRODUCTS.filter(
    (p) => p.category === selectedProduct.category
  );

  const [activeItem, setActiveItem] = useState(selectedProduct);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0]);

  const handleWhatsAppInquiry = (item) => {
    const text = `Hello Haryana Handloom Camp!\n\nI am inquiring about this color/variety option:\n*Product:* ${item.name}\n*Price:* ₹${item.price}\n*Size:* ${selectedSize}\n*Category:* ${item.category}\n\nPlease send more color options & patterns in store for this design!`;
    const targetUrl = getWhatsAppUrl(0, text);
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border-2 border-[#D97706] rounded-3xl max-w-3xl w-full p-4 sm:p-6 md:p-8 relative overflow-hidden shadow-2xl space-y-5 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors touch-target"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-[#B45309] uppercase tracking-widest block">
              Store Varieties & Colors ({categoryVarieties.length} Featured Patterns)
            </span>
            <h3 className="font-cinzel font-bold text-lg sm:text-2xl text-[#0F172A]">
              Available Colours & Varieties
            </h3>
          </div>
        </div>

        {/* Selected Variety Showcase Banner */}
        <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-amber-200/80 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          <div className="sm:col-span-5 h-52 sm:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative">
            <img
              src={activeItem.image}
              alt={activeItem.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-[#0F172A] text-white text-[9px] font-extrabold uppercase">
              {activeItem.tag}
            </span>
          </div>

          <div className="sm:col-span-7 space-y-2.5">
            <div>
              <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-wider">
                {activeItem.material} • {activeItem.threadCount}
              </span>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#0F172A] leading-snug">
                {activeItem.name}
              </h4>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-serif font-extrabold text-xl text-[#0F172A]">
                ₹{activeItem.price}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ₹{activeItem.mrp}
              </span>
              <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                {activeItem.discount}
              </span>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {activeItem.description}
            </p>

            {/* Size Selector */}
            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 font-bold uppercase">Select Size:</label>
              <div className="flex flex-wrap gap-1.5">
                {activeItem.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`text-[11px] px-2.5 py-1 rounded-md transition-colors border font-semibold ${
                      selectedSize === sz
                        ? 'bg-[#0F172A] text-white border-[#0F172A]'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-[#D97706]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  onAddToCart({ ...activeItem, selectedSize });
                  onClose();
                }}
                className="flex-1 btn-gold text-xs py-2 px-3"
              >
                <ShoppingBag className="w-4 h-4" /> Add This Variety
              </button>
              <button
                onClick={() => handleWhatsAppInquiry(activeItem)}
                className="btn-outline-gold text-xs py-2 px-3"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-800 text-emerald-50" /> Inquire WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Grid of All Varieties in Category */}
        <div className="space-y-2">
          <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D97706]" /> Tap Any Pattern / Colour Below To Inspect:
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
            {categoryVarieties.map((varItem) => {
              const isSelected = varItem.id === activeItem.id;
              return (
                <button
                  key={varItem.id}
                  onClick={() => {
                    setActiveItem(varItem);
                    setSelectedSize(varItem.sizes[0]);
                  }}
                  className={`p-1.5 rounded-xl border-2 transition-all text-left group bg-white ${
                    isSelected
                      ? 'border-[#D97706] ring-2 ring-amber-400/40 shadow-md'
                      : 'border-slate-200 hover:border-amber-400'
                  }`}
                >
                  <div className="h-24 rounded-lg overflow-hidden bg-slate-100 mb-1.5 relative">
                    <img
                      src={varItem.image}
                      alt={varItem.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {isSelected && (
                      <span className="absolute top-1 right-1 bg-amber-500 text-white rounded-full p-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <span className="block font-serif font-bold text-[11px] text-slate-900 truncate">
                    {varItem.name}
                  </span>
                  <span className="block font-extrabold text-[11px] text-[#0F172A]">
                    ₹{varItem.price}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-center text-xs font-semibold">
          💡 We have 15+ to 30+ more color combinations for this category in our Nandyal store! Click "Inquire WhatsApp" to receive photos of all patterns directly on your phone.
        </div>

      </div>
    </div>
  );
}
