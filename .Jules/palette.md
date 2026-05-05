# Palette's Journal - Micro-UX & Accessibility

## 2025-05-14 - Themed Confirmation Dialogs
**Learning:** Native browser dialogs (`window.confirm`) break the visual consistency of MUI-based applications and do not support custom feedback like loading states or specific styling (e.g., dark mode support).
**Action:** Always replace native confirmation dialogs with themed MUI `Dialog` components to provide a more integrated experience and enable asynchronous feedback (loading spinners).
