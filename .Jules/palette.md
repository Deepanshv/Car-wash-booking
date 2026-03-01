## 2026-03-01 - Loading states in forms
**Learning:** For asynchronous form submissions, it is critical to use an 'isSubmitting' state to disable both primary and secondary (Cancel) buttons to prevent navigation or duplicate submissions during the process.
**Action:** Always wrap async form handlers in a try/finally block to ensure 'isSubmitting' is reset regardless of success or failure.
