import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Tag, ShieldCheck, Phone, Check } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';
import { STORE_DETAILS, getWhatsAppUrl } from '../data/products';

export default function CartPage() {
  const navigate = useNavigate();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    appliedCoupon,
    applyCoupon,
    coupons,
    cartSubtotal,
    cartMrpTotal,
    couponDiscountAmount,
    shippingCharge,
    gstAmount,
    grandTotal
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput) return;
    applyCoupon(couponInput);
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsText = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}*\n   • Quantity: ${item.quantity}\n   • Size: ${item.selectedSize}\n   • Loom Price: ₹${item.price} each`
      )
      .join('\n\n');

    const fullMessage = `Hello Haryana Handloom Camp!\n\nI would like to place an order for the following items:\n\n${itemsText}\n\n*Cart Subtotal:* ₹${cartSubtotal}\n*Tax (GST 5%):* ₹${gstAmount}\n*Estimated Grand Total:* ₹${grandTotal}\n\nPlease confirm availability and delivery options for Nandyal.\n\nThank you!`;

    const targetUrl = getWhatsAppUrl(0, fullMessage);
    window.open(targetUrl, '_blank');
  };

  return (
    <>
      <MetaSEO title="Shopping Bag" description="Your Haryana Handloom Camp Inquiry & Shopping Bag" />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-widest block font-cinzel">
                Your Handloom Shopping Bag
              </span>
              <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Inquiry Bag ({cart.length} Items)
              </h1>
            </div>

            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-red-600 dark:text-red-400 font-bold hover:underline"
              >
                Clear Entire Bag
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-4 shadow-sm">
              <ShoppingBag className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-slate-800 dark:text-slate-200">
                Your Shopping Bag is Empty
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
                Explore our pure cotton bedsheets, velvet cushions, curtains, mink blankets, and comforters!
              </p>
              <Link to="/catalog" className="btn-gold text-xs py-2.5 px-6 inline-flex">
                Explore Catalog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Cart Items */}
              <div className="lg:col-span-7 space-y-4">
                {cart.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl border border-slate-200 dark:border-slate-800"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[10px] font-extrabold text-[#D97706] uppercase">
                        {item.category}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold">
                        Size: <span className="text-slate-800 dark:text-slate-200">{item.selectedSize}</span>
                      </p>
                      
                      <div className="flex items-baseline gap-2 pt-0.5">
                        <span className="font-serif font-extrabold text-sm text-slate-900 dark:text-white">
                          ₹{item.price}
                        </span>
                        <span className="text-[11px] text-slate-400 line-through">
                          ₹{item.mrp}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800">
                        <button
                          onClick={() => updateQuantity(idx, -1)}
                          className="px-2.5 py-1 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-bold text-slate-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(idx, 1)}
                          className="px-2.5 py-1 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(idx)}
                        className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Order Summary & Coupons */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Coupon Box */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#D97706]" />
                    <h3 className="font-cinzel font-bold text-sm text-slate-900 dark:text-white">
                      Apply Promo Coupon
                    </h3>
                  </div>

                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. HANDLOOM10"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none uppercase"
                    />
                    <button type="submit" className="btn-navy text-xs py-2 px-4">
                      Apply
                    </button>
                  </form>

                  {/* Available Coupons list */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Available Coupons:</span>
                    {coupons.map((c) => (
                      <div
                        key={c.code}
                        onClick={() => {
                          setCouponInput(c.code);
                          applyCoupon(c.code);
                        }}
                        className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] font-bold cursor-pointer hover:border-amber-500 transition-colors flex items-center justify-between"
                      >
                        <span className="text-amber-900 dark:text-amber-300">{c.code} ({c.discountPercent}% OFF)</span>
                        <span className="text-[9px] text-amber-700 dark:text-amber-400 font-normal">{c.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300/80 shadow-md space-y-4 text-slate-800 dark:text-slate-200 text-xs">
                  <h3 className="font-cinzel font-bold text-base text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                    Order Price Breakdown
                  </h3>

                  <div className="space-y-2.5 font-medium">
                    <div className="flex justify-between">
                      <span>Total Item MRP:</span>
                      <span className="line-through text-slate-400">₹{cartMrpTotal}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Direct Loom Subtotal:</span>
                      <span className="font-bold text-slate-900 dark:text-white">₹{cartSubtotal}</span>
                    </div>

                    {appliedCoupon && (
                      <div className="flex justify-between text-emerald-600 font-bold">
                        <span>Coupon Discount ({appliedCoupon.code}):</span>
                        <span>-₹{couponDiscountAmount}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>GST (5% Handloom Tax):</span>
                      <span>+₹{gstAmount}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Nandyal Delivery Charges:</span>
                      <span className={shippingCharge === 0 ? 'text-emerald-600 font-bold' : ''}>
                        {shippingCharge === 0 ? 'FREE' : `₹${shippingCharge}`}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline text-sm">
                      <span className="font-bold text-slate-900 dark:text-white">Grand Total Amount:</span>
                      <span className="font-serif font-extrabold text-xl text-[#0F172A] dark:text-amber-400">
                        ₹{grandTotal}
                      </span>
                    </div>
                  </div>

                  {/* Proceed Buttons */}
                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={() => navigate('/checkout')}
                      className="w-full btn-gold justify-center py-3 text-xs font-bold shadow-lg"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={handleWhatsAppCheckout}
                      className="w-full btn-outline-gold justify-center py-3 text-xs font-bold"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Send Order via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Inspected Handloom Quality Guarantee
                  </p>

                </div>

              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
