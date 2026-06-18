## 2025-06-11 - Replace window.confirm with themed MUI Dialog
**Learning:** Replacing native browser dialogs with themed components (MUI Dialog) significantly improves UI consistency and allows for better user context (e.g., including the customer's name) and asynchronous feedback (loading states).
**Action:** Always prefer themed Dialogs over `window.confirm` for destructive actions. Include specific context about the entity being affected and show clear loading states during asynchronous operations.

**Learning:** When using MUI Dialog inside a component that has a CSS transform (like `scale` on hover), the Dialog might be affected by the stacking context or transform of its parent.
**Action:** Use a React Fragment to place the `Dialog` outside the transformed element to ensure it renders correctly as a top-level overlay.

## 2025-06-12 - Loading states for form submissions
**Learning:** When implementing async form submissions, using an `isSubmitting` state to disable buttons and display an MUI `CircularProgress` (spinner) provides essential user feedback and prevents double-submissions.
**Action:** Always include a loading state for form submissions. Ensure all relevant buttons (Save, Cancel) are disabled during the request.

## 2025-06-12 - Repository Hygiene
**Learning:** Including binary screenshots or ad-hoc verification scripts in a PR violates repository hygiene and bloats the git history.
**Action:** Always delete screenshots, temporary scripts, and generated lockfiles before submitting a Pull Request.
