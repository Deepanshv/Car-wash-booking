## 2025-05-15 - Replace native delete confirmation with MUI Dialog
**Learning:** Replacing native browser confirmation dialogs with custom MUI Dialogs significantly improves visual consistency and accessibility (through proper ARIA attributes). Adding a loading state during destructive async operations provides crucial user feedback and prevents double-clicks.
**Action:** Always check for native `window.confirm` calls in components handling destructive actions and replace them with the custom MUI Dialog pattern, including appropriate loading states.
