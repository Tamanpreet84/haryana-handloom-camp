import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, ShieldCheck, Lock, LogOut } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';

export default function ProfilePage() {
  const { user, setUser, logoutUser, showToast } = useShop();

  const [name, setName] = useState(user?.name || 'Taman Preet');
  const [phone, setPhone] = useState(user?.phone || '9215211025');
  const [street, setStreet] = useState(user?.address?.street || 'NK Road, Near Sai Baba Mandir');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (user) {
      setUser({
        ...user,
        name,
        phone,
        address: { ...user.address, street, phone }
      });
      showToast('Profile updated successfully!');
    }
  };

  return (
    <>
      <MetaSEO title="User Profile" description="Manage your account details and addresses" />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-widest block font-cinzel">
              My Account Settings
            </span>
            <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              User Profile
            </h1>
          </div>

          <form onSubmit={handleSaveProfile} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="w-16 h-16 rounded-full bg-[#0F172A] text-amber-400 font-bold flex items-center justify-center text-xl font-cinzel shadow">
                {name.charAt(0)}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">{name}</h3>
                <p className="text-xs text-slate-500 font-semibold">{user?.email || 'taman@example.com'}</p>
                <span className="inline-block mt-1 text-[10px] bg-amber-100 text-amber-800 font-extrabold px-2 py-0.5 rounded uppercase">
                  {user?.role === 'admin' ? 'Store Administrator' : 'Verified Member'}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs font-bold">
              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-300">Full Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-300">Mobile Phone:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-300">Default Delivery Address:</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" className="flex-1 btn-gold text-xs py-2.5 justify-center font-bold">
                Save Changes
              </button>
              <button
                type="button"
                onClick={logoutUser}
                className="btn-outline-gold text-xs py-2.5 font-bold inline-flex items-center gap-1 text-red-600"
              >
                <LogOut className="w-4 h-4" /> Log Out
              </button>
            </div>

          </form>

        </div>
      </div>
    </>
  );
}
