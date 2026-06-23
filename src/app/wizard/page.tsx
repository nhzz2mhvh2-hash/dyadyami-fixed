'use client';

import { useWizardStore } from "@/store/useWizardStore";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import WizardStepContent from "@/components/wizard/WizardStepContent";

export default function WizardPage() {
  const { step, setStep, nextStep, prevStep, data } = useWizardStore();

  const steps = [
    { title: "Destination", description: "Where should we take you?" },
    { title: "Timeline", description: "When will you be traveling?" },
    { title: "Party Size", description: "How many guests in your party?" },
    { title: "Residence", description: "Select your private retreat." },
    { title: "Experiences", description: "Curate your itinerary." },
    { title: "Services", description: "Personalize your journey." },
    { title: "Summary", description: "Review your expedition." },
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col text-white">
      <Navbar />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-20">
        <div className="w-full max-w-4xl">
          {/* Progress Indicator */}
          <nav aria-label="Progress" className="mb-12 relative">
            <div className="absolute top-1.5 left-0 w-full h-[1px] bg-white/5 -z-10" />
            <ol className="flex justify-between">
              {steps.map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => i + 1 < step && setStep(i + 1)}
                    disabled={i + 1 >= step}
                    aria-current={step === i + 1 ? "step" : undefined}
                    aria-label={`Step ${i + 1}: ${s.title}`}
                    className={cn(
                      "flex flex-col items-center gap-2 group transition-all outline-none focus-visible:ring-1 focus-visible:ring-cyan-luxury rounded-sm",
                      i + 1 >= step ? "cursor-default" : "cursor-pointer"
                    )}
                  >
                    <div className={cn("w-3 h-3 rounded-full border-2 transition-all duration-500",
                      step > i + 1 ? "bg-cyan-luxury border-cyan-luxury" :
                      step === i + 1 ? "bg-white border-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)]" :
                      "bg-black border-zinc-800 group-hover:border-zinc-700"
                    )} />
                    <span className={cn("text-[8px] uppercase tracking-widest hidden md:block transition-colors",
                      step === i + 1 ? "text-white" : "text-zinc-600",
                      i + 1 < step && "group-hover:text-zinc-400"
                    )}>
                      {s.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="glass-dark p-8 md:p-12 rounded-sm border-white/5 relative overflow-hidden"
            >
              <div className="mb-12">
                <span className="text-cyan-luxury text-[10px] uppercase tracking-[0.4em] mb-2 block font-bold">Step 0{step}</span>
                <h2 className="text-4xl font-serif text-white mb-2">{steps[step-1].title}</h2>
                <p className="text-zinc-500">{steps[step-1].description}</p>
              </div>

              <div className="min-h-[300px]">
                <WizardStepContent />
              </div>

              <div className="mt-12 flex justify-between">
                <Button variant="ghost" onClick={prevStep} disabled={step === 1} className="text-zinc-500 hover:text-white disabled:opacity-0">
                  <ChevronLeft className="mr-2 w-4 h-4" /> Back
                </Button>
                <Button onClick={nextStep} disabled={step === steps.length} className="bg-white text-black hover:bg-cyan-luxury px-12 rounded-none uppercase tracking-widest text-xs h-12 transition-all flex items-center">
                  {step === steps.length ? "Confirm Proposal" : "Continue"} <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
