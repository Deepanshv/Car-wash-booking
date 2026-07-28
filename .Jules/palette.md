## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-07-28 - Explicit ARIA Labels on Toggle Tooltips
**Learning:** When using tooltips (like MUI `Tooltip`) on dynamic icon-only buttons (such as a light/dark theme switch), the button must explicitly update its `aria-label` to match the exact visual text in the tooltip during state changes. This ensures screen readers announce the correct expected state action.
**Action:** When wrapping icon-only buttons with a `Tooltip`, always ensure the inner button dynamically sets its `aria-label` matching the current tooltip's text representation.
