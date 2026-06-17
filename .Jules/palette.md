## 2025-05-15 - [Accessible Wizard Navigation]
**Learning:** Progress indicators using `div` with `onClick` are inaccessible to keyboard and screen reader users. In a 'quiet luxury' aesthetic where default UI elements are often hidden, semantic HTML is even more critical for base functionality.
**Action:** Always use `<nav>` and `<button>` for progress indicators, ensuring `aria-label`, `aria-current`, and `disabled` states are implemented while stripping default browser styles to maintain the visual theme.

## 2025-05-15 - [Design System Focus States]
**Learning:** The project's `tokens.css` defines a global `:focus-visible` style. Removing focus outlines with `outline-none` on interactive elements like buttons breaks this built-in accessibility feature.
**Action:** Avoid using `outline-none` on buttons or links to preserve the design system's consistent keyboard navigation markers.
