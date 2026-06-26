## 2025-05-14 - Refactoring Wizard Progress for Accessibility
**Learning:** Purely visual progress indicators (dots/lines) created with non-semantic `div`s are invisible to screen readers and inaccessible to keyboard users. Using `<nav>`, `<ol>`, and `<button>` with `aria-current` and `aria-label` provides a robust, accessible foundation while maintaining the minimalist "luxury" aesthetic.
**Action:** Always use semantic HTML and ARIA attributes for interactive navigation elements, even when they appear as simple decorative dots.
