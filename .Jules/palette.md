## 2025-05-14 - Loading and Error Feedback Pattern
**Learning:** For asynchronous form submissions in MUI, combining a loading spinner inside the submit button with an animated error Alert (using Collapse) provides excellent, non-intrusive feedback. Disabling secondary buttons (like Cancel) during submission prevents accidental navigation while a request is in flight.
**Action:** Implement 'isSubmitting' and 'error' states for all critical forms. Use 'CircularProgress' in 'startIcon' and 'Collapse' + 'Alert' for errors.
