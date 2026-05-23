## 2026-05-23 - [Themed Deletion Confirmation]
**Learning:** Replacing native `window.confirm` with a themed MUI `Dialog` significantly improves UI consistency and allows for non-blocking asynchronous feedback (like loading spinners) within the confirmation flow.
**Action:** Always prefer themed dialogs over native browser modals for destructive actions to maintain design language and provide better state feedback.
