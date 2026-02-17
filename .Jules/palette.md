## 2026-02-17 - Async Form Feedback Pattern
**Learning:** In Material UI v7, providing immediate visual feedback during async operations (like form submissions) is best achieved by combining a `CircularProgress` inside the button, disabling all action buttons, and using the `Alert` component for clear error communication. Also, always ensure icon-only buttons like theme toggles have `aria-label`.
**Action:** Implement a standard `isSubmitting` and `error` state pattern for all forms, and use `replace_with_git_merge_diff` to keep PRs focused and under the 50-line limit.
