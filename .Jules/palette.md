## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-06-12 - Disable secondary actions during form submission
**Learning:** When implementing an `isSubmitting` state for form buttons, it is crucial to disable not only the submit button but also secondary actions like "Cancel" or "Reset". This prevents users from initiating navigation or state resets while an asynchronous operation is in progress, which could lead to inconsistent application states or race conditions.
**Action:** Always disable all interactive elements in a form's action area during the submission lifecycle.
