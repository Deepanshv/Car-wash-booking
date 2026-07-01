## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2026-07-01 - Add loading states to async form submissions
**Learning:** Implementing `isSubmitting` states with context-aware labels (e.g., "Adding..." vs "Saving...") and disabling all action buttons (including "Cancel") during submission prevents duplicate requests and navigation conflicts while providing clear visual feedback.
**Action:** Always wrap async submission logic in `try...finally` to manage loading states and disable all interactive form controls during the request.
