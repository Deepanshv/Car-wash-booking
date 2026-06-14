## 2025-06-14 - [MUI Dialog for Destructive Actions]
**Learning:** Replacing native `window.confirm` with a themed MUI `Dialog` improves UI consistency and accessibility. When a component has a CSS transform (like hover scaling), placing a `Dialog` inside it can cause stacking context issues.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element (like the `Card`) to ensure it renders correctly on top of all other UI elements.
