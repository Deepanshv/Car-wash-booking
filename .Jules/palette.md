## 2026-04-07 - Add loading state to booking form submission
**Learning:** For a better UX during asynchronous operations, it is essential to provide visual feedback and prevent duplicate submissions by disabling buttons and showing a progress indicator. Using a `finally` block to reset the loading state ensures the UI remains interactive regardless of the operation's outcome.
**Action:** Always implement `isSubmitting` states for form submissions and critical async actions. Ensure both primary and secondary (cancel) buttons are disabled during processing.
