## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2026-07-16 - Submission loading states in forms
**Learning:** Adding a submission loading state to forms (disabling buttons, showing a spinner, and updating labels to 'Saving...' or 'Adding...') prevents duplicate submissions and provides clear feedback to the user during asynchronous operations.
**Action:** Implement `isSubmitting` state in forms. Disable both submit and cancel buttons. Use `aria-live="polite"` to announce label changes to screen readers.
