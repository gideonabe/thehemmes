// 'use client';

// import { motion } from 'framer-motion';
// import Nav from './Nav';
// import BentoDiscovery from './BentoDiscovery';
// import Footer from './Footer';

// export default function Homepage() {
//   // Animation variants for staggered text reveal
//   const fadeUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="relative w-full bg-cloud-dancer"
//     >
//       <Nav />

//       {/* --- HERO SECTION --- */}
//       <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        
//         {/* Background Image with Cinematic Scale */}
//         <motion.div 
//           initial={{ scale: 1.15 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
//           className="absolute inset-0 z-0"
//         >
//           <div 
//             className="h-full w-full bg-[url('/herobg9.jpg')] bg-cover bg-center"
//             style={{ filter: 'brightness(0.9)' }}
//           />
//           {/* Subtle vignette for text readability */}
//           <div className="absolute inset-0 bg-black/20" />
//         </motion.div>

//         {/* --- HERO CONTENT OVERLAY --- */}
//         <div className="relative z-10 text-center px-6 max-w-4xl">
//           <motion.p 
//             variants={fadeUp}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-white/70 text-[10px] md:text-[12px] tracking-[0.5em] uppercase mb-6 font-medium"
//           >
//             Spring / Summer 2026 Collection
//           </motion.p>

//           <motion.h1 
//             variants={fadeUp}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: 0.8, duration: 1 }}
//             className="text-white text-6xl md:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.9] mb-10"
//           >
//             Classic <br /> 
//             <span className="italic font-light">Evolved</span>
//           </motion.h1>

//           <motion.div
//             variants={fadeUp}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: 1.1, duration: 0.8 }}
//             className="flex flex-col md:flex-row items-center justify-center gap-4"
//           >
//             {/* The Apple-style Glassmorphism Button */}
//             <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500 group">
//               Explore Collection
//             </button>
            
//             <button className="px-10 py-4 text-white text-[10px] tracking-[0.2em] uppercase font-bold hover:opacity-50 transition-all">
//               Watch The Film
//             </button>
//           </motion.div>
//         </div>

//         {/* --- SCROLL INDICATOR --- */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
//         >
//           <div className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Scroll</div>
//           {/* <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" /> */}
//         </motion.div>
//       </section>

//       {/* --- BENTO GRID --- */}
//       <BentoDiscovery />

//       {/* --- FOOTER --- */}
//       <Footer />
//     </motion.div>
//   );
// }















'use client';

import { motion } from 'framer-motion';
import Nav from './Nav';
import BentoDiscovery from './BentoDiscovery';
import Footer from './Footer';
import Heritage from './Heritage';
import Lookbook from './Lookbook';
import Newsletter from './Newsletter';

export default function Homepage() {
  return (
    <div className="relative w-full bg-cloud-dancer">
      <Nav />

      {/* --- EDITORIAL HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end p-8 md:p-20">
        
        {/* Cinematic Background */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="h-full w-full bg-[url('/herobg9.jpg')] bg-cover bg-center"
            style={{ filter: 'brightness(0.95)' }}
          />
        </motion.div>

        {/* Vertical Collection Tag (Left Side) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden">
          <motion.p 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-white/30 text-[10px] tracking-[1em] uppercase -rotate-90 origin-left font-black"
          >
            Spring Summer 2026
          </motion.p>
        </div>

        {/* Interactive Hotspot on a Roundneck Tee */}
        <div className="hidden md:flex absolute top-[36%] left-[35%] md:left-[31%] group">
          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="h-4 w-4 rounded-full bg-white/40 backdrop-blur-sm border border-white"
            />
            
            {/* Tooltip Card */}
            <div className="absolute top-0 left-6 md:left-8 w-40 md:w-52 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl opacity-100 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none">
              <p className="text-[9px] text-white/50 uppercase tracking-[0.3em] mb-1 font-bold">New Arrival</p>
              <p className="text-white text-[11px] md:text-xs font-semibold uppercase mb-2 tracking-wide">Essential Cotton Canvas Cap</p>
              <p className="text-white/80 text-xs font-light">$125.00</p>
              
              {/* Subtle "Shop Now" link inside the tooltip */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <span className="text-[8px] text-white uppercase tracking-widest font-bold">View Details +</span>
              </div>
            </div>
          </div>
        </div>


        <div className="hidden md:flex absolute top-[61%] right-[35%] md:right-[35%] group">
          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="h-4 w-4 rounded-full bg-white/40 backdrop-blur-sm border border-white"
            />
            
            {/* Tooltip Card */}
            <div className="absolute top-0 left-6 md:left-8 w-40 md:w-52 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl opacity-100 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none">
              <p className="text-[9px] text-white/50 uppercase tracking-[0.3em] mb-1 font-bold">New Arrival</p>
              <p className="text-white text-[11px] md:text-xs font-semibold uppercase mb-2 tracking-wide">Essential Heavyweight Roundneck</p>
              <p className="text-white/80 text-xs font-light">$160.00</p>
              
              {/* Subtle "Shop Now" link inside the tooltip */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <span className="text-[8px] text-white uppercase tracking-widest font-bold">View Details +</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Content Block */}
        <div className="relative z-10 max-w-2xl">
          <div className="overflow-hidden mb-4">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/80 text-[10px] tracking-[0.4em] uppercase font-bold"
            >
              The New Essentials
            </motion.p>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white text-6xl md:text-8xl font-sans font-black uppercase tracking-tighter leading-[0.85]"
            >
              Quiet <br />
              Confidence
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-8"
          >
            <button className="group relative flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white transition-all group-hover:w-20" />
              <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">
                View Collection
              </span>
            </button>

            <button className="px-8 py-3 bg-white/15 backdrop-blur-sm border-t border-r border-white/20 rounded-full text-white text-[9px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500">
              The Film
            </button>
          </motion.div>
        </div>

        {/* Subtle Bottom-Right Coordinates or Detail */}
        <div className="absolute bottom-10 right-10 hidden md:block text-right">
          <p className="text-white/90 text-[9px] tracking-widest leading-loose uppercase">
            51.5074° N, 0.1278° W <br />
            Designed in London
          </p>
        </div>

      </section>

      <Heritage />
      <BentoDiscovery />
      <Lookbook />
      <Newsletter />
      <Footer />
    </div>
  );
}














// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef, useState } from 'react';
// import Nav from './Nav';
// import BentoDiscovery from './BentoDiscovery';
// import Footer from './Footer';

// export default function Homepage() {
//   const containerRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   // Parallax logic for that "Apple" depth feel
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

//   return (
//     <div ref={containerRef} className="relative w-full bg-cloud-dancer">
//       <Nav />

//       {/* --- THE CINEMATIC EXPERIENCE --- */}
//       <section className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center">
        
//         {/* Layer 1: Background Video/Image with Parallax */}
//         <motion.div 
//           style={{ scale: videoScale }}
//           className="absolute inset-0 z-0"
//         >
//           {/* Replace with your 4k Video Path */}
//           <video 
//             autoPlay 
//             muted 
//             loop 
//             playsInline 
//             className="h-full w-full object-cover brightness-[0.8]"
//           >
//             <source src="/bgvideo1.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-black/10" />
//         </motion.div>

//         {/* Layer 2: Middle-Ground Large Typography */}
//         {/* <motion.div 
//           style={{ y: textY }}
//           className="relative z-10 pointer-events-none select-none"
//         >
//           <h1 className="text-[20vw] font-sans font-black uppercase tracking-tighter text-white/10 leading-none">
//             HEMMES
//           </h1>
//         </motion.div> */}

//         {/* Layer 3: Foreground Content & Hotspots */}
//         <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-20">
          
//           {/* Top Left: Small Narrative */}
//           <div className="max-w-[200px] mt-24">
//             <motion.p 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="text-white/60 text-[9px] tracking-[0.3em] uppercase leading-relaxed font-medium"
//             >
//               An exploration of silhouette and texture. <br />
//               London, 2026.
//             </motion.p>
//           </div>

//           {/* Interactive Hotspot (Example placement on a jacket) */}
//           <div className="absolute top-[40%] right-[45%] md:right-[30%] group">
//             <div className="relative">
//               <motion.div 
//                 animate={{ scale: [1, 1.5, 1] }}
//                 transition={{ repeat: Infinity, duration: 2 }}
//                 className="h-4 w-4 rounded-full bg-white/40 backdrop-blur-sm border border-white"
//               />
//               {/* Tooltip Card */}
//               <div className="absolute top-0 left-5 md:left-8 w-38 md:w-48 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl opacity-100 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
//                 <p className="text-[9px] text-white/50 uppercase tracking-widest mb-1">New Arrival</p>
//                 <p className="text-white text-xs font-bold uppercase mb-2">Suede Bomber Jacket</p>
//                 <p className="text-white/80 text-xs">$420.00</p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Row: Minimalist Controls */}
//           <div className="flex items-end justify-between">
//             <div className="space-y-6">
//               <motion.h2 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-white text-4xl md:text-6xl font-sans font-black uppercase tracking-tighter"
//               >
//                 The Art of <br />
//                 Being <span className="italic font-light">Seen</span>
//               </motion.h2>
              
//               <button className="flex items-center gap-6 group">
//                 <span className="text-white text-[10px] tracking-[0.5em] uppercase font-bold">Explore Collection</span>
//                 <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
//                   <div className="h-1 w-1 bg-current rounded-full" />
//                 </div>
//               </button>
//             </div>

//             <div className="hidden md:block">
//               <p className="text-white/20 text-[9px] tracking-[0.5em] uppercase vertical-text">
//                 Scroll to Reveal
//               </p>
//             </div>
//           </div>
//         </div>

//       </section>

//       {/* --- CONTENT CONTINUATION --- */}
//       <BentoDiscovery />
//       <Footer />
//     </div>
//   );
// }