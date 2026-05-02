'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import Image from 'next/image';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
          />
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[120] h-screen w-full max-w-md bg-cloud-dancer p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-sans text-xl font-black uppercase tracking-widest">Shopping Bag</h2>
              <button onClick={() => setIsCartOpen(false)}><X size={24} strokeWidth={1.2} /></button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 pr-2">
              {cart.length === 0 ? (
                <p className="text-center py-20 text-[10px] uppercase tracking-widest opacity-40">Your bag is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 group">
                    <div className="h-32 w-24 bg-white rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image.src} alt='Item-image' className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xs font-bold uppercase tracking-wide">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id, item.size)} className="opacity-0 group-hover:opacity-40 hover:text-red-500 transition-all">
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[10px] opacity-40 uppercase font-bold mt-1">Size: {item.size}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 border border-black/5 rounded-full px-3 py-1">
                          <button onClick={() => updateQuantity(item.id, item.size, -1)}><Minus size={12} /></button>
                          <span className="text-xs font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.size, 1)}><Plus size={12} /></button>
                        </div>
                        <p className="text-sm font-light">${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-8 border-t border-black/5 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Subtotal</span>
                  <span className="text-2xl font-sans font-light">${cartTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <button className="w-full bg-hemmes-dark text-cloud-dancer py-6 rounded-3xl font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all">
                  Checkout
                </button>
                <p className="text-[9px] text-center uppercase tracking-widest opacity-40">Complimentary Shipping Included</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}