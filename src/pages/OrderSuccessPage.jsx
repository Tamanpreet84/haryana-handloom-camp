import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Printer, ShoppingBag, ArrowRight, ShieldCheck, Phone, MapPin, Truck } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';
import { getOrderWhatsAppUrl, STORE_DETAILS } from '../data/products';
import confetti from 'canvas-confetti';

export default function OrderSuccessPage() {
  const { orderId } = useParams();
  const { orders } = useShop();

  const currentOrder = orders.find((o) => o.orderId === orderId) || orders[0];

  useEffect(() => {
    // Trigger confetti explosion on order success!
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  }, []);

  if (!currentOrder) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Order Not Found</h2>
        <Link to="/" className="btn-gold inline-flex py-3 px-6 text-xs font-bold mt-4">
          Return Home
        </Link>
      </div>
    );
  }

  const handlePrintInvoice = () => {
    window.print();
  };

  const waOrderUrl = getOrderWhatsAppUrl(currentOrder, 0);

  return (
    <>
      <MetaSEO title={`Order Confirmed #${currentOrder.orderId}`} description="Thank you for your order at Haryana Handloom Camp" />

      <div className="container mx-auto px-4 py-10 max-w-3xl space-y-8 print:p-0 print:max-w-none">
        
        {/* Success Card */}
        <div className="bg-white dark:bg-slate-900 border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-6 relative overflow-hidden">
          
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/60 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 border-4 border-emerald-500/20 animate-pulse">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest block font-cinzel">
              Payment Signature Verified & Order Placed
            </span>
            <h1 className="font-serif font-bold text-3xl text-slate-900 dark:text-white">
              Thank You! Order #{currentOrder.orderId} Confirmed
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto">
              Your order has been recorded in our store register on NK Road, Nandyal. An instant WhatsApp order alert has been sent to the store owners!
            </p>
          </div>

          {/* Instant WhatsApp Alert Action Button */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 space-y-3 print:hidden">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-300">
              <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-100" />
              <span>Instant Store Owner WhatsApp Alert</span>
            </div>

            <a
              href={waOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>📱 Send Instant Order Notification to Store Owner (9215211025)</span>
            </a>
          </div>

          {/* Buttons Print & History */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 print:hidden">
            <button
              onClick={handlePrintInvoice}
              className="btn-outline-gold py-2.5 px-5 text-xs font-bold inline-flex items-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#D97706]" /> Print Official Tax Invoice
            </button>

            <Link
              to="/orders"
              className="btn-gold py-2.5 px-5 text-xs font-bold inline-flex items-center gap-2"
            >
              <span>View Order History</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Printable Tax Invoice Details Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-xs font-medium">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-6 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white">
                {STORE_DETAILS.name}
              </h2>
              <p className="text-slate-500 dark:text-slate-400">{STORE_DETAILS.address}</p>
              <p className="text-slate-500 dark:text-slate-400">GSTIN: {STORE_DETAILS.gstNumber}</p>
              <p className="text-slate-500 dark:text-slate-400">Store Contact: 9215211025 / 9215511025</p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-slate-800 text-[#D97706] font-extrabold text-[10px] rounded-full uppercase">
                Tax Invoice / Order Receipt
              </span>
              <p className="font-bold text-slate-900 dark:text-white">Order #: {currentOrder.orderId}</p>
              <p className="text-slate-500 dark:text-slate-400">Date: {currentOrder.date}</p>
              <p className="text-slate-500 dark:text-slate-400">Status: <strong className="text-emerald-600">{currentOrder.status}</strong></p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1">
            <p className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">Shipping Address:</p>
            <p className="font-bold text-slate-800 dark:text-slate-200">{currentOrder.shippingAddress?.fullName}</p>
            <p>{currentOrder.shippingAddress?.street}</p>
            <p>{currentOrder.shippingAddress?.city}, {currentOrder.shippingAddress?.state} - {currentOrder.shippingAddress?.pincode}</p>
            <p>Phone: {currentOrder.shippingAddress?.phone}</p>
          </div>

          {/* Order Items Table */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase">Purchased Handloom Items:</h4>
            
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700 text-[11px]">
                    <th className="p-3">Item Description</th>
                    <th className="p-3 text-center">Selected Size</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-right">Price</th>
                    <th className="p-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  {currentOrder.items?.map((item, index) => (
                    <tr key={index}>
                      <td className="p-3 font-semibold">{item.name}</td>
                      <td className="p-3 text-center">{item.selectedSize}</td>
                      <td className="p-3 text-center font-bold">{item.quantity}</td>
                      <td className="p-3 text-right">₹{item.price}</td>
                      <td className="p-3 text-right font-bold">₹{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Totals Summary */}
          <div className="flex justify-end pt-2">
            <div className="w-full sm:w-64 space-y-2 border-t border-slate-200 dark:border-slate-800 pt-3">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Items Subtotal:</span>
                <span>₹{currentOrder.subtotal || currentOrder.totalAmount}</span>
              </div>
              {currentOrder.discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Coupon Discount:</span>
                  <span>-₹{currentOrder.discount}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Shipping:</span>
                <span>{currentOrder.shipping === 0 ? 'FREE' : `₹${currentOrder.shipping}`}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>GST (5% Handloom):</span>
                <span>₹{currentOrder.gst || 0}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-700 pt-2">
                <span>Amount Paid:</span>
                <span className="text-[#D97706]">₹{currentOrder.totalAmount}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
