// components/SplashScreen.tsx
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';

export default function SplashScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image - Reference the style in thehemmes.jpeg */}
      <div 
        className="absolute inset-0 bg-[url('/herobg2.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.85)' }}
      />
      
      <div className="relative z-10 flex h-full flex-col pl-4 md:pl-0 items-start md:items-center justify-end pb-14 md:pb-24 text-white">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-2 md:mb-3 text-center font-serif text-4xl md:text-5xl tracking-tight"
        >
          Discover Your Style
        </motion.h1>
        <p className='text-sm md:text-base mb-2 pr-16 md:w-[25%] md:text-center'>Explore the latest collection, timeless essentials and exclusive pieces.</p>
        {/* Glassmorphism Button */}
        <button 
          onClick={onEnter}
          className="group relative flex items-center gap-2 "
        >
          <ArrowRight size={44} className='border border-white/80 p-1 rounded-full text-white/80'/>
          <span className="relative z-10 font-sans text-sm tracking-widest md:uppercase rounded-full border-t border-l border-white/40 bg-white/5 px-12 py-4 backdrop-blur-sm transition-all hover:bg-white/20">
            Explore Collection
          </span>
        </button>
      </div>
    </motion.div>
  );
}