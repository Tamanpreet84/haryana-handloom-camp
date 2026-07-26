import React from 'react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';
import { Phone, MapPin, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-[#e6c265]/20 text-slate-400 text-xs py-12">
      <div className="container mx-auto px-4 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#e6c265] bg-[#091326] flex items-center justify-center font-serif font-black text-[#e6c265]">
                HH
              </div>
              <h3 className="font-serif font-bold text-white text-base">HARYANA HANDLOOM CAMP</h3>
            </div>
            <p className="text-[#e6c265] font-serif font-medium text-xs">
              "{STORE_DETAILS.tagline}"
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Your trusted destination for premium handloom bedsheets, curtains, cushion covers, comforters, and blankets in Nandyal.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-3 text-[#e6c265]">Our Categories</h4>
            <ul className="space-y-1.5 text-slate-300">
              <li><a href="#categories" className="hover:text-[#e6c265]">Bed Sheets</a></li>
              <li><a href="#categories" className="hover:text-[#e6c265]">Cushion Covers</a></li>
              <li><a href="#categories" className="hover:text-[#e6c265]">Curtains</a></li>
              <li><a href="#categories" className="hover:text-[#e6c265]">Comforters & Mink</a></li>
              <li><a href="#categories" className="hover:text-[#e6c265]">Polar Blankets & Shawls</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-3 text-[#e6c265]">Quick Links</h4>
            <ul className="space-y-1.5 text-slate-300">
              <li><a href="#hero" className="hover:text-[#e6c265]">Home</a></li>
              <li><a href="#categories" className="hover:text-[#e6c265]">Product Catalog</a></li>
              <li><a href="#reviews" className="hover:text-[#e6c265]">Customer Reviews</a></li>
              <li><a href="#faqs" className="hover:text-[#e6c265]">Store FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#e6c265]">Contact Us</a></li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-3 text-[#e6c265]">Contact Store</h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e6c265] shrink-0 mt-0.5" />
                <span>{STORE_DETAILS.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e6c265] shrink-0" />
                <span>9215211025 / 9215511025</span>
              </p>
              <a
                href={getWhatsAppUrl(0, 'Hello! Inquiry for Haryana Handloom Camp Store.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 font-bold hover:underline pt-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} Haryana Handloom Camp. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Nandyal Home Furnishing
          </p>
        </div>

      </div>
    </footer>
  );
}
