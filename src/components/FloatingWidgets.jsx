import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, CheckCircle, Info } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function FloatingWidgets({ toastMessage, onClearToast }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

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
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
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

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${STORE_DETAILS.whatsapp}?text=Hello%20Haryana%20Handloom%20Camp,%20I%20want%20to%20inquire%20about%20your%20collection.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-transform hover:scale-110 shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        </a>
      </div>
    </>
  );
}
