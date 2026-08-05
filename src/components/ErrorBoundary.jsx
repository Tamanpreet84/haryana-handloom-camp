import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F8F6F0] text-slate-900 text-center font-sans">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl border-2 border-[#D97706] shadow-2xl space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-[#D97706] flex items-center justify-center mx-auto text-3xl font-black">
              ★
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#0F172A]">HARYANA HANDLOOM CAMP</h2>
            <p className="text-sm text-slate-600 font-medium">
              We encountered a temporary session error. Click below to refresh the store!
            </p>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  try {
                    localStorage.clear();
                  } catch (e) {}
                  window.location.href = '/';
                }}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold text-sm shadow-md hover:scale-105 transition-transform"
              >
                🔄 Clear Session & Reload Store
              </button>
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="w-full py-2.5 px-6 rounded-full border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
