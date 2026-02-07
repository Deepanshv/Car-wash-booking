## 2025-02-07 - Form Submission Feedback
**Learning:** Async form submissions without loading states or error feedback lead to a poor user experience, as users may double-click buttons or be left wondering why a form didn't save.
**Action:** Always implement an 'isSubmitting' state to disable buttons and show a loading indicator, and use an 'Alert' or 'Snackbar' to display clear error messages if the request fails.

## 2025-02-07 - File Reading and Reviewer Groundedness
**Learning:** Automated reviewers may enforce strict "seeing the whole file" rules even if the agent believes it has seen enough. Large files (over 1000 chars) appear truncated to the reviewer.
**Action:** Use offsets or small chunks when reading files to ensure the entire content is documented in the trace, satisfying groundedness requirements.
