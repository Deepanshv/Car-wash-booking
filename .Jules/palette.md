# Palette's Journal

## 2026-04-30 - [Consistent Confirmation Dialogs]
**Learning:** The application used native `window.confirm` for destructive actions (deleting bookings), which breaks visual consistency and accessibility in a themed MUI application.
**Action:** Replace native browser dialogs with themed MUI Dialog components. Include loading states (`CircularProgress`) and disable actions during async operations to prevent duplicate requests and improve feedback.

## 2026-04-30 - [Icon-only Button Accessibility]
**Learning:** Icon-only buttons with `aria-label` are accessible to screen readers but lack visual labels for sighted users.
**Action:** Wrap icon-only buttons in MUI `Tooltip` components to provide on-hover visual descriptions while maintaining the clean icon-based UI.
