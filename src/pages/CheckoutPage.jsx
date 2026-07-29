import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, MapPin, CreditCard, Lock, ArrowRight, Phone } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';
import RazorpayModal from '../components/RazorpayModal';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, grandTotal, cartSubtotal, shippingCharge, gstAmount, placeOrder, showToast } = useShop();

  const [formData, setFormData] = useState({
    fullName: 'Taman Preet',
    phone: '9215211025',
    street: 'NK Road, Near Sai Baba Mandir',
    city: 'Nandyal',
    state: 'Andhra Pradesh',
    pincode: '518501',
    paymentMethod: 'razorpay' // 'razorpay' or 'cod'
  });

  const [razorpayOpen, setRazorpayOpen] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Your cart is empty</h2>
        <button onClick={() => navigate('/catalog')} className="btn-gold text-xs py-2 px-6">
          Return to Catalog
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.street || !formData.pincode) {
      showToast('Please complete all shipping address fields', 'error');
      return;
    }

    if (formData.paymentMethod === 'razorpay') {
      setRazorpayOpen(true);
    } else {
      // Cash on Delivery
      const order = placeOrder({
        items: cart,
        totalAmount: grandTotal,
        paymentMethod: 'Cash on Delivery (Store Pickup / Local Nandyal)',
        paymentId: 'COD_' + Date.now(),
        shippingAddress: formData
      });
      showToast(`Order ${order.orderId} Placed Successfully!`);
      navigate(`/order-success/${order.orderId}`);
    }
  };

  const handlePaymentSuccess = (paymentDetails) => {
    setRazorpayOpen(false);
    const order = placeOrder({
      items: cart,
      totalAmount: grandTotal,
      paymentMethod: paymentDetails.paymentMethod,
      paymentId: paymentDetails.paymentId,
      shippingAddress: formData
    });
    showToast(`Payment Confirmed! Order ${order.orderId} Created.`);
    navigate(`/order-success/${order.orderId}`);
  };

  return (
    <>
      <MetaSEO title="Checkout" description="Complete your Haryana Handloom Camp order" />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-widest block font-cinzel">
              Secure Order Checkout
            </span>
            <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Shipping & Payment Details
            </h1>
          </div>

          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Shipping Address */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                  <MapPin className="w-5 h-5 text-[#D97706]" />
                  <h3 className="font-cinzel font-bold text-base">1. Shipping Address (Nandyal & Nearby)</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                  <div className="space-y-1">
                    <label className="text-slate-700 dark:text-slate-300">Full Name:</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-700 dark:text-slate-300">Mobile Phone Number:</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-slate-700 dark:text-slate-300">Street / Area Address:</label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-700 dark:text-slate-300">Town / City:</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-700 dark:text-slate-300">Pincode:</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                  <CreditCard className="w-5 h-5 text-[#D97706]" />
                  <h3 className="font-cinzel font-bold text-base">2. Payment Method</h3>
                </div>

                <div className="space-y-3 text-xs font-bold">
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'razorpay' })}
                    className={`p-4 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                      formData.paymentMethod === 'razorpay'
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-emerald-600 flex items-center justify-center">
                        {formData.paymentMethod === 'razorpay' && <div className="w-2 h-2 rounded-full bg-emerald-600"></div>}
                      </div>
                      <div>
                        <span className="block text-sm font-bold">Razorpay Online Payment (UPI / Cards / NetBanking)</span>
                        <span className="text-[10px] text-slate-500 font-normal">Instant signature confirmation with test gateway</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px]">RECOMMENDED</span>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-4 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-emerald-600 flex items-center justify-center">
                        {formData.paymentMethod === 'cod' && <div className="w-2 h-2 rounded-full bg-emerald-600"></div>}
                      </div>
                      <div>
                        <span className="block text-sm font-bold">Cash on Delivery / Store Pickup</span>
                        <span className="text-[10px] text-slate-500 font-normal">Pay cash when receiving order in Nandyal</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-300/80 shadow-md space-y-4 text-xs">
                <h3 className="font-cinzel font-bold text-base text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                  Order Summary ({cart.length} Items)
                </h3>

                <div className="max-h-48 overflow-y-auto space-y-3 pr-1">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center justify-between">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover border" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-slate-900 dark:text-white truncate">{item.name}</h4>
                        <p className="text-[10px] text-slate-500">Qty: {item.quantity} • {item.selectedSize}</p>
                      </div>
                      <span className="font-serif font-bold text-slate-900 dark:text-white">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2 font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between"><span>Subtotal:</span><span>₹{cartSubtotal}</span></div>
                  <div className="flex justify-between"><span>GST (5%):</span><span>+₹{gstAmount}</span></div>
                  <div className="flex justify-between"><span>Shipping:</span><span>{shippingCharge === 0 ? 'FREE' : `₹${shippingCharge}`}</span></div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between text-base font-bold text-slate-900 dark:text-white">
                    <span>Total Amount:</span>
                    <span className="font-serif text-xl text-[#0F172A] dark:text-amber-400">₹{grandTotal}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold justify-center py-3.5 text-xs font-bold shadow-lg"
                >
                  <Lock className="w-4 h-4" />
                  <span>Place Order (₹{grandTotal})</span>
                </button>
              </div>
            </div>

          </form>

        </div>
      </div>

      {/* Razorpay Gateway Modal */}
      <RazorpayModal
        isOpen={razorpayOpen}
        onClose={() => setRazorpayOpen(false)}
        amount={grandTotal}
        shippingAddress={formData}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  );
}
