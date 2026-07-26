import React, { useState } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu, X, Sparkles, BookOpen } from 'lucide-react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';

export default function Navbar({ cartCount, wishlistCount, onOpenCart, onOpenFabricGuide }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070e1c]/95 backdrop-blur-lg border-b border-[#e6c265]/25 text-white">
      {/* Top Banner - Displays BOTH Store Contact Numbers */}
      <div className="bg-gradient-to-r from-[#070d1a] via-[#162d5a] to-[#070d1a] py-1.5 px-3 border-b border-[#e6c265]/15 text-xs text-[#e6c265]">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left font-medium">
          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>📍 NK Road, Nandyal (Near Sai Baba Mandir)</span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 text-[11px] sm:text-xs">
            <span className="text-slate-400">Call Us:</span>
            <a href={`tel:+91${STORE_DETAILS.phones[0].number}`} className="hover:underline flex items-center gap-1 text-white font-bold hover:text-[#e6c265]">
              <Phone className="w-3 h-3 text-[#e6c265]" /> {STORE_DETAILS.phones[0].number}
            </a>
            <span className="text-white/30">|</span>
            <a href={`tel:+91${STORE_DETAILS.phones[1].number}`} className="hover:underline flex items-center gap-1 text-white font-bold hover:text-[#e6c265]">
              <Phone className="w-3 h-3 text-[#e6c265]" /> {STORE_DETAILS.phones[1].number}
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <button
              onClick={onOpenFabricGuide}
              className="hidden md:inline-flex items-center gap-1 text-[#f7e6a1] hover:text-white font-semibold"
            >
              <BookOpen className="w-3 h-3 text-[#e6c265]" /> Fabric Buying Guide
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f7e6a1] via-[#e6c265] to-[#b88d2d] p-0.5 shadow-[0_0_20px_rgba(230,194,101,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#091326] rounded-full flex flex-col items-center justify-center text-center">
              <span className="font-serif font-black text-xs sm:text-sm text-[#e6c265] leading-none">HH</span>
              <span className="text-[7px] text-[#f7e6a1] tracking-tighter">CAMP</span>
            </div>
          </div>
          <div>
            <h1 className="font-serif font-bold text-base sm:text-lg md:text-xl tracking-wide text-white leading-tight group-hover:text-[#e6c265] transition-colors">
              HARYANA HANDLOOM CAMP
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#e6c265] font-semibold">
              {STORE_DETAILS.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
          <a href="#hero" className="hover:text-[#e6c265] transition-colors">Home</a>
          <a href="#categories" className="hover:text-[#e6c265] transition-colors">Collection</a>
          <a href="#reviews" className="hover:text-[#e6c265] transition-colors">Reviews</a>
          <a href="#faqs" className="hover:text-[#e6c265] transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-[#e6c265] transition-colors">Store Info</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp Inquiry CTA Button */}
          <a
            href={getWhatsAppUrl(0, 'Hello Haryana Handloom Camp! I would like to inquire about your product collection.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-gold text-xs py-2 px-3.5"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-950 text-emerald-950" />
            <span>WhatsApp Chat</span>
          </a>

          {/* Cart & Wishlist Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#162d5a]/80 border border-[#e6c265]/40 text-[#e6c265] hover:bg-[#e6c265] hover:text-[#091326] transition-colors"
            title="Inquiry Bag & Wishlist"
          >
            <ShoppingBag className="w-5 h-5" />
            {(cartCount > 0 || wishlistCount > 0) && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#091326] animate-bounce">
                {cartCount + wishlistCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-[#162d5a]/40 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070d1a] border-b border-[#e6c265]/20 px-4 py-4 space-y-3 animate-fadeIn">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1.5"
          >
            Home Overview
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1.5"
          >
            Product Catalog (Bedsheets, Curtains, Blankets)
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1.5"
          >
            Nandyal Customer Reviews
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1.5"
          >
            FAQs & Store Directions
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-[#e6c265] font-medium py-1.5"
          >
            Contact Store & Phone Numbers
          </a>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFabricGuide();
              }}
              className="btn-outline-gold justify-center w-full py-2.5 text-xs"
            >
              <BookOpen className="w-4 h-4 text-[#e6c265]" /> Fabric Buying Guide
            </button>

            {/* Direct WhatsApp Call Buttons for Mobile */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={getWhatsAppUrl(0, 'Hello! Inquiry for Haryana Handloom Camp Store (Line 1)')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-center text-xs font-bold flex items-center justify-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WA 9215211025
              </a>
              <a
                href={getWhatsAppUrl(1, 'Hello! Inquiry for Haryana Handloom Camp Store (Line 2)')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-center text-xs font-bold flex items-center justify-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WA 9215511025
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
