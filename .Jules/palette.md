## 2026-06-30 - Accessible Header Navigation in Void/Dark Aesthetic
**Learning:** Minimalist dark/void luxury UI components often strip native outline styles (`outline-none`) or default button types, obscuring keyboard focus states and screen reader landmarks.
**Action:** Always provide explicit `focus-visible:ring-2 focus-visible:ring-cyan-luxury` ring offsets, `cursor-pointer`, `type="button"`, and semantic ARIA navigation labels (`aria-label="Main navigation"`, `aria-label="Toggle navigation menu"`) on header components.
