import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';
import { Phone, MapPin, MessageCircle, Heart, Lock, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import AuthModal from './AuthModal';
import { useShop } from '../context/ShopContext';

export default function Footer() {
  const { user } = useShop();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <footer className="bg-[#0F172A] border-t border-amber-500/30 text-slate-300 text-xs py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <Logo variant="dark" />
            <p className="text-slate-300 text-[11px] leading-relaxed font-medium pt-1">
              Nandyal's trusted destination for premium handloom bedsheets, blackout curtains, velvet cushion covers, cashmere comforters, mink blankets & ergonomic pillows.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-cinzel font-bold text-white text-sm mb-3 text-amber-300">Our Collections</h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li><Link to="/catalog?cat=bed-sheets" className="hover:text-amber-300">Bed Sheets</Link></li>
              <li><Link to="/catalog?cat=cushion-covers" className="hover:text-amber-300">Cushion Covers</Link></li>
              <li><Link to="/catalog?cat=curtains" className="hover:text-amber-300">Curtains</Link></li>
              <li><Link to="/catalog?cat=comforters" className="hover:text-amber-300">Comforters & Duvets</Link></li>
              <li><Link to="/catalog?cat=blankets" className="hover:text-amber-300">Mink & Polar Blankets</Link></li>
              <li><Link to="/catalog?cat=pillows" className="hover:text-amber-300">Pillows & Form</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel font-bold text-white text-sm mb-3 text-amber-300">Quick Links</h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li><Link to="/" className="hover:text-amber-300">Home Overview</Link></li>
              <li><Link to="/catalog" className="hover:text-amber-300">Product Catalog</Link></li>
              <li><Link to="/wishlist" className="hover:text-amber-300">Saved Wishlist</Link></li>
              <li><Link to="/orders" className="hover:text-amber-300">My Order History</Link></li>
              {user?.role === 'admin' ? (
                <li><Link to="/admin" className="text-emerald-400 font-bold hover:underline">🛡️ Admin Dashboard</Link></li>
              ) : (
                <li>
                  <button
                    onClick={() => setAuthModalOpen(true)}
                    className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <Lock className="w-3 h-3 text-amber-400" /> Admin / Staff Portal
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="font-cinzel font-bold text-white text-sm mb-3 text-amber-300">Contact Store</h4>
            <div className="space-y-2.5 text-slate-300 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{STORE_DETAILS.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>9215211025 / 9215511025</span>
              </p>
              <a
                href={getWhatsAppUrl(0, 'Hello! Inquiry for Haryana Handloom Camp Store.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 font-bold hover:underline pt-1"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} Haryana Handloom Camp. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Nandyal Home Furnishing
          </p>
        </div>

      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </footer>
  );
}
