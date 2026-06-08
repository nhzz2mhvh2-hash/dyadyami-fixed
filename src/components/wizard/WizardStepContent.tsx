'use client';
import { useWizardStore } from "@/store/useWizardStore";
import { motion } from "framer-motion";

export default function WizardStepContent() {
  const { step, data, updateData } = useWizardStore();
  const destinations = ['Doha', 'Amazonia', 'Antarctica', 'Tokyo'];

  return (
    <div className="py-20">
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((dest, idx) => (
            <motion.button
              key={dest}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => updateData({ destination: dest })}
              className={`p-8 border transition-all text-left group ${data.destination === dest ? 'border-cyan-luxury bg-cyan-luxury/5' : 'border-white/5 hover:border-white/20'}`}
            >
              <div className="text-[9px] uppercase tracking-[0.5em] text-zinc-500 mb-3 group-hover:text-cyan-luxury transition-colors">Select Region</div>
              <div className="text-2xl text-white font-serif">{dest}</div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
