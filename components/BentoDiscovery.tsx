// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { products } from '@/data/products';
// import ProductCard from './ProductCard';

// const categories = ["All", "Joggers", "Sweatpants", "Caps", "Roundnecks", "Clothes"];

// export default function BentoDiscovery() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProducts = activeCategory === "All" 
//     ? products 
//     : products.filter(p => p.category === activeCategory);

//   return (
//     <section id="products-section" className="bg-cloud-dancer px-4 md:px-8 py-16 md:py-24">
//       <div className="max-w-7xl mx-auto space-y-12">
        
//         {/* --- CATEGORY PILLS --- */}
//         <div className="flex flex-wrap justify-center gap-3">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border
//                 ${activeCategory === cat 
//                   ? 'bg-hemmes-dark text-cloud-dancer border-hemmes-dark' 
//                   : 'bg-white text-hemmes-dark border-hemmes-dark/5 hover:border-hemmes-dark/20'}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* --- TOP ROW (FEATURE CARDS) --- */}
//         {/* We only show these when "All" is selected to keep the UI clean during filtering */}
//         {activeCategory === "All" && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             <div className="md:col-span-2 h-[400px] md:h-[500px] relative rounded-[40px] overflow-hidden group cursor-pointer">
//               <div className="absolute inset-0 bg-[url('/herobg6.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
//               <div className="absolute bottom-10 left-10 text-white z-10">
//                 <h2 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter mb-4">Discover Your Style</h2>
//               </div>
//             </div>

//             <div className="rounded-[40px] bg-white p-10 flex flex-col justify-between border border-hemmes-dark/5">
//               <p className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-40">Personalized</p>
//               <h3 className="text-3xl font-sans font-black italic uppercase">Find Your<br />Best Fit</h3>
//               {/* <div className="h-px bg-black/5 w-full my-4" /> */}
//               <div className="space-y-3">
//                 {['Sweater', 'Suede Jacket', 'Suede Coat'].map((item) => (
//                  <div key={item} className="p-4 rounded-full border border-hemmes-dark/10 text-[10px] font-bold tracking-widest uppercase text-center hover:bg-hemmes-dark hover:text-white transition-all cursor-pointer">
//                     {item}
//                   </div>
//                 ))}
//               </div>
//               <p className="text-xs uppercase tracking-widest opacity-60 italic">Curated for you.</p>
//             </div>
//           </div>
//         )}

//         {/* --- PRODUCT GRID --- */}
//         <motion.div 
//           layout
//           className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
//         >
//           <AnimatePresence>
//             {filteredProducts.map((product) => (
//               <motion.div
//                 key={product.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <ProductCard product={product} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//       </div>
//     </section>
//   );
// }











'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const categories = ["All", "Joggers", "Sweatpants", "Caps", "Roundnecks", "Clothes"];

export default function BentoDiscovery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products-section" className="bg-cloud-dancer py-16 md:py-24">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-12 px-4 md:px-8">
        
        {/* --- CATEGORY PILLS (Horizontal Scroll on Mobile) --- */}
        <div className="relative">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 no-scrollbar select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border shrink-0
                  ${activeCategory === cat 
                    ? 'bg-hemmes-dark text-cloud-dancer border-hemmes-dark' 
                    : 'bg-white text-hemmes-dark border-hemmes-dark/5 hover:border-hemmes-dark/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- TOP ROW (FEATURE CARDS) --- */}
        {activeCategory === "All" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 h-[400px] md:h-[500px] relative rounded-[40px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url('/herobg6.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-10 left-10 text-white z-10">
                <h2 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter mb-4">Discover Your Style</h2>
              </div>
            </div>

            <div className="rounded-[40px] bg-white p-10 flex flex-col justify-between border border-hemmes-dark/5">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-40">Personalized</p>
                <h3 className="text-3xl font-sans font-black italic uppercase">Find Your<br />Best Fit</h3>
              </div>
              <div className="space-y-3">
                {['Sweater', 'Suede Jacket', 'Suede Coat'].map((item) => (
                  <div key={item} className="p-4 rounded-full border border-hemmes-dark/10 text-[10px] font-bold tracking-widest uppercase text-center hover:bg-hemmes-dark hover:text-white transition-all cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60 italic">Curated for you.</p>
            </div>
          </div>
        )}

        {/* --- PRODUCT GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}