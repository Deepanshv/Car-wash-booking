## 2026-05-25 - [MUI Dialog Stacking Context]
**Learning:** Placing an MUI `Dialog` inside a component that uses CSS `transform` (like a `Card` with hover scale effects) can cause background elements with their own stacking contexts (like absolute or relatively positioned children) to appear on top of the dialog.
**Action:** Always place the `Dialog` outside of the element that has `transform` applied, typically by wrapping the component's return value in a React Fragment (`<>...</>`) and putting the `Dialog` alongside the transformed element.
