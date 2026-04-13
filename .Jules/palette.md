# Palette's Journal
## 2025-05-14 - Replace native confirm with MUI Dialog
**Learning:** Native browser dialogs like 'window.confirm' disrupt the user experience by freezing the UI and being non-themeable. Using a design-system-consistent MUI Dialog improves visual harmony and accessibility. For MUI v7 in this app, explicitly setting 'PaperProps' for background color ensures consistency in dark mode.
**Action:** Always prefer custom Dialog components over native window methods for destructive actions to maintain brand consistency and better a11y control.
