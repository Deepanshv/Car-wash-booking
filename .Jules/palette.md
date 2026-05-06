## 2025-05-14 - Themed Dialogs for Destructive Actions
**Learning:** Native `window.confirm` dialogs are non-customizable, inconsistent with themed applications, and lack support for accessibility features like loading states. Replacing them with themed MUI Dialogs improves visual consistency and allows for better user feedback during destructive asynchronous operations.
**Action:** Always prefer themed Dialog components over native browser alerts/confirms to maintain design system integrity and provide rich interaction feedback (e.g., loading spinners).
