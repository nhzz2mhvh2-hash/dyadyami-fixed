# Palette UX Journal

## 2026-06-30 - Custom Progress Indicators in Luxury Aesthetics
**Learning:** In highly customized, quiet-luxury booking interfaces, horizontal progress dots are often built using generic container `div`s with custom background shapes and colors, making them completely inaccessible to keyboard navigation and screen readers. While restoring standard browser outlines conflicts with the minimalist void aesthetic, omitting focus rings entirely breaks basic WCAG compliance.
**Action:** Always wrap progress dots in a semantic `<nav>` and `<ol>` / `<li>` structure. Use explicit, descriptive `<button type="button">` elements with explicit `aria-label` and `aria-current="step"`. Disable future unvisited steps but allow backward navigation. Apply custom focus ring markers matching the design system (e.g., using `group` and `group-focus-visible`) to maintain elegant visual affordance without breaking the editorial layout.
