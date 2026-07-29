import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Truck, CreditCard, ArrowRight, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import RazorpayModal from '../components/RazorpayModal';
import { useShop } from '../context/ShopContext';
import { getOrderWhatsAppUrl, STORE_DETAILS } from '../data/products';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, cartSubtotal, couponDiscountAmount, shippingCharge, gstAmount, grandTotal, placeOrder, showToast, user } = useShop();

  const [paymentMethod, setPaymentMethod] = useState('razorpay'); // 'razorpay' or 'cod'
  const [razorpayOpen, setRazorpayOpen] = useState(false);

  // Address form
  const [fullName, setFullName] = useState(user?.address?.fullName || user?.name || '');
  const [phone, setPhone] = useState(user?.address?.phone || user?.phone || '9215211025');
  const [street, setStreet] = useState(user?.address?.street || 'NK Road, Near Sai Baba Mandir');
  const [city, setCity] = useState(user?.address?.city || 'Nandyal');
  const [state, setState] = useState(user?.address?.state || 'Andhra Pradesh');
  const [pincode, setPincode] = useState(user?.address?.pincode || '518501');

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold">Your Inquiry Bag is empty!</h2>
        <p className="text-slate-500 text-sm">Please add items to your bag before proceeding to checkout.</p>
        <Link to="/catalog" className="btn-gold inline-flex py-3 px-6 text-xs font-bold">
          Explore Catalog
        </Link>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !street || !pincode) {
      showToast('Please fill in all shipping details', 'error');
      return;
    }

    if (paymentMethod === 'razorpay') {
      setRazorpayOpen(true);
    } else {
      // COD Order Creation
      completeCheckout('Cash on Delivery (COD)');
    }
  };

  const completeCheckout = (payMethodName) => {
    const orderDetails = {
      items: cart,
      subtotal: cartSubtotal,
      discount: couponDiscountAmount,
      shipping: shippingCharge,
      gst: gstAmount,
      totalAmount: grandTotal,
      paymentMethod: payMethodName,
      paymentId: 'pay_' + Math.random().toString(36).substring(2, 11),
      shippingAddress: {
        fullName,
        phone,
        street,
        city,
        state,
        pincode
      }
    };

    const newOrder = placeOrder(orderDetails);
    showToast(`Order #${newOrder.orderId} Placed! Sending WhatsApp Notification...`);

    // Instant Store Owner WhatsApp Alert Launch
    const waUrl = getOrderWhatsAppUrl(newOrder, 0);
    window.open(waUrl, '_blank');

    navigate(`/order-success/${newOrder.orderId}`);
  };

  return (
    <>
      <MetaSEO title="Secure Checkout" description="Complete your Haryana Handloom Camp order" />

      <div className="container mx-auto px-4 py-8 space-y-6">
        
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-widest block font-cinzel">
            Fast & Secure Shipping
          </span>
          <h1 className="font-serif font-bold text-2xl md:text-3xl text-slate-900 dark:text-white">
            Checkout & Store Order Confirmation
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Shipping Details & Payment Form */}
          <form onSubmit={handleFormSubmit} className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <Truck className="w-5 h-5 text-[#D97706]" />
                <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                  Shipping & Delivery Address
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block">Full Name:</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block">Phone Number (for WhatsApp Alert):</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block">Street Address / Landmark:</label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block">City / Town:</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block">Pincode:</label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Alert Highlight Notice */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-emerald-900 dark:text-emerald-300 block">
                  ⚡ Instant WhatsApp Order Notification Enabled!
                </span>
                <p className="text-slate-700 dark:text-slate-300">
                  As soon as you confirm this order, an instant WhatsApp message with full item & delivery details will be dispatched directly to store owners <strong>(9215211025 / 9215511025)</strong> for immediate processing!
                </p>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <CreditCard className="w-5 h-5 text-[#D97706]" />
                <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                  Payment Method
                </h3>
              </div>

              <div className="space-y-3 text-xs font-bold">
                
                {/* Razorpay Test Mode option */}
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'razorpay'
                    ? 'border-[#D97706] bg-amber-50/50 dark:bg-slate-800'
                    : 'border-slate-200 dark:border-slate-700'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'razorpay'}
                      onChange={() => setPaymentMethod('razorpay')}
                      className="text-[#D97706] focus:ring-[#D97706]"
                    />
                    <div>
                      <span className="block text-slate-900 dark:text-white font-bold">
                        Razorpay Gateway (UPI, GPay, Credit/Debit Cards, NetBanking)
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold block">
                        Test Mode Simulation Active • Instant WhatsApp Alert Triggered
                      </span>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </label>

                {/* COD option */}
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-[#D97706] bg-amber-50/50 dark:bg-slate-800'
                    : 'border-slate-200 dark:border-slate-700'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#D97706] focus:ring-[#D97706]"
                    />
                    <div>
                      <span className="block text-slate-900 dark:text-white font-bold">
                        Cash on Delivery (Pay at Nandyal Store / Home Doorstep)
                      </span>
                      <span className="text-[10px] text-slate-500 font-normal block">
                        Pay cash upon order delivery
                      </span>
                    </div>
                  </div>
                </label>

              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-gold justify-center py-4 text-sm font-extrabold shadow-lg"
            >
              <span>Confirm Order & Send WhatsApp Alert to Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>

          {/* Order Summary Side Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4 sticky top-24">
              <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Order Items ({cart.length})
              </h3>

              {/* Items List */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <img src={item.images[0]} alt={item.name} className="w-12 h-12 rounded-xl object-cover border" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 dark:text-white truncate">{item.name}</p>
                      <p className="text-[10px] text-slate-400">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                    </div>
                    <span className="font-extrabold text-slate-900 dark:text-white">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal:</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                {couponDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount:</span>
                    <span>-₹{couponDiscountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Delivery Charge:</span>
                  <span>{shippingCharge === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${shippingCharge}`}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>GST (5% Handloom):</span>
                  <span>₹{gstAmount}</span>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-2 flex justify-between text-base font-extrabold text-slate-900 dark:text-white">
                  <span>Grand Total:</span>
                  <span className="text-[#D97706]">₹{grandTotal}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Simulated Razorpay Payment Modal */}
      <RazorpayModal
        isOpen={razorpayOpen}
        onClose={() => setRazorpayOpen(false)}
        amount={grandTotal}
        onPaymentSuccess={(paymentId) => {
          setRazorpayOpen(false);
          completeCheckout(`Razorpay UPI (${paymentId})`);
        }}
      />
    </>
  );
}
