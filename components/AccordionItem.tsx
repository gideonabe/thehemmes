'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  icon: LucideIcon;
}

export default function AccordionItem({ title, children, icon: Icon }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-hemmes-dark/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between group text-left"
      >
        <div className="flex items-center gap-4">
          {/* Thin stroke for a luxury feel */}
          <Icon size={16} strokeWidth={1.2} className="opacity-40" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-hemmes-dark">
            {title}
          </span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown size={16} strokeWidth={1.2} className="opacity-30 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 text-[11px] md:text-xs leading-loose text-hemmes-dark/60 font-sans tracking-wide">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}