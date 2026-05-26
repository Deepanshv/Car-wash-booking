## 2026-05-26 - [MUI Dialog Stacking Context]
**Learning:** Placing an MUI Dialog inside a component that uses CSS transforms (like hover scaling) can cause stacking context issues where z-indexed elements from the parent (like status Chips) overlap the dialog.
**Action:** Move the Dialog outside the transformed element using a React Fragment to ensure it renders correctly in the global stacking context.
