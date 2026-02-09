## 2025-02-09 - Loading and Error Feedback in Forms
**Learning:** Async form submissions without visual feedback lead to a poor user experience, potentially causing multiple submissions or user confusion when errors occur silently in the console. Using MUI's `CircularProgress` on buttons and `Alert` for errors provides clear, accessible state transitions.
**Action:** Always implement `isSubmitting` and `error` states for forms involving API calls, ensuring buttons are disabled during transit.

## 2025-02-09 - Accessibility for Icon-Only Buttons
**Learning:** Icon-only buttons (like theme toggles) are invisible to screen readers if they lack descriptive `aria-label` attributes.
**Action:** Always provide dynamic `aria-label` attributes for icon-only buttons that reflect their current or future state.
