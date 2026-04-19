# Palette's Journal - UX & Accessibility Learnings

## 2025-05-14 - Standardizing Confirmation Dialogs
**Learning:** Native browser dialogs (`window.confirm`) break the visual flow and accessibility of a themed MUI application. Using a custom MUI `Dialog` allows for better branding, accessibility (aria-labelledby), and inclusion of context-rich information (e.g., specific item names).
**Action:** Replace `window.confirm` with a custom MUI `Dialog` for all destructive actions.
