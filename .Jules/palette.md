# Palette's Journal - UX & Accessibility Learnings

## 2026-04-27 - MUI Dialog Dark Mode Consistency
**Learning:** In MUI v7, Dialog components can inherit default elevation overlays (linear gradients) that clash with custom dark mode background colors.
**Action:** Use `PaperProps={{ sx: { backgroundColor: 'background.paper', backgroundImage: 'none' } }}` on Dialogs to ensure visual consistency with the app's theme.
