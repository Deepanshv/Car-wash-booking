## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-06-11 - Add loading states to async form submissions
**Learning:** Providing immediate visual feedback (spinner and label change) during form submission improves the perceived responsiveness of the app and informs the user that their action is being processed. Disabling both the "Save" and "Cancel" buttons prevents accidental double-submissions or navigation that could interrupt the request.
**Action:** Always implement an `isSubmitting` state for forms involving API calls. Use MUI `CircularProgress` within the primary button and disable all navigation/action buttons until the request completes or fails.
