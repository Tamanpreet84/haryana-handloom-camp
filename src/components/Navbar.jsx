import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, ShoppingBag, Menu, X, Sparkles, BookOpen, MapPin, Sun, Moon, User, Heart, ShieldCheck, Search } from 'lucide-react';
import { STORE_DETAILS, CATEGORIES, getWhatsAppUrl } from '../data/products';
import Logo from './Logo';
import { useShop } from '../context/ShopContext';
import AuthModal from './AuthModal';

export default function Navbar({ onOpenFabricGuide }) {
  const navigate = useNavigate();
  const { theme, toggleTheme, user, cart, wishlist, logoutUser } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavSearchSubmit = (e) => {
    e.preventDefault();
    if (navSearch.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(navSearch)}`);
      setNavSearch('');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-amber-200/50 dark:border-slate-800 shadow-sm text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#F3EFE6] dark:bg-slate-800 py-1.5 px-3 border-b border-amber-200/60 dark:border-slate-700 text-xs text-[#0F172A] dark:text-slate-200">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left font-medium">
          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-semibold">📍 NK Road, Nandyal (Near Sai Baba Mandir)</span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-[11px] sm:text-xs">
            <span className="text-slate-600 dark:text-slate-400 font-medium">Call Store:</span>
            <a href={`tel:+91${STORE_DETAILS.phones[0].number}`} className="hover:underline flex items-center gap-1 font-bold text-[#0F172A] dark:text-amber-300">
              <Phone className="w-3 h-3 text-[#D97706]" /> {STORE_DETAILS.phones[0].number}
            </a>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <a href={`tel:+91${STORE_DETAILS.phones[1].number}`} className="hover:underline flex items-center gap-1 font-bold text-[#0F172A] dark:text-amber-300">
              <Phone className="w-3 h-3 text-[#D97706]" /> {STORE_DETAILS.phones[1].number}
            </a>
            <span className="hidden md:inline text-slate-300 dark:text-slate-600">|</span>
            <button
              onClick={onOpenFabricGuide}
              className="hidden md:inline-flex items-center gap-1 text-[#B45309] dark:text-amber-400 font-bold hover:underline"
            >
              <BookOpen className="w-3 h-3 text-[#D97706]" /> Fabric Buying Guide
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="block shrink-0">
          <Logo variant={theme === 'dark' ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700 dark:text-slate-200">
          <Link to="/" className="hover:text-[#D97706] transition-colors">Home</Link>
          <Link to="/catalog" className="hover:text-[#D97706] transition-colors">Catalog</Link>
          <Link to="/orders" className="hover:text-[#D97706] transition-colors">My Orders</Link>
          {user?.role === 'admin' && (
            <Link to="/admin" className="text-emerald-700 dark:text-emerald-400 font-extrabold hover:underline">
              Admin Panel
            </Link>
          )}
        </nav>

        {/* Header Quick Search Box */}
        <form onSubmit={handleNavSearchSubmit} className="hidden md:flex flex-1 max-w-xs relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search bedsheets, curtains..."
            value={navSearch}
            onChange={(e) => setNavSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#D97706]"
          />
        </form>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          
          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-amber-400 hover:scale-105 transition-all shadow-sm touch-target"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className="relative p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-red-500 transition-colors shadow-sm touch-target"
            title="Saved Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Link */}
          <Link
            to="/cart"
            className="relative p-2.5 rounded-full bg-[#F3EFE6] dark:bg-slate-800 border border-amber-300 dark:border-slate-700 text-[#0F172A] dark:text-amber-400 hover:bg-[#0F172A] hover:text-white transition-colors shadow-sm touch-target"
            title="Inquiry Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                if (user) setProfileDropdownOpen(!profileDropdownOpen);
                else setAuthModalOpen(true);
              }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-[#D97706] transition-colors shadow-sm touch-target"
              title={user ? user.name : 'Sign In'}
            >
              <User className="w-5 h-5" />
            </button>

            {profileDropdownOpen && user && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl py-2 z-50 animate-fadeIn">
                <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                  <p className="font-bold text-xs text-slate-900 dark:text-white truncate">{user.name}</p>
                  <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="block px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  👤 Profile & Address
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="block px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  📦 My Order History
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-bold text-emerald-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    🛡️ Admin Panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    logoutUser();
                  }}
                  className="w-full text-left px-4 py-2 text-xs font-bold text-red-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  🚪 Log Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 touch-target"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 shadow-xl animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 font-bold py-2 border-b border-slate-100 dark:border-slate-800"
          >
            🏠 Home Overview
          </Link>
          <Link
            to="/catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 font-bold py-2 border-b border-slate-100 dark:border-slate-800"
          >
            🛍️ Store Catalog (30+ Handloom Items)
          </Link>
          <Link
            to="/wishlist"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 font-bold py-2 border-b border-slate-100 dark:border-slate-800"
          >
            ❤️ Saved Wishlist ({wishlist.length})
          </Link>
          <Link
            to="/orders"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 font-bold py-2 border-b border-slate-100 dark:border-slate-800"
          >
            📦 My Order History
          </Link>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFabricGuide();
              }}
              className="btn-outline-gold justify-center w-full py-2.5 text-xs font-bold"
            >
              <BookOpen className="w-4 h-4 text-[#D97706]" /> Fabric Buying Guide
            </button>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </header>
  );
}
