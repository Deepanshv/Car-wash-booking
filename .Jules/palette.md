## 2025-05-15 - Async Form Feedback Pattern
**Learning:** Users often experience frustration when submitting forms without clear feedback on the process or errors. In a React/MUI environment, implementing a consistent `isSubmitting` and `error` state provides immediate visual confirmation and prevents accidental multiple submissions.
**Action:** Always include an `isSubmitting` state to disable buttons and show a `CircularProgress`, and use an `Alert` component for actionable error feedback in all data-entry forms.
