import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, KeyRound, ShieldCheck, ArrowRight, Sparkles, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import Logo from '../components/Logo';
import { useShop } from '../context/ShopContext';
import { STORE_DETAILS } from '../data/products';

export default function WelcomeLoginPage() {
  const navigate = useNavigate();
  const { loginUser, showToast, user } = useShop();

  const [tab, setTab] = useState('login'); // 'login', 'signup', 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [welcomeMsgModal, setWelcomeMsgModal] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both email and password', 'error');
      return;
    }

    const loggedUser = loginUser(email, password);

    // Prepare Welcome Message Notice
    const welcomeNotice = {
      recipient: email,
      name: name || loggedUser.name,
      message: `Thank you for visiting Haryana Handloom Camp! Welcome to Nandyal's premier home furnishing store on NK Road. Explore our 100% handloom cotton bedsheets, velvet cushions, blackout curtains, mink blankets & plush comforters.`,
      phoneNotice: phone ? `SMS notification dispatched to +91 ${phone}` : 'Email notification sent successfully'
    };

    setWelcomeMsgModal(welcomeNotice);
  };

  const handleOneClickAdmin = () => {
    setEmail('admin@haryana.com');
    setPassword('admin123');
    loginUser('admin@haryana.com', 'admin123');
    showToast('Logged in as Store Administrator');
    navigate('/admin');
  };

  const handleOneClickCustomer = () => {
    setEmail('user@example.com');
    setPassword('user123');
    const loggedUser = loginUser('user@example.com', 'user123');
    setWelcomeMsgModal({
      recipient: 'user@example.com',
      name: loggedUser.name,
      message: `Thank you for visiting Haryana Handloom Camp! Welcome to Nandyal's premier home furnishing store on NK Road. Explore our 100% handloom cotton bedsheets, velvet cushions, blackout curtains, mink blankets & plush comforters.`,
      phoneNotice: 'SMS notification dispatched to +91 9215211025'
    });
  };

  const handleGoogleSignIn = () => {
    const loggedUser = loginUser('google.user@gmail.com', 'google123');
    setWelcomeMsgModal({
      recipient: 'google.user@gmail.com',
      name: loggedUser.name,
      message: `Thank you for visiting Haryana Handloom Camp! Welcome to Nandyal's premier home furnishing store on NK Road.`,
      phoneNotice: 'Google Account verified successfully'
    });
  };

  const handleProceedToStore = () => {
    setWelcomeMsgModal(null);
    if (user?.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/home');
    }
  };

  return (
    <>
      <MetaSEO title="Welcome Portal & Sign In" description="Sign in or Register for Haryana Handloom Camp Nandyal" />

      <div className="min-h-screen bg-[#F8F6F0] dark:bg-slate-950 flex flex-col justify-center items-center p-4 py-12 relative overflow-hidden transition-colors">
        
        {/* Ambient Decorative Lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-200/40 via-orange-100/30 to-amber-300/20 blur-[130px] pointer-events-none rounded-full"></div>

        <div className="max-w-md w-full space-y-6 relative z-10">
          
          {/* Logo Header */}
          <div className="text-center space-y-3">
            <div className="inline-block hover:scale-105 transition-transform">
              <Logo size="lg" />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-bold max-w-xs mx-auto">
              Nandyal’s Flagship Home Furnishing Store on NK Road (Near Sai Baba Mandir)
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-white dark:bg-slate-900 border-2 border-amber-300/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Tab Switcher */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl text-xs font-bold">
              <button
                onClick={() => setTab('login')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  tab === 'login'
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Customer Login
              </button>
              <button
                onClick={() => setTab('signup')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  tab === 'signup'
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                New Register
              </button>
              <button
                onClick={() => setTab('admin')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  tab === 'admin'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-amber-700 dark:text-amber-400 hover:text-amber-800'
                }`}
              >
                👑 Admin Portal
              </button>
            </div>

            {/* Quick Demo Credentials Switcher */}
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-slate-800/80 border border-amber-300 dark:border-slate-700 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300">
                <KeyRound className="w-4 h-4 text-[#D97706]" />
                <span>Quick One-Click Access:</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={handleOneClickAdmin}
                  className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-amber-600 transition-colors text-center shadow-sm"
                >
                  👑 Admin Portal Login
                  <span className="block text-[9px] text-amber-300 font-normal">admin@haryana.com</span>
                </button>
                <button
                  type="button"
                  onClick={handleOneClickCustomer}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-700 border text-slate-900 dark:text-white hover:border-amber-500 transition-colors text-center shadow-sm"
                >
                  👤 Customer Login
                  <span className="block text-[9px] text-slate-500 dark:text-slate-400 font-normal">user@example.com</span>
                </button>
              </div>
            </div>

            {/* Main Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {tab === 'signup' && (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Full Name:</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#D97706]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Mobile Phone (for Welcome SMS):</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. 9215211025"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#D97706]"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  {tab === 'admin' ? 'Admin Username / Email:' : 'Email Address:'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder={tab === 'admin' ? 'admin@haryana.com' : 'name@example.com'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Password:</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#D97706]"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all ${
                  tab === 'admin'
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'btn-gold'
                }`}
              >
                <span>
                  {tab === 'login' && 'Sign In to Store'}
                  {tab === 'signup' && 'Register Account & Send Welcome Message'}
                  {tab === 'admin' && 'Access Admin Control Panel'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Direct Guest Browse Button */}
            <div className="pt-2 text-center">
              <Link
                to="/home"
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-[#D97706] font-bold underline"
              >
                Skip & Continue Browsing Store as Guest →
              </Link>
            </div>

          </div>

        </div>

        {/* Welcome Message Confirmation Modal */}
        {welcomeMsgModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 border-2 border-emerald-500/50 rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl">
              
              <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                <MessageCircle className="w-8 h-8 shrink-0 fill-emerald-100 text-emerald-700" />
                <div>
                  <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                    Welcome Message Sent!
                  </h4>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase block">
                    {welcomeMsgModal.phoneNotice}
                  </span>
                </div>
              </div>

              {/* Message Simulation Box */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-900 dark:text-emerald-200">
                  <span>To: {welcomeMsgModal.recipient}</span>
                  <span className="text-[10px] text-emerald-600 font-normal">Just Now</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  "{welcomeMsgModal.message}"
                </p>
              </div>

              <button
                onClick={handleProceedToStore}
                className="w-full btn-gold justify-center py-3 text-xs font-bold"
              >
                <span>Enter Haryana Handloom Store</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>
        )}

      </div>
    </>
  );
}
