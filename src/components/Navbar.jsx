import React, { useState } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu, X, Sparkles, BookOpen, MapPin } from 'lucide-react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';
import Logo from './Logo';

export default function Navbar({ cartCount, wishlistCount, onOpenCart, onOpenFabricGuide }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-amber-200/50 shadow-sm text-slate-900">
      {/* Top Announcement Bar - Soft Warm Ivory */}
      <div className="bg-[#F3EFE6] py-1.5 px-3 border-b border-amber-200/60 text-xs text-[#0F172A]">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left font-medium">
          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-semibold text-slate-800">📍 NK Road, Nandyal (Near Sai Baba Mandir)</span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-[11px] sm:text-xs">
            <span className="text-slate-600 font-medium">Call Us:</span>
            <a href={`tel:+91${STORE_DETAILS.phones[0].number}`} className="hover:underline flex items-center gap-1 text-[#0F172A] font-bold hover:text-[#D97706]">
              <Phone className="w-3 h-3 text-[#D97706]" /> {STORE_DETAILS.phones[0].number}
            </a>
            <span className="text-slate-300">|</span>
            <a href={`tel:+91${STORE_DETAILS.phones[1].number}`} className="hover:underline flex items-center gap-1 text-[#0F172A] font-bold hover:text-[#D97706]">
              <Phone className="w-3 h-3 text-[#D97706]" /> {STORE_DETAILS.phones[1].number}
            </a>
            <span className="hidden md:inline text-slate-300">|</span>
            <button
              onClick={onOpenFabricGuide}
              className="hidden md:inline-flex items-center gap-1 text-[#B45309] hover:text-[#0F172A] font-bold"
            >
              <BookOpen className="w-3 h-3 text-[#D97706]" /> Fabric Buying Guide
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo Component */}
        <a href="#" className="block">
          <Logo variant="light" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
          <a href="#hero" className="hover:text-[#D97706] transition-colors">Home</a>
          <a href="#categories" className="hover:text-[#D97706] transition-colors">Collection</a>
          <a href="#reviews" className="hover:text-[#D97706] transition-colors">Reviews</a>
          <a href="#faqs" className="hover:text-[#D97706] transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-[#D97706] transition-colors">Store Info</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp Inquiry CTA Button */}
          <a
            href={getWhatsAppUrl(0, 'Hello Haryana Handloom Camp! I would like to inquire about your store products.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-gold text-xs py-2.5 px-4"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-950 text-white" />
            <span>WhatsApp Chat</span>
          </a>

          {/* Cart & Wishlist Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#F3EFE6] border border-amber-200/80 text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors shadow-sm touch-target"
            title="Inquiry Bag & Wishlist"
          >
            <ShoppingBag className="w-5 h-5" />
            {(cartCount > 0 || wishlistCount > 0) && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {cartCount + wishlistCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-black rounded-xl bg-slate-100 border border-slate-200 touch-target"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-fadeIn">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-[#D97706] font-bold py-2 border-b border-slate-100"
          >
            🏠 Home Overview
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-[#D97706] font-bold py-2 border-b border-slate-100"
          >
            🛍️ Store Catalog (Bedsheets, Curtains, Blankets)
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-[#D97706] font-bold py-2 border-b border-slate-100"
          >
            ⭐ Nandyal Customer Reviews
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-[#D97706] font-bold py-2 border-b border-slate-100"
          >
            ❓ FAQs & Fabric Care
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-[#D97706] font-bold py-2"
          >
            📍 Store Address & Direct Phones
          </a>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFabricGuide();
              }}
              className="btn-outline-gold justify-center w-full py-2.5 text-xs font-bold"
            >
              <BookOpen className="w-4 h-4 text-[#D97706]" /> Fabric Buying Guide
            </button>

            {/* Direct WhatsApp Buttons for Mobile */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={getWhatsAppUrl(0, 'Hello! Inquiry for Haryana Handloom Camp Store (Line 1)')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-center text-xs font-extrabold flex items-center justify-center gap-1 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-800 text-emerald-50" /> WA 9215211025
              </a>
              <a
                href={getWhatsAppUrl(1, 'Hello! Inquiry for Haryana Handloom Camp Store (Line 2)')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-center text-xs font-extrabold flex items-center justify-center gap-1 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-800 text-emerald-50" /> WA 9215511025
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
