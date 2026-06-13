## 2025-05-22 - [Themed Confirmation Dialog]
**Learning:** Native `window.confirm` should be replaced with themed MUI Dialogs to maintain UI consistency. Placing an MUI `Dialog` inside a component using CSS transforms (like hover scaling) can cause stacking context issues where z-indexed children (e.g., status `Chip`s) overlap the dialog content.
**Action:** Move the `Dialog` outside the transformed element (e.g., using a React Fragment) to ensure it renders correctly on top of all elements.
