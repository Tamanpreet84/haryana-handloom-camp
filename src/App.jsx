import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import ProductCatalog from './components/ProductCatalog';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InquiryDrawer from './components/InquiryDrawer';
import FabricGuideModal from './components/FabricGuideModal';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [fabricGuideOpen, setFabricGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleAddToCart = (productWithSize) => {
    setCartItems((prev) => [...prev, productWithSize]);
    setCartOpen(true);
    showToast(`Added "${productWithSize.name}" to Inquiry Bag!`);
  };

  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed from Wishlist`);
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Saved "${product.name}" to Wishlist!`);
    }
  };

  const handleRemoveWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMoveWishlistToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, selectedSize: product.sizes[0] }]);
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    showToast(`Moved "${product.name}" to Inquiry Bag!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#091326] text-white selection:bg-[#e6c265] selection:text-black font-sans">
      <Navbar
        cartCount={cartItems.length}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenFabricGuide={() => setFabricGuideOpen(true)}
      />

      <main className="flex-1">
        <Hero />
        <FeaturesBanner />
        <ProductCatalog
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onOpenFabricGuide={() => setFabricGuideOpen(true)}
        />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />

      <InquiryDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        wishlist={wishlist}
        onRemoveWishlist={handleRemoveWishlist}
        onMoveWishlistToCart={handleMoveWishlistToCart}
      />

      <FabricGuideModal
        isOpen={fabricGuideOpen}
        onClose={() => setFabricGuideOpen(false)}
      />

      <FloatingWidgets
        toastMessage={toastMessage}
        onClearToast={() => setToastMessage('')}
      />
    </div>
  );
}
