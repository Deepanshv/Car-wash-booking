## 2025-05-15 - Improving Form Submission UX and API Error Feedback
**Learning:** Providing immediate visual feedback during asynchronous operations (loading states) and clear, dismissible error messages (using MUI's Alert and Collapse) significantly enhances the user's sense of control and reduces frustration during form interactions.
**Action:** Always implement `isSubmitting` states to disable form controls and show spinners during API calls, and use `Collapse` wrapped `Alert` components for graceful error presentation.
