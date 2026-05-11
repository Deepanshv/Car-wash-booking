## 2025-05-11 - Integrated Loading States in Confirmation Dialogs
**Learning:** Replacing native browser `window.confirm` with a themed MUI `Dialog` provides a much smoother UX by allowing the integration of asynchronous loading states (e.g., `CircularProgress` within the 'Delete' button). This prevents users from double-clicking and provides immediate, context-aware feedback that the system is processing their request.
**Action:** Always prefer custom Dialog components over native alerts for destructive actions that involve network requests to ensure visual consistency and stateful feedback.
