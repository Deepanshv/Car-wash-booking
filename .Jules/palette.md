## 2026-04-18 - [Consistent Feedback and Accessibility]
**Learning:** Native browser dialogs (`window.confirm`) break the visual flow and lack accessibility features like ARIA labeling. Additionally, providing immediate visual feedback during destructive async operations (e.g., a spinner and "Deleting..." state) reduces user anxiety and prevents duplicate actions.
**Action:** Always replace native dialogs with design-system components (like MUI Dialog) and incorporate loading states into the confirmation buttons to ensure a smooth, accessible experience.
