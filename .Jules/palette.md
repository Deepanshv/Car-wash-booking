## 2025-05-14 - [Enhanced Form Feedback]
**Learning:** In this application, form submissions lacked visual feedback and error handling, which could lead to duplicate submissions and user confusion. Using CircularProgress in the submit button's startIcon and disabling interaction during submission is a clean, effective pattern for this MUI-based system.
**Action:** Always implement isSubmitting state and provide explicit error alerts (using MUI Alert) for all async form operations to ensure a responsive and accessible user experience.
