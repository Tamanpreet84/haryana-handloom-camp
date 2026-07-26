import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, CheckCircle, Phone, X } from 'lucide-react';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';

export default function FloatingWidgets({ toastMessage, onClearToast }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWaMenu, setShowWaMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-5 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-[#0b1833] border-2 border-[#e6c265] text-white text-xs font-semibold shadow-2xl flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#162d5a] border border-[#e6c265]/50 text-[#e6c265] hover:bg-[#e6c265] hover:text-[#091326] transition-all shadow-xl"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Dual WhatsApp Popup Menu */}
        {showWaMenu && (
          <div className="p-4 rounded-2xl bg-[#0b1833] border-2 border-emerald-500 text-white shadow-2xl space-y-2 w-64 animate-fadeIn">
            <div className="flex items-center justify-between pb-1 border-b border-white/10 text-xs font-bold text-emerald-400">
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" /> Select Store Line:
              </span>
              <button onClick={() => setShowWaMenu(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href={getWhatsAppUrl(0, 'Hello Haryana Handloom Camp! I would like to inquire about your collection.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowWaMenu(false)}
              className="p-2.5 rounded-xl bg-[#070d1a] border border-emerald-500/40 hover:bg-emerald-600/20 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-between transition-colors block"
            >
              <span>Line 1: 9215211025</span>
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
            </a>

            <a
              href={getWhatsAppUrl(1, 'Hello Haryana Handloom Camp! I would like to inquire about your collection.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowWaMenu(false)}
              className="p-2.5 rounded-xl bg-[#070d1a] border border-emerald-500/40 hover:bg-emerald-600/20 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-between transition-colors block"
            >
              <span>Line 2: 9215511025</span>
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => setShowWaMenu(!showWaMenu)}
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-transform hover:scale-110 shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center relative"
          title="Direct WhatsApp Chat Options"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        </button>
      </div>
    </>
  );
}
