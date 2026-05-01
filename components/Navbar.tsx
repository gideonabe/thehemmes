'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const { cart, wishlist, setIsCartOpen, setIsWishlistOpen } = useStore();
  
  // const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;
  
  const { scrollY } = useScroll();

  // Handle scroll logic for visibility and background
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Show glass background after scrolling 50px
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={isVisible || isMenuOpen ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 z-[100] w-full p-6 md:p-8 flex items-center justify-between text-hemmes-dark transition-all duration-500 
          ${isScrolled || isMenuOpen 
            ? 'bg-cloud-dancer/60 backdrop-blur-lg py-4 md:py-5 shadow-sm rounded-full' 
            : 'bg-transparent'}`}
      >
        {/* --- LEFT: TOGGLE --- */}
        <div className="flex-1">
          <div 
            onMouseEnter={() => setIsMenuOpen(true)}
            className="hidden md:block text-[10px] tracking-[0.4em] font-light uppercase cursor-pointer hover:opacity-50 transition-all w-fit"
          >
            D I S C O V E R
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={1.2} />
            ) : (
              <Menu size={24} strokeWidth={1.2} />
            )}
          </button>
        </div>

        {/* Center: Brand Name */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="font-serif text-xl md:text-2xl tracking-[0.2em] font-normal text-center cursor-pointer">
            TheHemmes
          </div>
        </Link>

        {/* --- RIGHT: ICONS --- */}
        <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">

          {/* <button className="relative">
            <Heart size={20} strokeWidth={1.2} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </button> */}
          <button 
            onClick={() => setIsWishlistOpen(true)}
            className="relative hover:opacity-60 transition-opacity"
          >
            <Heart size={20} strokeWidth={1.2} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </button>
          
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag size={20} strokeWidth={1.2} />
            <span className={`absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold transition-all
              ${isMenuOpen ? 'bg-hemmes-dark text-cloud-dancer' : 'bg-white text-black'}`}>
              {cartCount}
            </span>
          </button>
        </div>

        {/* Mega Menu container */}
        <div onMouseLeave={() => setIsMenuOpen(false)} className="absolute top-0 left-0 w-full h-0">
          <AnimatePresence>
            {isMenuOpen && (
              <div className="hidden md:block pt-24">
                <MegaMenu />
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-cloud-dancer md:hidden flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-8">
              <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-30">Discover</h2>
              <ul className="font-sans text-4xl space-y-6 font-semibold tracking-tighter text-hemmes-dark">
                <li>New Arrivals</li>
                <li>Collections</li>
                <li>The Archive</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="mt-auto pb-10 flex gap-6 text-hemmes-dark/40">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Instagram</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Journal</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}