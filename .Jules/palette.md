# Palette's Journal - Car Wash Booking Application

## 2025-05-14 - Replace native confirm with MUI Dialog
**Learning:** Native browser dialogs (like `window.confirm`) are inconsistent with the application's design system, lack support for dark mode, and cannot show loading states during asynchronous operations. Using a themed MUI Dialog improves visual consistency, allows for better accessibility (ARIA attributes), and enables inline feedback (spinners) during destructive actions.
**Action:** Always prefer themed Dialog components over native browser alerts/confirms to provide a seamless and informative user experience.
