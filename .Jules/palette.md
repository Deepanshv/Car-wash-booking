## 2025-05-14 - Loading and Error Feedback in Forms
**Learning:** Providing immediate visual feedback during asynchronous form submissions (disabling buttons, showing spinners, and clear error messages) significantly improves the user's sense of control and prevents duplicate submissions or confusion during failures.
**Action:** Always implement `isSubmitting` and `error` states for forms involving API calls, using `finally` blocks to reset the UI state.
