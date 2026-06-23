## 2025-05-14 - Semantic Wizard Navigation
**Learning:** Using semantic HTML (`<nav>`, `<ol>`, `<button>`) for progress indicators significantly improves accessibility and provides free keyboard navigation support.
**Action:** Always prefer semantic elements and ARIA attributes (aria-current, aria-label) over custom `div`-based components for interactive flows.

## 2025-05-14 - Progressive Navigation Logic
**Learning:** Allowing users to backtrack to completed steps while disabling future steps maintain linear integrity without frustrating the user.
**Action:** Implement `disabled` state for future steps and enable `onClick` only for current or past steps in multi-step wizards.
