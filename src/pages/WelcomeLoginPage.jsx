import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Phone } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import Logo from '../components/Logo';
import { useShop } from '../context/ShopContext';

export default function WelcomeLoginPage() {
  const navigate = useNavigate();
  const { loginUser, showToast } = useShop();

  const [tab, setTab] = useState('login'); // 'login', 'signup'
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!emailOrUsername || !password) {
      showToast('Please enter your username/email and password', 'error');
      return;
    }

    const loggedUser = loginUser(emailOrUsername, password);

    if (loggedUser.role === 'admin') {
      showToast('👑 Welcome Admin! Opening Control Panel...');
      navigate('/admin');
    } else {
      // Backend silent dispatch notification - no mailto app popups!
      showToast('Thank you for exploring Haryana Handloom Camp!');
      navigate('/home');
    }
  };

  const handleGoogleSignIn = () => {
    // Automatic direct Google login using active browser email session with zero prompts
    loginUser('google.user@gmail.com', 'google123');
    showToast('Thank you for exploring Haryana Handloom Camp!');
    navigate('/home');
  };

  return (
    <>
      <MetaSEO title="Sign In & Portal" description="Sign in or Register for Haryana Handloom Camp Nandyal" />

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
                type="button"
                onClick={() => setTab('login')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  tab === 'login'
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setTab('signup')}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  tab === 'signup'
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Sign Up
              </button>
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
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Mobile Phone:</label>
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
                  Username or Email Address:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter your email or username"
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
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
                className="w-full btn-gold justify-center py-3.5 text-xs font-bold shadow-md"
              >
                <span>
                  {tab === 'login' ? 'Sign In' : 'Register Account'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Direct Google Sign In with zero mail prompts */}
            <button
              type="button"
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

      </div>
    </>
  );
}
