// components/MegaMenu.tsx
import { motion } from 'framer-motion';

export default function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 w-full bg-cloud-dancer/95 backdrop-blur-xl border-b border-hemmes-dark/5 p-12 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
        {/* Category Columns */}
        <div>
          <h3 className="text-[10px] tracking-widest uppercase font-bold mb-6 text-hemmes-dark/40">Collections</h3>
          <ul className="space-y-4 font-serif text-lg">
            <li className="hover:italic cursor-pointer transition-all">Winter Archive 2026</li>
            <li className="hover:italic cursor-pointer transition-all">New Arrivals</li>
            <li className="hover:italic cursor-pointer transition-all">The Essentials</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-[10px] tracking-widest uppercase font-bold mb-6 text-hemmes-dark/40">Categories</h3>
          <ul className="space-y-4 font-sans text-sm tracking-wide">
            <li className="hover:opacity-50 cursor-pointer">Joggers</li>
            <li className="hover:opacity-50 cursor-pointer">Sweatpants</li>
            <li className="hover:opacity-50 cursor-pointer">Caps</li>
            <li className="hover:opacity-50 cursor-pointer">Roundnecks</li>
            <li className="hover:opacity-50 cursor-pointer">Clothes</li>
          </ul>
        </div>

        {/* Featured Editorial Card (The Apple Look) */}
        <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/herobg8.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[10px] tracking-widest uppercase mb-2">Editor's Pick</p>
            <h4 className="text-2xl font-serif">The Suede Collection</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}