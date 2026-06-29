## 2026-06-29 - Semantic Progress Navigation
**Learning:** Progress indicators (dots/lines) are often implemented with non-semantic `div`s, which breaks keyboard navigation and screen reader support. Using `<nav>`, `<ol>`, and `<button>` with `aria-current="step"` provides a robust, accessible foundation while maintaining luxury aesthetics.
**Action:** Always implement multi-step flows using semantic navigation containers and interactive button elements for step indicators.
