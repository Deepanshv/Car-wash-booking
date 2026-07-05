## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-05-15 - Add loading state to form submission
**Learning:** Adding an `isSubmitting` state to form buttons with `CircularProgress` and `aria-live="polite"` prevents double-submissions and provides critical feedback for both sighted and screen-reader users during asynchronous operations.
**Action:** Implement `isSubmitting` with `try...finally` for all async form actions, disabling both primary and secondary actions (like 'Cancel') to prevent navigation conflicts during the request lifecycle.
