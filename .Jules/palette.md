# Palette UX Journal

## 2026-06-30 - Minimalist Header Navigation & Focus States
**Learning:** In minimalist luxury headers, brand text logos can easily be implemented as plain non-interactive spans, impairing keyboard navigation and screen-reader home navigation.
**Action:** Always wrap brand typography in semantic `<a>` tags with `aria-label` and visible focus states (`focus-visible:ring-1 focus-visible:ring-gold`), ensuring core navigation accessibility without altering visual aesthetics.
