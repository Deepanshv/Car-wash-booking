## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2026-07-04 - Add loading states to async form submissions
**Learning:** Providing visual feedback during async operations (like form submissions) via loading spinners and descriptive labels (e.g., "Saving...") improves perceived performance and prevents double-submissions. Disabling secondary actions (like "Cancel") during submission prevents navigation conflicts.
**Action:** Implement `isSubmitting` states for all primary action forms. Update button labels to reflect the current sub-state of the operation and disable interactive elements to lock the UI until the request completes.
