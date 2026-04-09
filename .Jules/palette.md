## 2026-04-09 - Custom Accessible Deletion Dialog
**Learning:** Replacing native `window.confirm` with a custom MUI `Dialog` significantly improves visual consistency and allows for better feedback (loading spinners) during destructive async operations. Using `aria-labelledby` and `aria-describedby` ensures screen reader accessibility, while `PaperProps` overrides prevent unwanted dark mode elevation overlays in MUI v7.
**Action:** Always prefer design-system dialogs for destructive actions to provide a cohesive experience and accessible interactions.
