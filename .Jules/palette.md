## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-06-12 - Implement loading states for form submissions
**Learning:** Providing immediate visual feedback during form submission (e.g., "Saving..." or "Adding...") and disabling both primary and secondary actions (like 'Cancel') prevents double-submissions and navigation conflicts during the request lifecycle.
**Action:** Use an `isSubmitting` state to toggle button labels/icons and disable all interactive elements in the form's action area. Add `aria-live="polite"` to the button container to ensure state transitions are announced to screen readers.
