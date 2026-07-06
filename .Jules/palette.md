## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-06-11 - Implement loading states for form submissions
**Learning:** Providing immediate visual feedback (spinners, label changes) and disabling interactive elements during asynchronous form submissions prevents duplicate requests and improves perceived performance.
**Action:** Always implement `isSubmitting` states for forms, disabling both "Submit" and "Cancel/Back" buttons to maintain state integrity during the request lifecycle.
