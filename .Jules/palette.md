## 2025-06-10 - [Themed Deletion Dialog]
**Learning:** Replacing native browser `window.confirm` with a themed MUI `Dialog` significantly improves UI consistency and professional feel. Adding a loading state within the confirmation dialog prevents duplicate actions and provides clear feedback for asynchronous destructive operations.
**Action:** Use a custom `Dialog` with a `CircularProgress` indicator for all destructive actions to maintain visual harmony and improve user confidence during data removal.
