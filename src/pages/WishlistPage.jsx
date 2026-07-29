import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import { useShop } from '../context/ShopContext';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, moveWishlistToCart, addToCart } = useShop();

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart(item, item.sizes[0]);
    });
  };

  return (
    <>
      <MetaSEO title="Saved Wishlist" description="Your saved Haryana Handloom Camp products" />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-extrabold text-[#D97706] uppercase tracking-widest block font-cinzel">
                Saved Favorites
              </span>
              <h1 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Your Wishlist ({wishlist.length} Items)
              </h1>
            </div>

            {wishlist.length > 0 && (
              <button
                onClick={handleMoveAllToCart}
                className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Move All to Bag</span>
              </button>
            )}
          </div>

          {wishlist.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-4 shadow-sm">
              <Heart className="w-16 h-16 text-red-300 dark:text-red-900 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-slate-800 dark:text-slate-200">
                Your Wishlist is Empty
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
                Tap the heart icon on any product to save it for later consideration.
              </p>
              <Link to="/catalog" className="btn-gold text-xs py-2.5 px-6 inline-flex">
                Explore Catalog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-56 bg-slate-100 dark:bg-slate-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-red-600 shadow touch-target"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold text-[#D97706] uppercase">
                        {product.category}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white line-clamp-2">
                        {product.name}
                      </h4>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-serif font-extrabold text-base text-slate-900 dark:text-white">
                          ₹{product.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{product.mrp}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => moveWishlistToCart(product)}
                      className="w-full btn-navy justify-center py-2.5 text-xs font-bold"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Move to Inquiry Bag</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
