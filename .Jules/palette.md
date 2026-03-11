## 2025-05-15 - Improving destructive actions with custom Dialogs
**Learning:** Replacing native browser `window.confirm` with custom design-system Dialogs (like MUI Dialog) significantly improves visual consistency and allows for integrated loading feedback (spinners) and error handling that isn't possible with native alerts.
**Action:** Always prefer custom Dialogs for critical user confirmations, ensuring they include `isSubmitting` states and error feedback via `Alert` components.
