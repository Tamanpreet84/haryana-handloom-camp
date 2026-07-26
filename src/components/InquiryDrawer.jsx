import React from 'react';
import { X, Trash2, MessageCircle, Phone, ShoppingBag, Send } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function InquiryDrawer({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}*\n   • Size: ${item.selectedSize}\n   • Category: ${item.category}`
      )
      .join('\n\n');

    const fullMessage = `Hello Haryana Handloom Camp!\nI would like to inquire about the following items from your website:\n\n${itemsText}\n\nPlease let me know the availability, total price, and delivery/pickup options for Nandyal.\n\nThank you!`;

    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/${STORE_DETAILS.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#091326] border-l-2 border-[#e6c265] text-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 bg-[#070d1a] border-b border-[#e6c265]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#e6c265]" />
              <h2 className="font-serif font-bold text-lg text-white">Your Inquiry Bag</h2>
              <span className="bg-[#162d5a] text-[#e6c265] text-xs font-bold px-2 py-0.5 rounded-full border border-[#e6c265]/30">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#e6c265]/40 mx-auto" />
                <p className="font-serif text-slate-200 font-semibold">Your inquiry bag is empty.</p>
                <p className="text-slate-400 text-xs max-w-xs mx-auto">
                  Browse our Bed Sheets, Cushions, Curtains, and Blankets catalog to add items for direct WhatsApp price quotes.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-white/10">
                  <span>Selected Products</span>
                  <button onClick={onClearCart} className="text-red-400 hover:underline">
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cartItems.map((item, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="p-3 rounded-xl bg-[#0b1833] border border-[#e6c265]/30 flex gap-3 items-center justify-between"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg border border-white/10"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-semibold text-xs text-white truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#e6c265] font-medium">
                          Size: {item.selectedSize}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {item.material}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="p-1.5 text-slate-400 hover:text-red-400"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer Actions */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-[#070d1a] border-t border-[#e6c265]/30 space-y-3">
              <div className="text-xs text-slate-300 bg-[#0f2042] p-3 rounded-xl border border-[#e6c265]/20">
                <span className="font-bold text-[#e6c265]">Direct WhatsApp Order:</span>
                <p className="text-[11px] mt-0.5 text-slate-300">
                  Clicking below will send your custom inquiry list straight to Haryana Handloom Camp store representative (+91 {STORE_DETAILS.whatsapp.slice(2)}).
                </p>
              </div>

              <button
                onClick={handleSendWhatsAppOrder}
                className="w-full btn-gold justify-center py-3 text-sm font-bold shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-emerald-950" />
                <span>Send Order via WhatsApp</span>
              </button>

              <div className="text-center pt-1">
                <a
                  href={`tel:+91${STORE_DETAILS.phones[0]}`}
                  className="text-xs text-slate-300 hover:text-[#e6c265] inline-flex items-center gap-1 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e6c265]" />
                  Or Call Us Directly: {STORE_DETAILS.phones[0]}
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
