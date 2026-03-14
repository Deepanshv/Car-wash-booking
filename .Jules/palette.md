## 2025-03-14 - Loading and Error Feedback in Booking Form
**Learning:** Adding explicit feedback (loading spinners, descriptive error alerts) during asynchronous form submissions significantly reduces user uncertainty. Disabling all action buttons during submission prevents accidental double-submissions or navigation away from a pending process.
**Action:** Always implement 'isSubmitting' and 'error' states for async forms. Use MUI 'Collapse' for smooth alert transitions and 'CircularProgress' within button 'startIcon' for consistent loading patterns.
