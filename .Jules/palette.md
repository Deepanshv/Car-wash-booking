## 2025-05-14 - Loading State and Error Feedback in BookingFormPage
**Learning:** Use a `finally` block in asynchronous form handlers to reset `isSubmitting` states, ensuring UI interactive elements are restored regardless of whether the operation succeeded, failed, or redirected. Combining `CircularProgress` within a button's `startIcon` and updating the button label provides a clear, standard MUI loading pattern.
**Action:** Always implement `isSubmitting` and `error` states for forms that perform API calls to prevent duplicate submissions and provide immediate user feedback.
