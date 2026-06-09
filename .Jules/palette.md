## 2025-05-15 - [Themed Confirmation Dialog]
**Learning:** Replacing native browser `window.confirm` with a themed MUI `Dialog` significantly improves the professional feel and brand consistency of the application. Using context-specific information (like the customer's name) in the confirmation message reduces errors.
**Action:** Always prefer themed Dialogs over native alerts for destructive actions.

## 2025-05-15 - [Asynchronous Action Feedback]
**Learning:** Sighted users benefit greatly from immediate visual feedback during long-running asynchronous actions (like deleting). Disabling buttons and showing a `CircularProgress` prevents accidental double-submissions.
**Action:** Implement loading states for all asynchronous user actions.
