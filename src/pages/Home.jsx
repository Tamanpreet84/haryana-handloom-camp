import React from 'react';
import MetaSEO from '../components/MetaSEO';
import Hero from '../components/Hero';
import FeaturesBanner from '../components/FeaturesBanner';
import ProductCatalog from '../components/ProductCatalog';
import ReviewsSection from '../components/ReviewsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import { useShop } from '../context/ShopContext';

export default function Home({ onOpenFabricGuide }) {
  const { addToCart, wishlist, toggleWishlist } = useShop();

  return (
    <>
      <MetaSEO
        title="Home"
        description="Haryana Handloom Camp Nandyal - Premium Bed Sheets, Velvet Cushion Covers, Blackout Curtains, Comforters & Mink Blankets on NK Road."
      />
      <main>
        <Hero />
        <FeaturesBanner />
        <ProductCatalog
          onAddToCart={addToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onOpenFabricGuide={onOpenFabricGuide}
        />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
}
