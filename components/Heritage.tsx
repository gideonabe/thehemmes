import { images } from "@/constant";
import Image from "next/image";

// components/Heritage.tsx
export default function Heritage() {
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-40">The Craft</p>
          <h2 className="text-4xl md:text-6xl font-sans font-black uppercase tracking-tighter leading-tight">
            Designed in London. <br /> Crafted for <span className="italic font-light">Eternity.</span>
          </h2>
          <p className="text-sm leading-relaxed text-hemmes-dark/70 max-w-md">
            Every piece in The Archive is a result of meticulous development in our London atelier. We source our heavyweight organic cotton and premium suedes from heritage mills that share our commitment to tactile excellence and circular luxury.
          </p>
          <button className="text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-2 hover:border-black transition-all">
            Explore our manifesto
          </button>
        </div>
        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
           <Image
             src={images.fabric1.src} 
             fill
             alt="Fabric detail" 
             className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110" 
           />
        </div>
      </div>
    </section>
  );
}