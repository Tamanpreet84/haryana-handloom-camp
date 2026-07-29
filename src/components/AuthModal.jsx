import React, { useState } from 'react';
import { X, Mail, Lock, User, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function AuthModal({ isOpen, onClose }) {
  const { loginUser, showToast } = useShop();
  const [tab, setTab] = useState('login'); // 'login', 'signup', 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || (!password && tab !== 'forgot')) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    if (tab === 'forgot') {
      showToast(`Password reset link sent to ${email}! Check your inbox.`);
      setTab('login');
      return;
    }

    loginUser(email, password);
    onClose();
  };

  const handleGoogleSignIn = () => {
    loginUser('google.user@gmail.com', 'google123');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border-2 border-amber-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1">
          <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-widest block font-cinzel">
            Haryana Handloom Account
          </span>
          <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">
            {tab === 'login' && 'Welcome Back'}
            {tab === 'signup' && 'Create Account'}
            {tab === 'forgot' && 'Reset Password'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {tab === 'login' && 'Sign in to access your orders & saved wishlist'}
            {tab === 'signup' && 'Join Nandyal’s premier handloom community'}
            {tab === 'forgot' && 'Enter your email to receive password reset link'}
          </p>
        </div>

        {/* Tab Switcher */}
        {tab !== 'forgot' && (
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setTab('login')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                tab === 'login'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`flex-1 py-2 rounded-lg transition-all ${
                tab === 'signup'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {tab === 'signup' && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Full Name:</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#D97706]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Email Address:</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#D97706]"
                required
              />
            </div>
          </div>

          {tab !== 'forgot' && (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-slate-700 dark:text-slate-300">Password:</label>
                {tab === 'login' && (
                  <button
                    type="button"
                    onClick={() => setTab('forgot')}
                    className="text-[#D97706] hover:underline font-semibold"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#D97706]"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full btn-gold justify-center py-3 text-xs font-bold shadow-md"
          >
            <span>
              {tab === 'login' && 'Sign In to Account'}
              {tab === 'signup' && 'Create Account'}
              {tab === 'forgot' && 'Send Reset Link'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
          <span className="bg-white dark:bg-slate-900 px-3 text-[10px] text-slate-400 font-bold uppercase">Or continue with</span>
        </div>

        {/* Google Sign In Button */}
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

        {tab === 'forgot' && (
          <button
            onClick={() => setTab('login')}
            className="w-full text-center text-xs text-slate-500 hover:underline font-bold"
          >
            ← Back to Login
          </button>
        )}

      </div>
    </div>
  );
}
