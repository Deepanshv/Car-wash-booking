## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2026-07-03 - Implementation of Loading States in Forms
**Learning:** Adding `isSubmitting` states to forms with visual feedback (spinners, text changes) and disabling interactive elements prevents double-submissions and improves perceived performance. Using `aria-live="polite"` ensures these transitions are accessible.
**Action:** For all async form submissions, implement a loading state that disables both submit and secondary (cancel) buttons, and provides clear visual and screen-reader feedback.
