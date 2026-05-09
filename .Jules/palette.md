## 2026-05-09 - [MUI Dialog for Destructive Actions]
**Learning:** Native `window.confirm` dialogs feel disjointed from the application's design system and lack support for custom styling or loading states. Replacing them with themed MUI Dialogs improves visual consistency and allows for better feedback during asynchronous operations (like a delete button showing a spinner while waiting for the API).
**Action:** Always prefer themed Dialog components over native browser alerts/confirms to provide a more polished and accessible user experience, especially for destructive actions.
