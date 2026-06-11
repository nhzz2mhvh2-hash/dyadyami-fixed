## 2025-05-14 - Accessible Wizard Navigation
**Learning:** Progress indicators in multi-step wizards are often implemented as passive visual elements. Converting them to semantic `<nav>` and `<button>` elements with `aria-current="step"` significantly improves accessibility for keyboard and screen reader users without altering the design.
**Action:** Always use semantic buttons for interactive progress steps and ensure they have descriptive `aria-label`s. In minimalist designs, explicitly restore `cursor: pointer` when overriding default button styles to maintain visual affordance.
