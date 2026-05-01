// components/ProductCard.tsx
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '@/context/StoreContext';

export default function ProductCard({ product }: { product: any }) {
  const { toggleWishlist, wishlist } = useStore();

  const isWishlisted = wishlist.includes(product.id);

  return (
    <Link href={`/product/${product.id}`}>
      <motion.div className="relative group ...">
        <div className="relative group rounded-[20px] md:rounded-[40px] overflow-hidden bg-white aspect-[4/5] cursor-pointer">
          {/* Product Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${product.image.src})` }}
          />

          {/* Top Actions (Wishlist) */}
          {/* <button className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
            <Heart size={18} strokeWidth={1.5} />
          </button> */}

          {/* Wishlist Toggle Button */}
          <button 
            onClick={(e) => {
              e.preventDefault(); // Prevent navigating to details
              toggleWishlist(product.id);
            }}
            className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-md transition-all active:scale-90
              ${isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white/20 text-white hover:bg-white hover:text-black'}`}
          >
            <Heart size={18} strokeWidth={1.5} fill={isWishlisted ? "currentColor" : "none"} />
          </button>

          {/* Bottom Content Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3 md:p-8">
            <div className="flex justify-between items-end">
              <div className="text-white">
                <p className="text-[9px] md:text-[10px] tracking-widest uppercase opacity-70 mb-1">{product.category}</p>
                <h3 className="font-sans font-semibold text-xs md:text-lg leading-tighter md:leading-tight">{product.name}</h3>
                <p className="font-sans font-light mt-1 text-xs md:text-base">${product.price}</p>
              </div>

              {/* Add to Cart Action */}
              <button className="p-3 md:p-4 rounded-2xl bg-white text-black hover:bg-cloud-dancer transition-transform active:scale-90 shadow-xl">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Desktop Only: Quick View Overlay on Hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
            <span className="px-6 py-2 bg-white rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-black translate-y-4 group-hover:translate-y-0 transition-transform">
              Quick View
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}