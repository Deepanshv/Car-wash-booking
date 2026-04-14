## 2025-05-15 - [Design-System Confirmation Dialogs]
**Learning:** Replacing native browser 'window.confirm' with design-system (MUI) Dialogs significantly improves UX by providing a consistent visual identity, better accessibility (aria-labelledby/describedby), and the ability to show inline loading states (spinners) during destructive operations.
**Action:** Always prefer custom Dialog components over native ones for critical user actions to ensure theme consistency and clear feedback.
