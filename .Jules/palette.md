## 2025-05-14 - [Themed Deletion Confirmation Dialog]
**Learning:** Replacing native browser 'window.confirm' with a themed MUI 'Dialog' significantly improves UI consistency. When combined with an asynchronous delete operation, adding a 'CircularProgress' loading indicator and disabling actions during the request provides critical feedback and prevents duplicate submissions.
**Action:** Always prefer themed dialogs for destructive actions and include loading states for async operations. Consolidate MUI imports to stay within strict line-count limits.
