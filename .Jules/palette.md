## 2026-06-01 - Replacing Native Dialogs for Better Consistency
**Learning:** Native `window.confirm` is jarring and lacks styling control, leading to a disconnected user experience. Replacing it with a themed MUI `Dialog` allows for consistent branding, inclusion of context (e.g., customer name), and graceful handling of asynchronous states.
**Action:** Always prefer themed MUI `Dialog` components over native browser methods to maintain UI consistency and provide better feedback during destructive operations.
