import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, CheckCircle2, Truck, XCircle, ArrowRight, Printer } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';

export default function OrdersPage() {
  const { orders } = useShop();

  return (
    <>
      <MetaSEO title="My Orders" description="Track and view your Haryana Handloom Camp order history" />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-widest block font-cinzel">
              Customer Account
            </span>
            <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              My Orders & History ({orders.length})
            </h1>
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-4 shadow-sm">
              <Package className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-slate-800 dark:text-slate-200">
                No Orders Placed Yet
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
                Start shopping our premium bedsheets, blankets, and curtains to see order updates here!
              </p>
              <Link to="/catalog" className="btn-gold text-xs py-2.5 px-6 inline-flex">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((ord) => (
                <div
                  key={ord.orderId}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 gap-2 text-xs">
                    <div>
                      <span className="font-mono font-bold text-sm text-slate-900 dark:text-white block">
                        Order #{ord.orderId}
                      </span>
                      <span className="text-slate-400">Placed on: {ord.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold border ${
                        ord.status === 'Delivered'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-800 dark:text-emerald-300'
                          : 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 text-amber-900 dark:text-amber-300'
                      }`}>
                        ● {ord.status}
                      </span>
                      
                      <Link
                        to={`/order-success/${ord.orderId}`}
                        className="btn-outline-gold text-[11px] py-1 px-3 inline-flex items-center gap-1"
                      >
                        <Printer className="w-3 h-3 text-[#D97706]" />
                        <span>Invoice</span>
                      </Link>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    {ord.items.map((it, idx) => (
                      <div key={idx} className="flex gap-4 items-center justify-between">
                        <img src={it.image} alt={it.name} className="w-14 h-14 rounded-xl object-cover border" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif font-bold text-xs text-slate-900 dark:text-white truncate">
                            {it.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium">Size: {it.selectedSize} • Qty: {it.quantity}</p>
                        </div>
                        <span className="font-serif font-bold text-xs text-slate-900 dark:text-white">₹{it.price * it.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold">Payment: {ord.paymentMethod}</span>
                    <span className="font-serif font-extrabold text-base text-[#0F172A] dark:text-amber-400">Total: ₹{ord.totalAmount}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
