## 2025-05-14 - [Async Form Feedback Pattern]
**Learning:** For asynchronous form submissions in MUI, using `CircularProgress` inside a button's `startIcon` while disabling both the primary and secondary (Cancel) buttons provides the clearest feedback and prevents unintended navigation during processing.
**Action:** Always implement `isSubmitting` and `error` states for forms, ensuring all interactive elements are disabled during the transit state and user-friendly error messages are displayed via `Alert` components.
