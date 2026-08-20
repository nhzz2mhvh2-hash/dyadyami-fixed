'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center"
    >
      <div className="type-display text-2xl tracking-tighter text-primary">DYADYAMI</div>

      <div className="hidden md:flex gap-12">
        {['Destinations', 'Experiences', 'Private Sales'].map((item) => (
          <a key={item} href="#" className="type-label text-[9px] text-secondary hover:text-gold transition-all tracking-[0.4em]">
            {item}
          </a>
        ))}
      </div>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-sm"
      >
        <div className="w-6 h-[1px] bg-primary group-hover:bg-gold transition-colors" />
        <div className="w-6 h-[1px] bg-primary group-hover:bg-gold transition-colors" />
      </button>
    </motion.nav>
  );
}
