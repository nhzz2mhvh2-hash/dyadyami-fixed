'use client';
import { useWizardStore } from "@/store/useWizardStore";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import WizardStepContent from "@/components/wizard/WizardStepContent";

export default function WizardPage() {
  const { step } = useWizardStore();
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 px-10 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
            <WizardStepContent />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
