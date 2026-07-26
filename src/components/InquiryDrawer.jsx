import React, { useState } from 'react';
import { X, Trash2, MessageCircle, Phone, ShoppingBag, Heart, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/products';

export default function InquiryDrawer({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  wishlist,
  onRemoveWishlist,
  onMoveWishlistToCart
}) {
  const [activeTab, setActiveTab] = useState('bag'); // bag, wishlist

  if (!isOpen) return null;

  const totalBagPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}*\n   • Price: ₹${item.price} (MRP: ₹${item.mrp})\n   • Size: ${item.selectedSize}\n   • Category: ${item.category}`
      )
      .join('\n\n');

    const fullMessage = `Hello Haryana Handloom Camp!\n\nI would like to inquire about the following items from your website:\n\n${itemsText}\n\n*Total Estimated Order Value:* ₹${totalBagPrice}\n\nPlease let me know the current stock availability, store pickup timings, or delivery options for Nandyal.\n\nThank you!`;

    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/${STORE_DETAILS.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#091326] border-l-2 border-[#e6c265] text-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 bg-[#070d1a] border-b border-[#e6c265]/30 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-bold text-lg text-white">Your Shopping & Inquiry</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex bg-[#0b1833] p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('bag')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 font-bold transition-all ${
                  activeTab === 'bag'
                    ? 'bg-[#e6c265] text-[#070d1a] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Inquiry Bag ({cartItems.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 font-bold transition-all ${
                  activeTab === 'wishlist'
                    ? 'bg-[#e6c265] text-[#070d1a] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Saved Wishlist ({wishlist.length})</span>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {activeTab === 'bag' && (
              <>
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
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="font-serif font-bold text-xs text-[#f7e6a1]">
                                ₹{item.price}
                              </span>
                              <span className="text-[10px] text-slate-400 line-through">
                                ₹{item.mrp}
                              </span>
                            </div>
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
              </>
            )}

            {activeTab === 'wishlist' && (
              <>
                {wishlist.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <Heart className="w-12 h-12 text-red-400/40 mx-auto" />
                    <p className="font-serif text-slate-200 font-semibold">Your wishlist is empty.</p>
                    <p className="text-slate-400 text-xs max-w-xs mx-auto">
                      Tap the heart icon on any product card to save it for later consideration.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {wishlist.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-[#0b1833] border border-white/10 flex gap-3 items-center justify-between"
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
                          <span className="font-serif font-bold text-xs text-[#f7e6a1]">
                            ₹{item.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onMoveWishlistToCart(item)}
                            className="p-1.5 text-xs bg-[#162d5a] hover:bg-[#e6c265] hover:text-[#091326] text-[#e6c265] rounded-lg transition-colors"
                            title="Add to Bag"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onRemoveWishlist(item.id)}
                            className="p-1.5 text-slate-400 hover:text-red-400"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Actions */}
          {activeTab === 'bag' && cartItems.length > 0 && (
            <div className="p-5 bg-[#070d1a] border-t border-[#e6c265]/30 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300 font-semibold">Total Estimated Value:</span>
                <span className="font-serif font-extrabold text-lg text-[#f7e6a1]">
                  ₹{totalBagPrice}
                </span>
              </div>

              <button
                onClick={handleSendWhatsAppOrder}
                className="w-full btn-gold justify-center py-3 text-sm font-bold shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-emerald-950" />
                <span>Send Order (₹{totalBagPrice}) via WhatsApp</span>
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
