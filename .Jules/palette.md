## 2025-03-17 - Custom MUI Dialog for Deletion
**Learning:** Replacing native `window.confirm` with a custom MUI `Dialog` provides a more consistent design language and allows for richer feedback, such as loading states (spinners) and specific context (mentioning the item name), which reduces user anxiety during destructive actions.
**Action:** Always prefer design-system-consistent confirmation dialogs over native browser alerts for critical actions, and include item-specific details in the confirmation message.
