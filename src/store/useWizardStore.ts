import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WizardData {
  destination?: string;
  startDate?: string;
  endDate?: string;
  guests: number;
  hotelId?: string;
  experienceIds: string[];
}

interface WizardState {
  step: number;
  data: WizardData;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: Partial<WizardData>) => void;
  reset: () => void;
}

export const useWizardStore = create<WizardState>()(
  persist(
    (set) => ({
      step: 1,
      data: { guests: 1, experienceIds: [] },
      setStep: (step) => set({ step }),
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      prevStep: () => set((state) => ({ step: state.step - 1 })),
      updateData: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
      reset: () => set({ step: 1, data: { guests: 1, experienceIds: [] } }),
    }),
    { name: 'dyadyami-wizard-storage' }
  )
);
