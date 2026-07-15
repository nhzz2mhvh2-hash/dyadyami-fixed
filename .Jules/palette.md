# Palette's UX Journal

Critical UX and accessibility learnings for Project Dyadyami.

## 2026-06-30 - Semantic Progress Indicators in Luxury UI
**Learning:** In "Quiet Luxury" designs where minimalism is key, progress indicators often use decorative lines and dots. Refactoring these for accessibility (using `<nav>` and `<ol>`) can break layouts if decorative elements are children of the list.
**Action:** Keep decorative lines as siblings to the `<ol>` within the `<nav>` and use absolute positioning to maintain the visual "void" aesthetic while providing a robust semantic structure for screen readers.
