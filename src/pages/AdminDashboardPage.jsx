import React, { useState } from 'react';
import { IndianRupee, Package, Users, TrendingUp, ShieldCheck, CheckCircle2, Truck, XCircle, Tag, Plus, Edit } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export default function AdminDashboardPage() {
  const { orders, updateOrderStatus, coupons, user, showToast } = useShop();

  const totalRevenue = orders.reduce((acc, o) => acc + o.totalAmount, 0);
  const totalOrders = orders.length;

  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'analytics', 'inventory', 'coupons'

  if (user?.role !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-4">
        <ShieldCheck className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Admin Access Restricted</h2>
        <p className="text-xs text-slate-500">You must be logged in as an Admin to view store analytics and manage order statuses.</p>
      </div>
    );
  }

  return (
    <>
      <MetaSEO title="Admin Store Dashboard" description="Store management and analytics control panel" />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-widest block font-cinzel">
                Store Control Panel
              </span>
              <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Admin Management Dashboard
              </h1>
            </div>

            <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'orders' ? 'bg-[#0F172A] text-white shadow' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Orders ({orders.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'analytics' ? 'bg-[#0F172A] text-white shadow' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'inventory' ? 'bg-[#0F172A] text-white shadow' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Inventory ({PRODUCTS.length})
              </button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-emerald-600">
                <span className="text-[10px] font-extrabold uppercase">Total Revenue</span>
                <IndianRupee className="w-5 h-5" />
              </div>
              <span className="font-serif font-extrabold text-2xl text-slate-900 dark:text-white">₹{totalRevenue}</span>
              <p className="text-[10px] text-emerald-600 font-bold">+18.5% this month</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-[#D97706]">
                <span className="text-[10px] font-extrabold uppercase">Total Orders</span>
                <Package className="w-5 h-5" />
              </div>
              <span className="font-serif font-extrabold text-2xl text-slate-900 dark:text-white">{totalOrders}</span>
              <p className="text-[10px] text-[#D97706] font-bold">100% Fulfilled</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-blue-600">
                <span className="text-[10px] font-extrabold uppercase">Store Products</span>
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-serif font-extrabold text-2xl text-slate-900 dark:text-white">{PRODUCTS.length}</span>
              <p className="text-[10px] text-blue-600 font-bold">All 7 Categories</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-purple-600">
                <span className="text-[10px] font-extrabold uppercase">Active Coupons</span>
                <Tag className="w-5 h-5" />
              </div>
              <span className="font-serif font-extrabold text-2xl text-slate-900 dark:text-white">{coupons.length}</span>
              <p className="text-[10px] text-purple-600 font-bold">HANDLOOM10 & NANDYAL20</p>
            </div>
          </div>

          {/* Tab 1: Orders Management */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h3 className="font-cinzel font-bold text-lg text-slate-900 dark:text-white">Customer Orders</h3>
              <div className="space-y-4">
                {orders.map((ord) => (
                  <div
                    key={ord.orderId}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
                  >
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">#{ord.orderId}</span>
                        <span className="text-slate-400">({ord.date})</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 font-medium">
                        Customer: <span className="font-bold">{ord.shippingAddress?.fullName || 'Taman Preet'}</span> ({ord.shippingAddress?.phone})
                      </p>
                      <p className="text-slate-500">
                        {ord.items.length} Items • Total Amount: <span className="font-serif font-bold text-slate-900 dark:text-white">₹{ord.totalAmount}</span>
                      </p>
                    </div>

                    {/* Status Changer */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-slate-600 dark:text-slate-400">Change Status:</span>
                      <select
                        value={ord.status}
                        onChange={(e) => updateOrderStatus(ord.orderId, e.target.value)}
                        className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-2.5 py-1.5 font-bold focus:outline-none"
                      >
                        <option value="Placed">Placed</option>
                        <option value="Packed">Packed</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Analytics Chart Simulation */}
          {activeTab === 'analytics' && (
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-cinzel font-bold text-lg text-slate-900 dark:text-white">Monthly Sales Breakdown</h3>
              <div className="h-48 flex items-end justify-between gap-2 pt-6 px-4 border-b border-slate-200 dark:border-slate-800">
                {[
                  { month: 'Jan', val: 40 },
                  { month: 'Feb', val: 55 },
                  { month: 'Mar', val: 70 },
                  { month: 'Apr', val: 65 },
                  { month: 'May', val: 85 },
                  { month: 'Jun', val: 95 },
                  { month: 'Jul', val: 120 }
                ].map((m) => (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full max-w-[36px] bg-gradient-to-t from-[#0F172A] to-[#D97706] rounded-t-lg transition-all"
                      style={{ height: `${m.val}%` }}
                    ></div>
                    <span className="text-[10px] font-bold text-slate-500">{m.month}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Inventory List */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <h3 className="font-cinzel font-bold text-lg text-slate-900 dark:text-white">Catalog Inventory ({PRODUCTS.length} Items)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {PRODUCTS.slice(0, 9).map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex gap-3 items-center">
                    <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0 text-xs">
                      <h4 className="font-serif font-bold text-slate-900 dark:text-white truncate">{p.name}</h4>
                      <p className="text-slate-500 font-bold">₹{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
