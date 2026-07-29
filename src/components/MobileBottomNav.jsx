import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Grid, ShoppingBag, Heart, Package, MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { getWhatsAppUrl } from '../data/products';

export default function MobileBottomNav() {
  const { cart, wishlist } = useShop();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] py-2 px-3 md:hidden transition-colors">
      <div className="flex items-center justify-around text-[#0F172A] dark:text-slate-200">
        
        {/* Home */}
        <Link
          to="/"
          className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <Home className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          <span>Home</span>
        </Link>

        {/* Catalog */}
        <Link
          to="/catalog"
          className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <Grid className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          <span>Catalog</span>
        </Link>

        {/* WhatsApp Direct Floating Button */}
        <a
          href={getWhatsAppUrl(0, 'Hello Haryana Handloom Camp! I would like to inquire about store products.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-white bg-gradient-to-r from-emerald-600 to-emerald-700 p-2.5 rounded-full shadow-lg -mt-5 border-4 border-[#F8F6F0] dark:border-slate-900 active:scale-95 transition-transform"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>

        {/* Wishlist */}
        <Link
          to="/wishlist"
          className="relative flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <div className="relative">
            <Heart className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                {wishlist.length}
              </span>
            )}
          </div>
          <span>Wishlist</span>
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-emerald-600 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </Link>

      </div>
    </div>
  );
}
