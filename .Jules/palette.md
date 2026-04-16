# Palette's Journal - Car Wash Co.

This journal tracks critical UX and accessibility learnings discovered during the development of the Car Wash Co. application.

## 2025-05-14 - MUI Dialog for Deletion Confirmation
**Learning:** Replacing native browser `window.confirm` with a themed MUI Dialog improves visual consistency and allows for more accessible labels (`aria-labelledby`, `aria-describedby`). Including contextual info like the item name in the prompt reduces user errors.
**Action:** Always prefer design-system dialogs over native ones for destructive actions to maintain brand identity and accessibility standards.
