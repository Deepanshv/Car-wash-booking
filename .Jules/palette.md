## 2025-05-14 - Replace native confirm with MUI Dialog
**Learning:** Replacing browser-native `window.confirm` with a custom MUI `Dialog` provides a more consistent brand experience and allows for better interaction design, such as showing loading states (spinners) and disabling buttons during asynchronous destructive actions.
**Action:** Use a consistent `Dialog` component with `isDeleting` state to manage the loading spinner in the confirm button and prevent the dialog from being closed while the operation is in progress.
