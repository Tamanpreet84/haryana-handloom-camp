import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, STORE_DETAILS } from '../data/products';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-16 bg-[#091326] relative">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e6c265]">Got Questions?</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm">
            Everything you need to know about visiting our store, fabric care, custom sizes, and WhatsApp ordering.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-white hover:text-[#e6c265] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#e6c265] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#e6c265] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#070d1a] via-[#162d5a] to-[#070d1a] border border-[#e6c265]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-white text-base">Have more specific questions?</h4>
            <p className="text-xs text-slate-300 mt-0.5">Chat directly with our store owner for fabric availability & bulk price quotes.</p>
          </div>
          <a
            href={`https://wa.me/${STORE_DETAILS.whatsapp}?text=Hello!%20I%20have%20a%20question%20regarding%20Haryana%20Handloom%20Camp.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs py-2.5 px-5 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-950" />
            <span>Ask On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
