import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import ProductCatalog from './components/ProductCatalog';
import RoomVisualizer from './components/RoomVisualizer';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InquiryDrawer from './components/InquiryDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (productWithSize) => {
    setCartItems((prev) => [...prev, productWithSize]);
    setCartOpen(true);
  };

  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#091326] text-white selection:bg-[#e6c265] selection:text-black">
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setCartOpen(true)}
      />

      <main className="flex-1">
        <Hero />
        <FeaturesBanner />
        <ProductCatalog onAddToCart={handleAddToCart} />
        <RoomVisualizer />
        <ContactSection />
      </main>

      <Footer />

      <InquiryDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
