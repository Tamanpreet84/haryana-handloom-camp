import React from 'react';
import { Star, Quote, Award, Heart, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 bg-[#070d1a] border-t border-[#e6c265]/20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162d5a] border border-[#e6c265]/40 text-xs font-semibold text-[#f7e6a1]">
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> Customer Testimonials
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            Trusted By <span className="gold-text">5,000+ Homes</span> In Nandyal
          </h2>
          <p className="text-slate-300 text-sm">
            Read what local families and home decor enthusiasts say about our quality fabrics and direct loom pricing.
          </p>
        </div>

        {/* Store Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 text-center space-y-1">
            <span className="font-serif font-extrabold text-2xl text-[#e6c265]">15+ Years</span>
            <span className="block text-xs text-slate-300">Serving Nandyal Region</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 text-center space-y-1">
            <span className="font-serif font-extrabold text-2xl text-[#e6c265]">4.9 / 5.0</span>
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 text-center space-y-1">
            <span className="font-serif font-extrabold text-2xl text-[#e6c265]">100%</span>
            <span className="block text-xs text-slate-300">Fast Color Guarantee</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0b1833] border border-[#e6c265]/30 text-center space-y-1">
            <span className="font-serif font-extrabold text-2xl text-[#e6c265]">Direct Loom</span>
            <span className="block text-xs text-slate-300">No Middlemen Markup</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-6 flex flex-col justify-between relative group hover:border-[#e6c265]"
            >
              <Quote className="w-8 h-8 text-[#e6c265]/20 absolute top-4 right-4" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <span className="text-[11px] text-[#e6c265] font-semibold">{rev.location}</span>
                </div>
                <span className="text-[10px] text-slate-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
