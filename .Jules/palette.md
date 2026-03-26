
## 2025-05-15 - Replace native confirm with MUI Dialog
**Learning:** Replacing native 'window.confirm' with a custom MUI Dialog significantly improves visual consistency and accessibility (via ARIA labeling), while providing a more polished user experience.
**Action:** Always prefer design-system-consistent dialogs over native browser alerts for critical user actions. Ensure 'aria-labelledby' and 'aria-describedby' are correctly implemented for accessibility.
