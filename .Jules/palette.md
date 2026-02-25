## 2025-05-14 - Loading states and Dynamic A11y
**Learning:** For async form submissions, use a `finally` block to reset `isSubmitting` state to ensure buttons are re-enabled even if navigation or processing fails after the API call. Also, icon-only theme toggles benefit from dynamic `aria-label` values that reflect the *action* (e.g., "Switch to dark mode") rather than just the current state.
**Action:** Always wrap async form logic in `try-catch-finally` and use ternary operators for `aria-label` on state-dependent icon buttons.
