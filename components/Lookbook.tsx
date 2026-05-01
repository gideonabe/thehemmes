// components/Lookbook.tsx
'use client';
import { images } from '@/constant';
import { motion } from 'framer-motion';
import Image from 'next/image';

const looks = [
  { id: 4, img: images.look4, title: 'The Atelier Drape' },
  { id: 1, img: images.look1, title: 'The Urban Uniform' },
  { id: 2, img: images.look2, title: 'Monochrome Suede' },
  { id: 3, img: images.look3, title: 'After Hours' },
];

export default function Lookbook() {
  return (
    <section className="bg-cloud-dancer py-24 overflow-hidden">
      <div className="px-8 mb-12 flex justify-between items-end">
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-40 mb-4">Editorial</p>
          <h2 className="text-4xl font-sans font-black uppercase tracking-tighter">Spring Selection</h2>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 hidden md:block">Drag to explore —&gt;</p>
      </div>
      
      {/* <motion.div 
        drag="x" 
        dragConstraints={{ right: 0, left: -800 }}
        className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
      >
        {looks.map((look) => (
          <div key={look.id} className="min-w-[350px] md:min-w-[450px] group">
            <div className="aspect-[3/4] overflow-hidden rounded-[40px] mb-6">
              <img src={look.img} alt={look.title} className="w-full h-full object-cover transition-all duration-700" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">{look.title}</p>
          </div>
        ))}
      </motion.div> */}
      <div className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory px-8 md:px-[calc((100vw-1280px)/2+32px)] no-scrollbar pb-10">
        {looks.map((look) => (
          <motion.div 
            key={look.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-[85vw] md:min-w-[450px] snap-start group"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-[40px] mb-6 relative">
              <Image 
                src={look.img.src} 
                alt={look.title} 
                fill
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
              />
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em]">{look.title}</p>
              <span className="text-[9px] opacity-30 font-bold uppercase tracking-widest group-hover:opacity-100 transition-opacity">
                Shop Look +
              </span>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer to allow the last item to align correctly */}
        <div className="min-w-[1px] h-full pr-8" />
      </div>
    </section>
  );
}