'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { products } from '@/data/products';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useStore();

  // Map IDs to actual product data
  const wishlistItems = products.filter(p => wishlist.includes(p.id));

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[120] h-screen w-full max-w-md bg-cloud-dancer p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-sans text-xl font-black uppercase tracking-widest">Your Archive</h2>
              <button onClick={() => setIsWishlistOpen(false)}><X size={24} strokeWidth={1.2} /></button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8">
              {wishlistItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-30">
                  <p className="text-[10px] uppercase tracking-[0.4em]">Archive is empty</p>
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="h-32 w-24 bg-white rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image.src} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-wide">{item.name}</h3>
                          <p className="text-sm font-light mt-1">${item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => toggleWishlist(item.id)}
                          className="opacity-0 group-hover:opacity-40 hover:text-red-500 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => {
                          addToCart(item, 1, 'M'); // Defaulting to M for quick add
                          toggleWishlist(item.id);
                        }}
                        className="w-fit flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/10 pb-1 hover:border-black transition-all"
                      >
                        <ShoppingBag size={12} />
                        Move to Bag
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}