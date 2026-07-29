import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';

export default function NotFoundPage() {
  return (
    <>
      <MetaSEO title="404 Page Not Found" description="The requested page could not be found" />
      <div className="container mx-auto px-4 py-20 text-center space-y-5">
        <h1 className="font-cinzel text-7xl font-extrabold text-[#D97706]">404</h1>
        <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Page Not Found</h2>
        <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
          The handloom collection page you are looking for might have been moved or updated.
        </p>
        <Link to="/" className="btn-gold text-xs py-2.5 px-6 inline-flex items-center gap-2">
          <Home className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </>
  );
}
