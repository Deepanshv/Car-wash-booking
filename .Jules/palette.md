## 2025-03-05 - Replacing Native Confirmation with MUI Dialog

**Learning:** Replacing native browser `window.confirm` with custom MUI Dialogs significantly improves UX by maintaining visual consistency with the design system and allowing for better feedback like loading states (CircularProgress) during the deletion process. It also prevents the "blocking" nature of native dialogs which can be jarring for users.

**Action:** Prefer using MUI Dialogs (or equivalent design system components) for confirmation of destructive actions. Always include an `isDeleting` or `isSubmitting` state to disable buttons and show a spinner during asynchronous operations within the dialog.
