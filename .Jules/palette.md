## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-06-12 - Loading state for form submissions
**Learning:** Adding a loading state (`isSubmitting`) to form submissions with an inline spinner (`CircularProgress`) and disabling all action buttons (including "Cancel") prevents duplicate submissions and provides clear feedback for asynchronous operations.
**Action:** Always implement an `isSubmitting` state for forms. Disable both the submit and cancel/secondary buttons during the submission process to maintain a consistent UI state and prevent navigation interruptions.
