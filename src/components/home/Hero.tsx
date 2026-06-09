'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Globe from '@/components/3d/Globe';
import { motion } from 'framer-motion';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-void">
      {/* 3D Globe Background with Cinematic Post-processing */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Globe />
            <EffectComposer disableNormalPass>
              <Bloom
                intensity={1.5}
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                height={300}
              />
              <Noise opacity={0.05} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content — Editorial Layout */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="type-overline mb-6 block text-gold tracking-[0.6em]">
            Bespoke Expeditions
          </span>
          <h1 className="type-hero mb-8">
            The World&apos;s Most <br />
            <span className="type-italic text-gold">Exceptional</span> Journeys
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <motion.a
              href="/wizard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn--primary px-12 py-5"
            >
              Curate Journey
            </motion.a>
            <motion.a
              href="#"
              className="btn btn--secondary px-12 py-5"
            >
              View Residences
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-void via-void/40 to-transparent" />
    </section>
  );
}
