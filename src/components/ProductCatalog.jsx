import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS, FABRIC_TYPES, STORE_DETAILS } from '../data/products';
import { Search, ShoppingBag, MessageCircle, Info, Check, Eye, Heart, Star, SlidersHorizontal, ArrowUpDown, BookOpen } from 'lucide-react';

export default function ProductCatalog({ onAddToCart, wishlist, onToggleWishlist, onOpenFabricGuide }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFabric, setSelectedFabric] = useState('All Materials');
  const [priceFilter, setPriceFilter] = useState('all'); // all, under-1000, 1000-2000, above-2000
  const [sortBy, setSortBy] = useState('popular'); // popular, price-low, price-high, rating
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

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

  const handleColorSelect = (productId, colorHex) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorHex }));
  };

  const handleQuickInquire = (product) => {
    const sizeChosen = selectedSizes[product.id] || product.sizes[0];
    const message = `Hello Haryana Handloom Camp!\n\nI am interested in inquiring about:\n*Product:* ${product.name}\n*Loom Price:* ₹${product.price}\n*Size:* ${sizeChosen}\n*Material:* ${product.material}\n\nPlease let me know if this is currently available in store.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_DETAILS.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <section id="categories" className="py-16 relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6c265]">Handloom Collection</span>
              <button
                onClick={onOpenFabricGuide}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#162d5a] border border-[#e6c265]/40 text-[#f7e6a1] hover:bg-[#e6c265] hover:text-[#091326] transition-colors"
              >
                <BookOpen className="w-3 h-3" />
                <span>Fabric Guide</span>
              </button>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              Explore Our <span className="gold-text">Premium Furnishings</span>
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Direct loom pricing with fast color guarantees & custom sizes.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search bedsheets, mink blankets, curtains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#0b1833] border border-[#e6c265]/30 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#e6c265]"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#f7e6a1] via-[#e6c265] to-[#b88d2d] text-[#070d1a] border-transparent font-bold shadow-md'
                  : 'bg-[#0b1833]/80 text-slate-300 border-[#e6c265]/20 hover:border-[#e6c265]/60 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filter Controls Toolbar */}
        <div className="p-4 rounded-2xl bg-[#0b1833]/90 border border-[#e6c265]/30 mb-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          {/* Material Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#e6c265]" />
            <span className="font-semibold text-slate-300">Material:</span>
            <select
              value={selectedFabric}
              onChange={(e) => setSelectedFabric(e.target.value)}
              className="bg-[#070d1a] border border-[#e6c265]/30 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#e6c265]"
            >
              {FABRIC_TYPES.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Price Range:</span>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-[#070d1a] border border-[#e6c265]/30 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#e6c265]"
            >
              <option value="all">All Prices</option>
              <option value="under-1000">Under ₹1,000</option>
              <option value="1000-2000">₹1,000 - ₹2,000</option>
              <option value="above-2000">Above ₹2,000</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-[#e6c265]" />
            <span className="font-semibold text-slate-300">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#070d1a] border border-[#e6c265]/30 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#e6c265]"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.sizes[0];
            const isWishlisted = wishlist.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="glass-card overflow-hidden flex flex-col group relative"
              >
                {/* Tag & Wishlist Button */}
                <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#070d1a]/90 backdrop-blur-md border border-[#e6c265]/50 text-[10px] font-extrabold text-[#f7e6a1] tracking-wider uppercase">
                    {product.tag}
                  </span>

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-2 rounded-full backdrop-blur-md border transition-colors ${
                      isWishlisted
                        ? 'bg-red-500/20 border-red-500 text-red-400'
                        : 'bg-[#070d1a]/80 border-white/20 text-slate-300 hover:text-red-400'
                    }`}
                    title="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-400' : ''}`} />
                  </button>
                </div>

                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091326] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Quick Spec Button */}
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-[#070d1a]/80 text-[#e6c265] hover:bg-[#e6c265] hover:text-black transition-colors border border-[#e6c265]/40"
                    title="Quick Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-[#070d1a]/80 px-2 py-1 rounded-md border border-white/10 text-[11px] font-bold text-white">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="text-[#e6c265] uppercase tracking-wider font-semibold">
                        {product.category.replace('-', ' ')}
                      </span>
                      {product.threadCount && (
                        <span className="text-slate-400 text-[10px] bg-[#162d5a] px-2 py-0.5 rounded font-mono">
                          {product.threadCount}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-base text-white group-hover:text-[#e6c265] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-serif font-extrabold text-lg text-[#f7e6a1]">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{product.mrp}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        {product.discount}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 font-sans">
                      {product.description}
                    </p>
                  </div>

                  {/* Size Options Pill */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Select Size:</label>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => handleSizeSelect(product.id, sz)}
                          className={`text-[11px] px-2.5 py-1 rounded-md transition-colors border ${
                            currentSize === sz
                              ? 'bg-[#e6c265] text-[#070d1a] font-bold border-[#e6c265]'
                              : 'bg-[#070d1a]/60 text-slate-300 border-white/10 hover:border-[#e6c265]/40'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                    <button
                      onClick={() => onAddToCart({ ...product, selectedSize: currentSize })}
                      className="flex-1 py-2 px-3 rounded-lg bg-[#162d5a] border border-[#e6c265]/40 hover:bg-[#203c75] text-[#f7e6a1] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                    <button
                      onClick={() => handleQuickInquire(product)}
                      className="p-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-400 hover:text-white transition-colors"
                      title="Direct WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#0b1833] border border-[#e6c265]/20 max-w-md mx-auto space-y-3">
            <Info className="w-8 h-8 text-[#e6c265] mx-auto" />
            <p className="text-slate-200 font-medium">No matching items found.</p>
            <p className="text-slate-400 text-xs">Try clearing filters or searching for another material or category.</p>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0b1833] border-2 border-[#e6c265] rounded-3xl max-w-xl w-full p-6 relative overflow-hidden shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-60 object-cover rounded-2xl border border-[#e6c265]/40"
              />
              <div className="space-y-3">
                <span className="badge-gold text-[10px]">{activeModalProduct.tag}</span>
                <h3 className="font-serif font-bold text-xl text-white">{activeModalProduct.name}</h3>
                
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-extrabold text-xl text-[#f7e6a1]">
                    ₹{activeModalProduct.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ₹{activeModalProduct.mrp}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400">
                    {activeModalProduct.discount}
                  </span>
                </div>

                <p className="text-xs text-[#e6c265] font-semibold">{activeModalProduct.material} • {activeModalProduct.threadCount}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{activeModalProduct.description}</p>
                
                {/* Available Color Swatches */}
                {activeModalProduct.colors && (
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase">Color Swatches:</label>
                    <div className="flex gap-2">
                      {activeModalProduct.colors.map((c) => (
                        <div
                          key={c}
                          className="w-6 h-6 rounded-full border-2 border-white/40 cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: c }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-bold text-slate-200 uppercase">Highlights:</span>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {activeModalProduct.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2 border-t border-white/10">
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
                  handleQuickInquire(activeModalProduct);
                  setActiveModalProduct(null);
                }}
                className="btn-outline-gold text-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
