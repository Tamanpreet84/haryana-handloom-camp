import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, MessageCircle, Heart, Check, ShieldCheck, Truck, BookOpen, ArrowLeft, Palette } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, getWhatsAppUrl } from '../data/products';
import VarietyModal from '../components/VarietyModal';

export default function ProductDetailPage({ onOpenFabricGuide }) {
  const { id } = useParams();
  const { addToCart, wishlist, toggleWishlist, showToast } = useShop();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [varietyModalOpen, setVarietyModalOpen] = useState(false);

  // Review Form state
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [localReviews, setLocalReviews] = useState([
    { name: 'Suresh Kumar', rating: 5, date: '2 weeks ago', comment: 'Superb fast-color quality! Fast delivery in Nandyal.' },
    { name: 'Lakshmi Prasanna', rating: 5, date: '1 month ago', comment: 'Very soft texture and beautiful handloom print.' }
  ]);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewName || !newReviewComment) return;
    setLocalReviews([
      { name: newReviewName, rating: Number(newReviewRating), date: 'Just now', comment: newReviewComment },
      ...localReviews
    ]);
    setNewReviewName('');
    setNewReviewComment('');
    showToast('Thank you! Your review has been published.');
  };

  const handleDirectWhatsApp = () => {
    const text = `Hello Haryana Handloom Camp!\n\nI am inquiring about:\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n*Size:* ${selectedSize}\n\nPlease confirm availability in store.`;
    const targetUrl = getWhatsAppUrl(0, text);
    window.open(targetUrl, '_blank');
  };

  return (
    <>
      <MetaSEO
        title={product.name}
        description={product.description}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: `https://haryana-handloom-camp.vercel.app${product.image}`,
          description: product.description,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: product.price,
            availability: 'https://schema.org/InStock'
          }
        }}
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
            <Link to="/" className="hover:text-[#D97706]">Home</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-[#D97706]">Catalog</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 truncate">{product.name}</span>
          </div>

          {/* Product Hero Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-md h-80 sm:h-96 md:h-[450px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F172A] text-white text-xs font-extrabold shadow">
                  {product.tag}
                </span>
                
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 p-2.5 rounded-full border shadow backdrop-blur-md ${
                    isWishlisted ? 'bg-red-50 text-red-600 border-red-300' : 'bg-white/90 text-slate-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600' : ''}`} />
                </button>
              </div>

              {/* Banner button for 20+ varieties */}
              <button
                onClick={() => setVarietyModalOpen(true)}
                className="w-full p-3.5 rounded-2xl bg-[#F3EFE6] dark:bg-slate-800 border-2 border-amber-300/80 hover:bg-[#0F172A] hover:text-white text-[#0F172A] dark:text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Palette className="w-4 h-4 text-[#D97706]" />
                <span>View All 20+ Store Colours & Patterns for {product.category.replace('-', ' ')}</span>
              </button>
            </div>

            {/* Right: Spec Info & Purchase Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-[#B45309] uppercase tracking-widest block mb-1">
                  {product.category} • {product.threadCount}
                </span>
                <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{product.rating}</span>
                  <span className="text-xs text-slate-400 font-medium">({product.reviewsCount} customer reviews)</span>
                </div>
              </div>

              {/* Price Block */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-baseline gap-3">
                <span className="font-serif font-extrabold text-3xl text-slate-900 dark:text-white">
                  ₹{product.price}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{product.mrp}
                </span>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                  {product.discount}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-900 dark:text-white uppercase">Available Size:</label>
                  <button onClick={onOpenFabricGuide} className="text-[#D97706] hover:underline font-bold flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`text-xs px-4 py-2 rounded-xl transition-all border font-bold ${
                        selectedSize === sz
                          ? 'bg-[#0F172A] text-white border-[#0F172A] shadow'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => addToCart(product, selectedSize)}
                  className="flex-1 btn-gold justify-center py-3.5 text-xs font-bold shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Inquiry Bag
                </button>
                <button
                  onClick={handleDirectWhatsApp}
                  className="btn-outline-gold py-3.5 text-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-800 text-emerald-50" /> Direct WhatsApp
                </button>
              </div>

              {/* Key Features */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase block">Product Highlights:</span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* User Review Submission Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-cinzel font-bold text-xl text-slate-900 dark:text-white">Customer Reviews</h3>

            {/* Review Form */}
            <form onSubmit={handleAddReview} className="space-y-4 max-w-lg p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Write a Store Review:</span>
              <input
                type="text"
                placeholder="Your Name"
                value={newReviewName}
                onChange={(e) => setNewReviewName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border text-xs font-semibold"
                required
              />
              <textarea
                placeholder="Share your experience with this handloom product..."
                value={newReviewComment}
                onChange={(e) => setNewReviewComment(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border text-xs font-semibold h-20"
                required
              ></textarea>
              <button type="submit" className="btn-navy text-xs py-2 px-5 font-bold">
                Submit Review
              </button>
            </form>

            {/* Reviews List */}
            <div className="space-y-3">
              {localReviews.map((rev, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs space-y-1">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-slate-900 dark:text-white">{rev.name}</span>
                    <span className="text-slate-400 font-normal">{rev.date}</span>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <VarietyModal
        isOpen={varietyModalOpen}
        onClose={() => setVarietyModalOpen(false)}
        selectedProduct={product}
        onAddToCart={addToCart}
      />
    </>
  );
}
