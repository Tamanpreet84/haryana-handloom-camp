import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS, FABRIC_TYPES, getWhatsAppUrl } from '../data/products';
import { Search, ShoppingBag, MessageCircle, Info, Check, Eye, Heart, Star, SlidersHorizontal, ArrowUpDown, BookOpen, Palette, Sparkles, Award } from 'lucide-react';
import VarietyModal from './VarietyModal';

export default function ProductCatalog({ onAddToCart, wishlist, onToggleWishlist, onOpenFabricGuide }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFabric, setSelectedFabric] = useState('All Materials');
  const [priceFilter, setPriceFilter] = useState('all'); // all, under-1000, 1000-2000, above-2000
  const [sortBy, setSortBy] = useState('popular'); // popular, price-low, price-high, rating
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [varietyModalProduct, setVarietyModalProduct] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.material.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFabric = selectedFabric === 'All Materials' || product.material.includes(selectedFabric);
    
    let matchesPrice = true;
    if (priceFilter === 'under-1000') matchesPrice = product.price < 1000;
    else if (priceFilter === '1000-2000') matchesPrice = product.price >= 1000 && product.price <= 2000;
    else if (priceFilter === 'above-2000') matchesPrice = product.price > 2000;

    return matchesCategory && matchesSearch && matchesFabric && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // popular
  });

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuickInquire = (product) => {
    const sizeChosen = selectedSizes[product.id] || product.sizes[0];
    const message = `Hello Haryana Handloom Camp!\n\nI am interested in inquiring about:\n*Product:* ${product.name}\n*Loom Price:* ₹${product.price}\n*Size:* ${sizeChosen}\n*Material:* ${product.material}\n\nPlease let me know if this is currently available in store.`;
    const targetUrl = getWhatsAppUrl(0, message);
    window.open(targetUrl, '_blank');
  };

  return (
    <section id="categories" className="py-12 sm:py-16 relative bg-[#F8F6F0]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B45309]">Handloom Collection</span>
              <button
                onClick={onOpenFabricGuide}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#F3EFE6] border border-amber-300/80 text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors font-bold"
              >
                <BookOpen className="w-3 h-3 text-[#D97706]" />
                <span>Fabric Guide</span>
              </button>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Explore Store <span className="gold-text">Originals & Bestsellers</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 font-semibold">
              Tap "View Colours & Varieties" to inspect all uploaded store photos, patterns & shades for each product!
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search bedsheets, curtains, blankets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#D97706] shadow-sm"
            />
          </div>
        </div>

        {/* Category Tabs - Mobile Swipe Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none snap-x">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border snap-start touch-target ${
                selectedCategory === cat.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#D97706] hover:text-[#0F172A]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filter Controls Toolbar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs">
          {/* Material Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#D97706]" />
            <span className="font-bold text-slate-700">Material:</span>
            <select
              value={selectedFabric}
              onChange={(e) => setSelectedFabric(e.target.value)}
              className="bg-[#F8FAFC] border border-slate-300 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#D97706] font-semibold"
            >
              {FABRIC_TYPES.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Price:</span>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-[#F8FAFC] border border-slate-300 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#D97706] font-semibold"
            >
              <option value="all">All Prices</option>
              <option value="under-1000">Under ₹1,000</option>
              <option value="1000-2000">₹1,000 - ₹2,000</option>
              <option value="above-2000">Above ₹2,000</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-[#D97706]" />
            <span className="font-bold text-slate-700">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#F8FAFC] border border-slate-300 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#D97706] font-semibold"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid - Responsive Mobile & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.sizes[0];
            const isWishlisted = wishlist.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="glass-card overflow-hidden flex flex-col group relative bg-white border-2 border-slate-200 hover:border-[#D97706] shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                {/* Tag & Wishlist Button */}
                <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0F172A]/90 backdrop-blur-md text-[10px] font-extrabold text-white tracking-wider uppercase shadow pointer-events-auto">
                    {product.tag}
                  </span>

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-2 rounded-full backdrop-blur-md border transition-colors shadow pointer-events-auto touch-target ${
                      isWishlisted
                        ? 'bg-red-50 border-red-300 text-red-600'
                        : 'bg-white/95 border-slate-200 text-slate-600 hover:text-red-600'
                    }`}
                    title="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-600' : ''}`} />
                  </button>
                </div>

                {/* Product Image */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100 cursor-pointer" onClick={() => setVarietyModalProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Quick Spec Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProduct(product);
                    }}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors border border-slate-200 shadow-md touch-target"
                    title="Quick Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/95 px-2 py-1 rounded-md border border-slate-200 text-[11px] font-bold text-slate-900 shadow">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="text-[#B45309] uppercase tracking-wider font-extrabold">
                        {product.category.replace('-', ' ')}
                      </span>
                      {product.threadCount && (
                        <span className="text-slate-700 text-[10px] bg-slate-100 px-2 py-0.5 rounded font-mono font-bold">
                          {product.threadCount}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0F172A] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 mt-1.5">
                      <span className="font-serif font-extrabold text-lg sm:text-xl text-[#0F172A]">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{product.mrp}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                        {product.discount}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 font-sans font-medium">
                      {product.description}
                    </p>
                  </div>

                  {/* Color Swatches & Prominent Variety Button */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">Color Swatches:</span>
                      {product.colors && (
                        <div className="flex items-center gap-1">
                          {product.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-sm"
                              style={{ backgroundColor: c }}
                            ></span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Prominent "View Colours & Varieties" Button */}
                    <button
                      onClick={() => setVarietyModalProduct(product)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#F3EFE6] border border-amber-300/80 hover:bg-[#0F172A] hover:text-white text-[#0F172A] text-[11px] font-extrabold flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-98 touch-target"
                    >
                      <Palette className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>View All Store Patterns & Colours</span>
                    </button>
                  </div>

                  {/* Size Options Pill */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Select Size:</label>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => handleSizeSelect(product.id, sz)}
                          className={`text-[11px] px-2.5 py-1 rounded-md transition-colors border font-semibold ${
                            currentSize === sz
                              ? 'bg-[#0F172A] text-white border-[#0F172A]'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#D97706]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onAddToCart({ ...product, selectedSize: currentSize })}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0F172A] border border-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow touch-target"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                    <button
                      onClick={() => handleQuickInquire(product)}
                      className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 border border-emerald-300 text-emerald-800 hover:text-white transition-colors touch-target"
                      title="Direct WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-800 text-emerald-50" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto space-y-3 shadow-md">
            <Info className="w-8 h-8 text-[#D97706] mx-auto" />
            <p className="text-slate-800 font-bold">No matching items found.</p>
            <p className="text-slate-500 text-xs">Try clearing filters or searching for another material or category.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSelectedFabric('All Materials');
                setPriceFilter('all');
              }}
              className="btn-gold text-xs py-2 px-4"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Quick Spec Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-2 border-[#D97706] rounded-3xl max-w-xl w-full p-6 relative overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-black text-xl font-bold p-1"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-56 sm:h-60 object-cover rounded-2xl border border-slate-200"
              />
              <div className="space-y-3">
                <span className="badge-gold text-[10px]">{activeModalProduct.tag}</span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900">{activeModalProduct.name}</h3>
                
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-extrabold text-xl text-[#0F172A]">
                    ₹{activeModalProduct.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ₹{activeModalProduct.mrp}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {activeModalProduct.discount}
                  </span>
                </div>

                <p className="text-xs text-[#B45309] font-bold">{activeModalProduct.material} • {activeModalProduct.threadCount}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{activeModalProduct.description}</p>
                
                {/* Available Color Swatches */}
                {activeModalProduct.colors && (
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Color Swatches:</label>
                    <div className="flex gap-2">
                      {activeModalProduct.colors.map((c, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-slate-300 shadow-sm"
                          style={{ backgroundColor: c }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-bold text-slate-800 uppercase">Highlights:</span>
                  <ul className="text-xs text-slate-600 space-y-1 font-medium">
                    {activeModalProduct.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2 border-t border-slate-200">
              <button
                onClick={() => {
                  onAddToCart({
                    ...activeModalProduct,
                    selectedSize: selectedSizes[activeModalProduct.id] || activeModalProduct.sizes[0]
                  });
                  setActiveModalProduct(null);
                }}
                className="flex-1 btn-gold justify-center text-xs"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Inquiry Bag
              </button>
              <button
                onClick={() => {
                  setVarietyModalProduct(activeModalProduct);
                  setActiveModalProduct(null);
                }}
                className="btn-outline-gold text-xs"
              >
                <Palette className="w-4 h-4 text-[#D97706]" /> View All Store Patterns
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category Variety Showcase Modal */}
      <VarietyModal
        isOpen={!!varietyModalProduct}
        onClose={() => setVarietyModalProduct(null)}
        selectedProduct={varietyModalProduct}
        onAddToCart={onAddToCart}
      />
    </section>
  );
}
