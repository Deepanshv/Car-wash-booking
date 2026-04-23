# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Replace native delete confirmation with MUI Dialog
**Learning:** Native `window.confirm` dialogs are inconsistent with modern UI themes and lack support for rich content or loading states. Replacing them with MUI Dialogs allows for better branding, clearer context (e.g., including the item name), and improved feedback during asynchronous deletions.
**Action:** Always prefer themed Dialog components over native alerts/confirms to provide a cohesive and accessible user experience.
