import React, { useState } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu, X, MapPin, Sparkles } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070e1c]/90 backdrop-blur-md border-b border-[#e6c265]/20 text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#070d1a] via-[#162d5a] to-[#070d1a] py-1.5 px-4 border-b border-[#e6c265]/15 text-xs text-[#e6c265]">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left font-medium">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>📍 Visit Store: {STORE_DETAILS.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:+91${STORE_DETAILS.phones[0]}`} className="hover:underline flex items-center gap-1 text-white/90 hover:text-[#e6c265]">
              <Phone className="w-3 h-3 text-[#e6c265]" /> {STORE_DETAILS.phones[0]}
            </a>
            <span className="text-white/30">|</span>
            <a href={`tel:+91${STORE_DETAILS.phones[1]}`} className="hover:underline flex items-center gap-1 text-white/90 hover:text-[#e6c265]">
              <Phone className="w-3 h-3 text-[#e6c265]" /> {STORE_DETAILS.phones[1]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f7e6a1] via-[#e6c265] to-[#b88d2d] p-0.5 shadow-[0_0_15px_rgba(230,194,101,0.3)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#091326] rounded-full flex flex-col items-center justify-center text-center">
              <span className="font-serif font-black text-sm text-[#e6c265] leading-none">HH</span>
            </div>
          </div>
          <div>
            <h1 className="font-serif font-bold text-lg sm:text-xl tracking-wider text-white flex items-center gap-1.5 leading-tight group-hover:text-[#e6c265] transition-colors">
              HARYANA HANDLOOM CAMP
            </h1>
            <p className="text-[10px] tracking-widest uppercase text-[#e6c265] font-semibold">
              {STORE_DETAILS.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
          <a href="#hero" className="hover:text-[#e6c265] transition-colors">Home</a>
          <a href="#categories" className="hover:text-[#e6c265] transition-colors">Collection</a>
          <a href="#visualizer" className="hover:text-[#e6c265] transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#e6c265]" /> Room Visualizer
          </a>
          <a href="#usps" className="hover:text-[#e6c265] transition-colors">Why Choose Us</a>
          <a href="#contact" className="hover:text-[#e6c265] transition-colors">Contact & Store</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${STORE_DETAILS.whatsapp}?text=Hello%20Haryana%20Handloom%20Camp,%20I%20want%20to%20inquire%20about%20your%20collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-gold text-xs py-2 px-4"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-950 text-emerald-950" />
            <span>WhatsApp Inquiry</span>
          </a>

          {/* Cart / Wishlist Drawer Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#162d5a]/80 border border-[#e6c265]/40 text-[#e6c265] hover:bg-[#e6c265] hover:text-[#091326] transition-colors"
            title="Inquiry Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#091326] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070d1a] border-b border-[#e6c265]/20 px-4 py-4 space-y-3 animate-fadeIn">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1"
          >
            Home
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1"
          >
            Collection Categories
          </a>
          <a
            href="#visualizer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#e6c265] font-medium py-1 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" /> Room Visualizer
          </a>
          <a
            href="#usps"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1"
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1"
          >
            Contact & Address
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`https://wa.me/${STORE_DETAILS.whatsapp}?text=Hello%20Haryana%20Handloom%20Camp!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center justify-center w-full py-2.5 text-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
