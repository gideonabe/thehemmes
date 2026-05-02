'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: number;
  size: string;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: number[]; // Array of product IDs
  addToCart: (product: any, quantity: number, size: string) => void;
  removeFromCart: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, delta: number) => void;
  toggleWishlist: (id: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartTotal: number;

  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const addToCart = (product: any, quantity: number, size: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, size }];
    });
    // setIsCartOpen(true);
  };

  const updateQuantity = (id: number, size: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id && item.size === size 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    ));
  };

  const removeFromCart = (id: number, size: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const cartTotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);

  return (
    <StoreContext.Provider value={{ 
      cart, wishlist, addToCart, removeFromCart, updateQuantity, toggleWishlist, isCartOpen, setIsCartOpen, cartTotal, isWishlistOpen, 
      setIsWishlistOpen 
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};