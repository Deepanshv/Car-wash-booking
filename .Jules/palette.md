## 2025-05-14 - Replace native confirm with MUI Dialog
**Learning:** Native browser dialogs (like `window.confirm`) break the application's visual theme and offer no support for custom interaction patterns like loading states. Replacing them with themed MUI Dialogs provides a more cohesive user experience and allows for inline feedback (e.g., a loading spinner) during asynchronous operations.
**Action:** Always prefer themed components over native browser dialogs to maintain visual consistency and improve accessibility.
