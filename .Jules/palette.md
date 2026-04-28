## 2026-04-28 - Replacing native confirm with MUI Dialog
**Learning:** Native `window.confirm` breaks the visual consistency of a themed MUI application and lacks support for accessible loading states. Replacing it with a themed `Dialog` allows for better feedback (e.g., `CircularProgress` on destructive buttons) and improved context (e.g., mentioning the specific item being deleted), which reduces user anxiety during destructive actions.
**Action:** Always prefer themed Dialogs over native alerts/confirms in this repository to maintain UX consistency and accessibility.
