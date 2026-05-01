// // components/Footer.tsx
// import {  CircleFadingPlus } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-cloud-dancer border-t border-hemmes-dark/5 px-10 py-20 text-hemmes-dark">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
//         {/* Brand Column */}
//         <div className="space-y-6">
//           <h2 className="font-sans text-xl font-black uppercase tracking-[0.2em]">TheHemmes</h2>
//           <p className="text-[10px] uppercase tracking-widest leading-loose opacity-50">
//             Crafting the future of classic fashion. <br /> Based in London, worldwide delivery.
//           </p>
//         </div>

//         {/* Client Services */}
//         <div>
//           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-30">Client Service</h4>
//           <ul className="text-xs space-y-4 uppercase tracking-widest font-medium">
//             <li className="hover:opacity-50 cursor-pointer">Contact Us</li>
//             <li className="hover:opacity-50 cursor-pointer">Shipping & Returns</li>
//             <li className="hover:opacity-50 cursor-pointer">Size Guide</li>
//             <li className="hover:opacity-50 cursor-pointer">FAQs</li>
//           </ul>
//         </div>

//         {/* Legal */}
//         <div>
//           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-30">Legal</h4>
//           <ul className="text-xs space-y-4 uppercase tracking-widest font-medium">
//             <li className="hover:opacity-50 cursor-pointer">Privacy Policy</li>
//             <li className="hover:opacity-50 cursor-pointer">Terms of Service</li>
//             <li className="hover:opacity-50 cursor-pointer">Cookies</li>
//           </ul>
//         </div>

//         {/* Newsletter Signup */}
//         <div className="space-y-6">
//           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">The Archive</h4>
//           <p className="text-xs tracking-wide">Subscribe to receive early access to new drops.</p>
//           <div className="flex border-b border-hemmes-dark/20 pb-2">
//             <input 
//               type="email" 
//               placeholder="EMAIL ADDRESS" 
//               className="bg-transparent w-full text-[10px] tracking-widest outline-none uppercase"
//             />
//             <button className="text-[10px] font-bold uppercase tracking-widest hover:opacity-50">Join</button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-hemmes-dark/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
//         <p className="text-[9px] tracking-[0.4em] uppercase">© 2026 TheHemmes. All Rights Reserved.</p>
//         <div className="flex gap-8">
//           <CircleFadingPlus size={16} strokeWidth={1} />
//           <CircleFadingPlus size={16} strokeWidth={1} />
//           <CircleFadingPlus size={16} strokeWidth={1} />
//         </div>
//       </div>
//     </footer>
//   );
// }











'use client';

import { CircleFadingPlus, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cloud-dancer border-t border-hemmes-dark/5 pt-24 pb-12 px-8 md:px-16 text-hemmes-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: NAVIGATION & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Newsletter / Archive Invite (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">The Archive</h3>
            <p className="text-xl md:text-2xl font-sans font-light tracking-tight max-w-sm">
              Receive early access to seasonal drops and editorial journals.
            </p>
            <form className="relative group max-w-md">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full border-b border-hemmes-dark/20 py-4 text-[10px] tracking-[0.3em] outline-none uppercase focus:border-hemmes-dark transition-colors"
              />
              <button className="absolute right-0 bottom-4 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
                Join +
              </button>
            </form>
          </div>

          {/* Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Nav Links (Span 3) */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">Services</h4>
              <ul className="text-[10px] space-y-4 uppercase tracking-[0.2em] font-medium">
                <li className="hover:opacity-40 cursor-pointer transition-opacity">Contact Us</li>
                <li className="hover:opacity-40 cursor-pointer transition-opacity">Shipping & Returns</li>
                <li className="hover:opacity-40 cursor-pointer transition-opacity">Size Guide</li>
              </ul>
            </div>
          </div>

          {/* Heritage/Location (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">Atelier</h4>
            <p className="text-[10px] leading-loose uppercase tracking-widest opacity-60">
              TheHemmes Studio <br />
              London, W1F 8HT <br />
              United Kingdom
            </p>
            <div className="flex gap-6 pt-4">
              <CircleFadingPlus size={14} strokeWidth={1.5} className="hover:opacity-40 cursor-pointer transition-opacity" />
              <CircleFadingPlus size={14} strokeWidth={1.5} className="hover:opacity-40 cursor-pointer transition-opacity" />
              <CircleFadingPlus size={14} strokeWidth={1.5} className="hover:opacity-40 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION: MASSIVE BRANDING --- */}
        <div className="relative overflow-hidden py-6 select-none pointer-events-none">
          <h2 className="text-[15vw] font-sans font-black uppercase tracking-[-0.05em] leading-none opacity-[0.1] text-center">
            TheHemmes
          </h2>
        </div>

        {/* --- BOTTOM SECTION: LEGAL & TOP --- */}
        <div className="pt-12 border-t border-hemmes-dark/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 text-[9px] tracking-[0.3em] uppercase font-bold opacity-40">
            <span>© 2026 TheHemmes</span>
            <span className="hover:opacity-100 cursor-pointer">Privacy</span>
            <span className="hover:opacity-100 cursor-pointer">Terms</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[9px] tracking-[0.4em] uppercase font-bold"
          >
            <span className="opacity-40 group-hover:opacity-100 transition-opacity">Back to Top</span>
            <div className="p-2 rounded-full border border-hemmes-dark/10 group-hover:bg-hemmes-dark group-hover:text-cloud-dancer transition-all">
              <ArrowUp size={12} strokeWidth={2} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}