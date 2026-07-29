import React from 'react';
import { Home, Grid, ShoppingBag, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';

export default function MobileBottomNav({ cartCount, onOpenCart }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] py-2 px-3 md:hidden">
      <div className="flex items-center justify-around">
        {/* Home */}
        <a
          href="#hero"
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <Home className="w-5 h-5 text-slate-700" />
          <span>Home</span>
        </a>

        {/* Collection */}
        <a
          href="#categories"
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <Grid className="w-5 h-5 text-slate-700" />
          <span>Catalog</span>
        </a>

        {/* WhatsApp Direct Action (Highlighted Middle Button) */}
        <a
          href={getWhatsAppUrl(0, 'Hello Haryana Handloom Camp! I would like to inquire about your store products.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-white bg-gradient-to-r from-emerald-600 to-emerald-700 p-2.5 rounded-full shadow-lg -mt-5 border-4 border-[#F8F6F0] active:scale-95 transition-transform"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>

        {/* Inquiry Bag */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center gap-1 text-slate-600 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-slate-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-emerald-600 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
          <span>Inquiry Bag</span>
        </button>

        {/* Store Location */}
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-[#D97706] text-[10px] font-bold py-1 px-2"
        >
          <MapPin className="w-5 h-5 text-slate-700" />
          <span>Store</span>
        </a>
      </div>
    </div>
  );
}
