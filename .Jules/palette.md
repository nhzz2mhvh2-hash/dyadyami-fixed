# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-06-27 - Semantic Progress Indicators
**Learning:** Progress indicators (dots/steps) in a wizard should use semantic `<nav>` and `<ol>` structures with `<button>` elements to ensure screen reader compatibility and keyboard navigability.
**Action:** Always use `<nav aria-label="Progress">`, `<ol>`, and `<li>` with `<button aria-current="step">` for multi-step flows.
