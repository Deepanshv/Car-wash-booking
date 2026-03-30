## 2025-05-14 - [Enhanced Delete Confirmation Dialog]
**Learning:** Replacing native `window.confirm` with a custom MUI `Dialog` not only improves visual consistency but also provides an opportunity to handle asynchronous loading states (e.g., disabling buttons and showing a spinner) within the confirmation flow itself.
**Action:** Always include an `isSubmitting` or `isDeleting` state when implementing custom confirmation dialogs for destructive actions to prevent multiple clicks and provide visual feedback during the API call.
