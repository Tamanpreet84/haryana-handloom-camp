import React, { useState } from 'react';
import MetaSEO from '../components/MetaSEO';
import ProductCatalog from '../components/ProductCatalog';
import { useShop } from '../context/ShopContext';

export default function CatalogPage({ onOpenFabricGuide }) {
  const { addToCart, wishlist, toggleWishlist } = useShop();

  return (
    <>
      <MetaSEO
        title="Store Catalog"
        description="Browse all 30+ premium handloom products at Haryana Handloom Camp Nandyal. Bedsheets, Curtains, Cushion Covers, Mink Blankets & Pillows."
      />
      <div className="pt-4">
        <ProductCatalog
          onAddToCart={addToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onOpenFabricGuide={onOpenFabricGuide}
        />
      </div>
    </>
  );
}
