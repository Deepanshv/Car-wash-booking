## 2025-05-14 - Loading states and error feedback for forms
**Learning:** Asynchronous form submissions without immediate feedback can lead to user confusion and duplicate submissions. Providing a loading state (e.g., "Saving...") and disabling interactive elements (including secondary buttons like "Cancel") ensures a smoother and more controlled user experience.
**Action:** Always implement `isSubmitting` and `error` states in form components. Use MUI `CircularProgress` within the primary action button and wrap `Alert` in `Collapse` for animated error transitions.
