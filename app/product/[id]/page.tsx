// app/product/[id]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AccordionItem from '@/components/AccordionItem';
import { Droplets, Truck, ShieldCheck } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState('M');

  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const isWishlisted = wishlist.includes(Number(id));
  // const isWishlisted = wishlist.includes(Number(product.id));

  if (!product) return <div className="h-screen flex items-center justify-center font-sans uppercase tracking-[0.5em]">Item not found</div>;

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(product, quantity, selectedSize);
    
    // Brief visual feedback before resetting the button state
    setTimeout(() => setIsAdding(false), 2000);
  };

  return (
    <div className="bg-cloud-dancer min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto pt-16 md:pt-32 pb-20 px-6 md:px-10">
        {/* --- NAVIGATION HELPERS --- */}
        <div className="flex items-center justify-between mb-4 md:mb-12">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 group"
          >
            <div className="p-3 rounded-full border border-black/5 group-hover:bg-hemmes-dark group-hover:text-white transition-all">
              <ArrowLeft size={16} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">Back to Collection</span>
          </button>

          {/* Breadcrumbs */}
          <nav className="text-[9px] md:text-[10px] font-semibold md:font-bold uppercase tracking-tighter md:tracking-[0.3em] flex gap-2 opacity-40">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span>/</span>
            <span className="hover:opacity-100 cursor-pointer">{product.category}</span>
            <span>/</span>
            <span className="text-hemmes-dark">{product.name}</span>
          </nav>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          
          {/* Left: Editorial Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] rounded-[40px] overflow-hidden bg-white shadow-sm"
            >
              <img src={product.image.src} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            {/* You could add more product angle images here */}
          </div>

          {/* Right: Product Info & Actions */}
          <div className="flex flex-col justify-start space-y-6 pt-4">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 font-bold mb-4">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter text-hemmes-dark mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-sans font-light tracking-tight opacity-80">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-hemmes-dark/70 font-sans max-w-md">
              A masterclass in modern luxury. This {product.category.toLowerCase()} is crafted from 100% premium materials, featuring a tailored silhouette that defines TheHemmes' commitment to timeless aesthetics.
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Select Size</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] border-b border-black/10 cursor-pointer">Size Guide</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 rounded-2xl border text-xs font-bold transition-all
                      ${selectedSize === size ? 'bg-hemmes-dark text-white border-hemmes-dark' : 'border-hemmes-dark/10 hover:border-hemmes-dark'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* NEW: Quantity Selector */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Quantity</span>
              <div className="flex items-center gap-8 w-fit bg-white border border-black/5 rounded-3xl px-6 py-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50"><Minus size={18} /></button>
                <span className="text-sm font-bold min-w-[20px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50"><Plus size={18} /></button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-2">
              {/* <button 
                onClick={() => addToCart(product, quantity, selectedSize)}
                className="w-full bg-hemmes-dark text-cloud-dancer py-6 rounded-3xl font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 active:scale-95 transition-all"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                Add to Bag — ${(product.price * quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </button> */}

              <button 
                onClick={handleAdd}
                disabled={isAdding}
                className={`w-full py-6 rounded-3xl font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all
                  ${isAdding ? 'bg-green-600 text-white' : 'bg-hemmes-dark text-cloud-dancer hover:opacity-90'}`}
              >
                {isAdding ? (
                  <>Added to Bag</>
                ) : (
                  <>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                    Add to Bag — ${(product.price * quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </>
                )}
              </button>

              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`w-full border py-6 rounded-3xl font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all
                  ${isWishlisted ? 'bg-red-50 border-red-100 text-red-500' : 'border-hemmes-dark/10 hover:bg-white'}`}
              >
                <Heart size={20} strokeWidth={1.5} fill={isWishlisted ? "currentColor" : "none"} />
                {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Luxury Details Accordion */}
            <div className="pt-10 border-t border-black/5">
              <AccordionItem title="Composition & Care" icon={Droplets}>
                <p className="mb-4">
                  Crafted from 100% GOTS certified organic cotton, sourced from premium Italian mills. 
                  This heavyweight 450 GSM fabric ensures a structured silhouette that softens with age.
                </p>
                <ul className="space-y-2 uppercase text-[9px] tracking-widest font-bold opacity-80">
                  <li>• Cold machine wash on delicate</li>
                  <li>• Dry flat in shade</li>
                  <li>• Do not tumble dry</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Shipping & Returns" icon={Truck}>
                <p>
                  Complimentary express delivery on all orders. Each item is shipped in our 
                  signature FSC-certified sustainable packaging. Returns are accepted within 
                  14 days of receipt, provided the security tag remains intact.
                </p>
              </AccordionItem>

              <AccordionItem title="TheHemmes Guarantee" icon={ShieldCheck}>
                <p>
                  Every piece comes with a digital certificate of authenticity. 
                  Our Restoration Service is available for all garments to ensure 
                  your investment lasts a lifetime.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}