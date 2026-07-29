import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, STORE_DETAILS } from '../data/products';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export function ShopProvider({ children }) {
  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('hhc_theme') || 'light';
  });

  // User Auth State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('hhc_user');
    return saved ? JSON.parse(saved) : {
      id: 'usr-101',
      name: 'Taman Preet',
      email: 'taman@example.com',
      phone: '9215211025',
      role: 'admin', // 'user' or 'admin'
      address: {
        fullName: 'Taman Preet',
        street: 'NK Road, Near Sai Baba Mandir',
        city: 'Nandyal',
        state: 'Andhra Pradesh',
        pincode: '518501',
        phone: '9215211025'
      }
    };
  });

  // Persistent Cart
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('hhc_cart');
    return saved ? JSON.parse(saved) : [
      {
        ...PRODUCTS[0],
        selectedSize: 'Double (90x100")',
        quantity: 1
      }
    ];
  });

  // Persistent Wishlist
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('hhc_wishlist');
    return saved ? JSON.parse(saved) : [PRODUCTS[1], PRODUCTS[3]];
  });

  // Orders History
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('hhc_orders');
    return saved ? JSON.parse(saved) : [
      {
        orderId: 'HHC-98241',
        date: '2026-07-28',
        status: 'Delivered',
        items: [
          { name: 'Royal Crimson Velvet Zari Border Cushion Covers (Set of 5)', price: 699, quantity: 1, selectedSize: '16x16 inches', image: '/images/cushion-covers/cc-crimson-velvet-zari.png' }
        ],
        totalAmount: 699,
        paymentId: 'pay_Nz9281741',
        paymentMethod: 'Razorpay UPI',
        shippingAddress: {
          fullName: 'Taman Preet',
          street: 'NK Road, Near Sai Baba Mandir',
          city: 'Nandyal',
          pincode: '518501'
        }
      }
    ];
  });

  // Coupon State
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const coupons = [
    { code: 'HANDLOOM10', discountPercent: 10, minAmount: 500, description: '10% OFF on all Handloom Items' },
    { code: 'NANDYAL20', discountPercent: 20, minAmount: 1500, description: '20% Special OFF for Nandyal Orders above ₹1500' },
  ];

  // Toast message
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Sync theme with DOM & localStorage
  useEffect(() => {
    localStorage.setItem('hhc_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('hhc_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('hhc_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('hhc_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('hhc_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('hhc_user');
    }
  }, [user]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    showToast(`Switched to ${theme === 'light' ? 'Royal Dark' : 'Warm Light'} Mode`);
  };

  // Cart Functions
  const addToCart = (product, size = null) => {
    const chosenSize = size || product.sizes[0];
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === chosenSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { ...product, selectedSize: chosenSize, quantity: 1 }];
      }
    });
    showToast(`Added "${product.name}" to Inquiry Bag!`);
  };

  const updateQuantity = (index, delta) => {
    setCart((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from Bag');
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Wishlist Functions
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast('Removed from Wishlist', 'info');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to Wishlist!`);
        return [...prev, product];
      }
    });
  };

  const moveWishlistToCart = (product) => {
    addToCart(product, product.sizes[0]);
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));
  };

  // Coupon apply
  const applyCoupon = (code) => {
    const found = coupons.find((c) => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!found) {
      showToast('Invalid Coupon Code', 'error');
      return false;
    }
    const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    if (cartSubtotal < found.minAmount) {
      showToast(`Coupon valid on minimum order of ₹${found.minAmount}`, 'error');
      return false;
    }
    setAppliedCoupon(found);
    showToast(`Applied Coupon ${found.code}! Saved ${found.discountPercent}%`);
    return true;
  };

  // Place order
  const placeOrder = (orderDetails) => {
    const newOrder = {
      orderId: `HHC-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Placed',
      ...orderDetails
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Admin order status update
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.orderId === orderId ? { ...ord, status: newStatus } : ord))
    );
    showToast(`Order ${orderId} status updated to "${newStatus}"`);
  };

  // Auth Functions
  const loginUser = (email, password) => {
    const newUser = {
      id: 'usr-' + Date.now(),
      name: email.split('@')[0].toUpperCase(),
      email,
      phone: '9215211025',
      role: email.includes('admin') ? 'admin' : 'user',
      address: {
        fullName: email.split('@')[0],
        street: 'NK Road, Near Sai Baba Mandir',
        city: 'Nandyal',
        state: 'Andhra Pradesh',
        pincode: '518501',
        phone: '9215211025'
      }
    };
    setUser(newUser);
    showToast(`Welcome back, ${newUser.name}!`);
    return newUser;
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Logged out successfully');
  };

  // Price Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartMrpTotal = cart.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
  const couponDiscountAmount = appliedCoupon
    ? Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100)
    : 0;
  const shippingCharge = cartSubtotal > 999 || cart.length === 0 ? 0 : 99;
  const gstAmount = Math.round((cartSubtotal - couponDiscountAmount) * 0.05); // 5% GST on handloom textiles
  const grandTotal = cartSubtotal - couponDiscountAmount + shippingCharge + gstAmount;

  return (
    <ShopContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        loginUser,
        logoutUser,
        setUser,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        wishlist,
        toggleWishlist,
        moveWishlistToCart,
        orders,
        placeOrder,
        updateOrderStatus,
        appliedCoupon,
        applyCoupon,
        coupons,
        cartSubtotal,
        cartMrpTotal,
        couponDiscountAmount,
        shippingCharge,
        gstAmount,
        grandTotal,
        toast,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
