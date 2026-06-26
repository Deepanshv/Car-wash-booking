## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2026-06-26 - Add loading state to async form submission
**Learning:** During asynchronous form submissions, users may attempt to resubmit or navigate away if they don't see immediate feedback. Disabling both primary (Submit) and secondary (Cancel) actions while displaying a spinner and updated label ensures the operation completes reliably without user interference.
**Action:** Always implement an `isSubmitting` state for async forms that disables all interactive buttons and provides clear visual progress via a spinner and descriptive text (e.g., "Saving...").
