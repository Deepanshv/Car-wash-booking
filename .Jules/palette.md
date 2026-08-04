## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-08-04 - Form Submission Feedback & Icon-Only Button Accessibility
**Learning:** In highly interactive applications, async form actions must provide clear visual feedback to prevent concurrent interactions. Disabling secondary actions (like Cancel) alongside the submit action prevents accidental navigation or dual-submission conflicts. Additionally, icon-only toggle buttons (such as a theme switcher) require dynamic `aria-label` and `Tooltip` values to describe the target/upcoming state change for proper screen-reader and visual context.
**Action:** When implementing async forms, disable both the Submit and secondary buttons, update the text to context-aware active gerunds (e.g., 'Saving...', 'Adding...'), show a loading spinner, and add `aria-live="polite"`. For icon-only toggle buttons, dynamically update the `aria-label` and `Tooltip` to describe the exact target state.
