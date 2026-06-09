'use client';

import { useWizardStore } from "@/store/useWizardStore";
import { motion } from "framer-motion";

export default function WizardStepContent() {
  const { step, data, updateData } = useWizardStore();
  const destinations = [
    { id: 'doha', name: 'Doha', region: 'Middle East' },
    { id: 'amazonia', name: 'Amazonia', region: 'South America' },
    { id: 'antarctica', name: 'Antarctica', region: 'The Poles' },
    { id: 'tokyo', name: 'Tokyo', region: 'East Asia' },
  ];

  return (
    <div className="py-12">
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-group">
          {destinations.map((dest, idx) => (
            <motion.button
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              onClick={() => updateData({ destination: dest.name })}
              className={`glass-card text-left group transition-all ${data.destination === dest.name ? 'glass-card--gold' : 'hover:border-strong'}`}
            >
              <div className="type-overline text-[8px] mb-3 group-hover:text-gold transition-colors tracking-[0.5em]">
                {dest.region}
              </div>
              <div className="type-title text-primary">{dest.name}</div>
            </motion.button>
          ))}
        </div>
      )}
      {step > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="type-lead text-center py-24"
        >
          Curating the finest {step === 2 ? 'timelines' : 'experiences'} for your expedition...
        </motion.div>
      )}
    </div>
  );
}
