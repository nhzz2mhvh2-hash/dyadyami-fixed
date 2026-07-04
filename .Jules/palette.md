## 2026-06-30 - Semantic Progress Indicators in Luxury UI
**Learning:** Minimalist "dot" progress indicators often sacrifice accessibility for aesthetics. Using non-semantic `div`s prevents keyboard navigation and lacks screen reader context. Semantically valid HTML (`nav` > `ol` > `li` > `button`) can co-exist with high-end visuals without compromise.
**Action:** Always use `<nav aria-label="Progress">` with `<ol>` and `<button>` for multi-step flows. Use `aria-current="step"` for the active item and ensure decorative lines are siblings to the list, not children, to maintain HTML validity.
