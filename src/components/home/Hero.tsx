'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Globe from '@/components/3d/Globe';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-cyan-luxury tracking-[0.5em] uppercase text-[10px] mb-6 block font-bold">
            The Art of Rare Travel
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
            Beyond the <br />
            <span className="italic text-cyan-luxury">Ordinary</span>
          </h1>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  );
}
