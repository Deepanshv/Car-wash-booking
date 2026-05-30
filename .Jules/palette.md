## 2024-05-30 - [MUI Dialog for Deletion Confirmation]
**Learning:** Replacing native `window.confirm` with a themed MUI `Dialog` significantly improves the professional feel of the application and allows for better user feedback, such as loading indicators during asynchronous deletions.
**Action:** Always prefer themed Dialogs over native browser alerts/confirms for a consistent UX. Include context (e.g., the name of the item being deleted) and provide visual feedback for async operations.
