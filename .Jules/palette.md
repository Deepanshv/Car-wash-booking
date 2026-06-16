# Palette Journal

This journal tracks critical UX and accessibility learnings.

## 2025-05-14 - Themed deletion confirmation dialog
**Learning:** Native browser dialogs (`window.confirm`) can be jarring and break the immersion of a carefully designed UI. Replacing them with themed MUI Dialogs provides a more cohesive experience and allows for better contextual information (like the name of the item being deleted).
**Action:** Always prefer themed Dialog components over native `window.confirm` for destructive actions to maintain UI consistency and improve user confidence.
