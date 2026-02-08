## 2025-05-13 - [Async Form Feedback & Accessibility]
**Learning:** For a more professional and accessible experience, all async form submissions should have a visual loading state (like a spinner) and explicit error feedback (like an Alert). Additionally, icon-only buttons like theme toggles MUST have an aria-label to be perceivable by screen readers.
**Action:** Always implement isSubmitting and error states in forms. Always check icon-only buttons for missing labels.
