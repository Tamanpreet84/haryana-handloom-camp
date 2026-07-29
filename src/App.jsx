import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider, useShop } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import FabricGuideModal from './components/FabricGuideModal';
import FloatingWidgets from './components/FloatingWidgets';

// Pages
import WelcomeLoginPage from './pages/WelcomeLoginPage';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrdersPage from './pages/OrdersPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [fabricGuideOpen, setFabricGuideOpen] = useState(false);
  const { toast } = useShop();
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#D97706] selection:text-white font-sans transition-colors">
      <ScrollToTop />
      
      {!isLoginPage && <Navbar onOpenFabricGuide={() => setFabricGuideOpen(true)} />}

      <main className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home onOpenFabricGuide={() => setFabricGuideOpen(true)} />} />
          <Route path="/login" element={<WelcomeLoginPage />} />
          <Route path="/home" element={<Home onOpenFabricGuide={() => setFabricGuideOpen(true)} />} />
          <Route path="/catalog" element={<CatalogPage onOpenFabricGuide={() => setFabricGuideOpen(true)} />} />
          <Route path="/product/:id" element={<ProductDetailPage onOpenFabricGuide={() => setFabricGuideOpen(true)} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}

      {/* App-like Mobile Bottom Navigation */}
      {!isLoginPage && <MobileBottomNav />}

      {/* Fabric Buying Guide Modal */}
      <FabricGuideModal
        isOpen={fabricGuideOpen}
        onClose={() => setFabricGuideOpen(false)}
      />

      {/* Global Toast Notifications */}
      <FloatingWidgets
        toastMessage={toast?.message || ''}
        onClearToast={() => {}}
      />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <MainLayout />
      </Router>
    </ShopProvider>
  );
}
