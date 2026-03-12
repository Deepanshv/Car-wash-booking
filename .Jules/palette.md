## 2025-05-15 - Enhancing Form Submission UX with Loading and Error States

**Learning:** Combining MUI's `CircularProgress` (size 20) in the `startIcon` of a `Button` with a text change (e.g., "Save" to "Saving...") provides clear, accessible feedback for async operations. Wrapping `Alert` in a `Collapse` component prevents layout jumps by providing a smooth transition when error messages appear or are dismissed.

**Action:** Always implement `isSubmitting` and `error` states for forms. Use `try-catch-finally` to ensure buttons are re-enabled and error alerts are accessible. Use `time.sleep()` in Playwright mocks to verify these transient UI states.
