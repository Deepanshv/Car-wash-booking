## 2025-05-15 - Async Form Feedback Pattern
**Learning:** In a full-stack application, async form submissions without visual feedback lead to a poor user experience. Users may click multiple times if they don't see a loading indicator, and silent failures in the console are invisible to the end-user.
**Action:** Always implement an `isSubmitting` state to disable buttons and show a `CircularProgress` indicator. Use the MUI `Alert` component to provide explicit, actionable error feedback when API requests fail.
