## 2025-05-15 - [Form Submission Feedback]
**Learning:** Asynchronous form submissions without immediate visual feedback (loading states) or error handling (alerts) lead to poor user experience, especially when backend responses are delayed or fail due to connectivity issues. MUI's `Button` component with `startIcon={<CircularProgress />}` and `Collapse` with `Alert` provide a smooth and accessible way to manage this.
**Action:** Always implement `isSubmitting` and `error` states for forms that interact with an API. Use `Collapse` to animate error messages for a more polished feel.

## 2025-05-15 - [Aria Labels for Icon Buttons]
**Learning:** Icon-only buttons (like theme toggles or action icons in cards) are invisible to screen readers if they lack a descriptive `aria-label`.
**Action:** Ensure every `IconButton` or icon-only `Button` has an explicit and descriptive `aria-label`.
