import React from 'react';

export function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 space-y-3 animate-pulse shadow-sm">
      <div className="w-full h-56 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
      <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
      <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-xl w-full pt-2"></div>
    </div>
  );
}

export function BannerSkeleton() {
  return (
    <div className="w-full h-80 bg-slate-200 dark:bg-slate-800 rounded-3xl animate-pulse p-8 flex flex-col justify-center space-y-4">
      <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
      <div className="h-12 bg-slate-300 dark:bg-slate-700 rounded w-2/3"></div>
      <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded w-1/2"></div>
    </div>
  );
}

export function CartSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex gap-4 animate-pulse">
          <div className="w-20 h-20 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
