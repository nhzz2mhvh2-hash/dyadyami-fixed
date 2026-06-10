## 2025-05-14 - [Semantic Progress Indicators]
**Learning:** In luxury, immersive interfaces, designers often prioritize custom aesthetics over standard interactive elements (e.g., using styled divs instead of buttons for progress dots). This breaks keyboard navigation and screen reader support. Using semantic `<button>` elements within a `<nav>` container, even for "dots," ensures the high-end experience remains accessible without sacrificing visual fidelity.
**Action:** Always check if custom-styled "indicators" or "dots" should be semantic buttons.

## 2025-05-14 - [Invisible Cursor Pattern]
**Learning:** A common pitfall in "immersive" designs is setting `cursor: none` globally to prepare for a custom cursor that hasn't been implemented yet. This creates a critical UX barrier where the application becomes unusable for mouse users.
**Action:** Never use `cursor: none` without a functional custom cursor fallback or implementation.
