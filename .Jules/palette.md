## 2025-05-19 - [Asynchronous Confirmation Dialogs]
**Learning:** When replacing native `window.confirm` with themed MUI Dialogs for destructive actions, it's critical to prevent the dialog from being closed (via backdrop click or 'Escape') while the asynchronous operation is in progress. This prevents the UI from entering an inconsistent state where a deletion is happening in the background but the confirmation dialog is gone.
**Action:** Always conditionally disable the `onClose` handler or the `Cancel` button when an `isDeleting` or `isLoading` state is active within a confirmation dialog.
