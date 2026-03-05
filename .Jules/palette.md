## 2025-05-14 - Replace native confirmation with MUI Dialog
**Learning:** Using `window.confirm` breaks the visual consistency of the application and is less accessible than custom-styled dialogs. MUI's `Dialog` component provides a standard way to implement accessible confirmation flows while maintaining the app's look and feel.
**Action:** Always prefer design-system-compliant dialogs over native browser alerts/confirms for critical user actions.
