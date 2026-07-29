import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Download, Package, ArrowRight, Phone, MapPin, Printer } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';
import { STORE_DETAILS } from '../data/products';

export default function OrderSuccessPage() {
  const { orderId } = useParams();
  const { orders } = useShop();

  const currentOrder = orders.find((o) => o.orderId === orderId) || orders[0];

  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <>
      <MetaSEO title={`Order ${orderId} Confirmed`} description="Order Confirmation and Tax Invoice" />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Header Banner */}
          <div className="text-center bg-white dark:bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block font-cinzel">
                Payment & Order Confirmed
              </span>
              <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Thank You For Your Order!
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Order ID: <span className="font-mono font-bold text-slate-900 dark:text-white">{currentOrder?.orderId || orderId}</span>
              </p>
            </div>

            {/* Order Progress Tracker */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-3">Live Order Tracking Status:</span>
              <div className="flex items-center justify-between max-w-md mx-auto text-[10px] font-bold">
                <div className="flex flex-col items-center gap-1 text-emerald-600">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">✓</div>
                  <span>Placed</span>
                </div>
                <div className="h-0.5 flex-1 bg-emerald-600"></div>
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">2</div>
                  <span>Packed</span>
                </div>
                <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">3</div>
                  <span>Shipped</span>
                </div>
                <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">4</div>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Printable Invoice Frame */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md printable-area">
            
            {/* Invoice Top Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
              <div>
                <h3 className="font-serif font-extrabold text-xl text-slate-900 dark:text-white">
                  {STORE_DETAILS.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">{STORE_DETAILS.address}</p>
                <p className="text-xs text-slate-500 font-medium">Phones: 9215211025 / 9215511025</p>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-wider block">OFFICIAL TAX INVOICE</span>
                <span className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200">INV-{currentOrder?.orderId}</span>
                <p className="text-xs text-slate-400">Date: {currentOrder?.date || new Date().toISOString().split('T')[0]}</p>
              </div>
            </div>

            {/* Items Table */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block uppercase">Order Items Summary:</span>
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-3">Item Description</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3">Size</th>
                      <th className="p-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-medium text-slate-800 dark:text-slate-200">
                    {currentOrder?.items?.map((it, idx) => (
                      <tr key={idx}>
                        <td className="p-3">{it.name}</td>
                        <td className="p-3">{it.quantity}</td>
                        <td className="p-3">{it.selectedSize}</td>
                        <td className="p-3 text-right font-bold">₹{it.price * it.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total Row */}
            <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-800 dark:text-slate-200">Total Paid Amount:</span>
              <span className="font-serif font-extrabold text-xl text-[#0F172A] dark:text-amber-400">
                ₹{currentOrder?.totalAmount}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={handlePrintInvoice} className="btn-gold text-xs py-2.5 px-5 inline-flex items-center gap-2">
              <Printer className="w-4 h-4" />
              <span>Print / Download Invoice</span>
            </button>

            <Link to="/orders" className="btn-navy text-xs py-2.5 px-5 inline-flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>My Order History</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
