## 2025-05-14 - [Form Submission Feedback]
**Learning:** Async form submissions without visual feedback lead to user uncertainty and potential duplicate submissions. Implementing an `isSubmitting` state to disable buttons and show a loading indicator (e.g., MUI `CircularProgress`), combined with an `Alert` for error feedback, significantly improves the perceived reliability of the app.
**Action:** Always implement `isSubmitting` and `error` states for asynchronous form submissions in MUI-based projects using `CircularProgress` and `Alert`.
