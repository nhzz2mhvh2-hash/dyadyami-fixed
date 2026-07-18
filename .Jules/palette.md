# Palette's Journal — Critical UX/Accessibility Learnings

## 2026-06-30 - Accessible Progress Indicators in Luxury Wizard Flows
**Learning:** Luxury visual indicators (like minimalist progress dots or rings) often lack semantic structure and visual/non-visual interactive affordances. Converting them to a `<nav>` with `<ol>` and semantic `<button>`s with explicit focus styles (`ring-cyan-luxury focus-visible:ring-offset-4`) ensures screen reader clarity and standard keyboard navigation without compromising the minimalist aesthetic.
**Action:** Always wrap wizard step dots in a `<nav>` container, use native buttons with appropriate `aria-current="step"`, keep interactive focus indicators high-offset, and ensure unvisited future steps are disabled while past steps allow backtracking.
