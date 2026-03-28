## 2025-05-14 - Replace native confirm with MUI Dialog
**Learning:** Native browser confirmation dialogs (`window.confirm`) lack visual consistency with the application's design system and are difficult to style or brand. Using a custom Material-UI `Dialog` provides a more accessible, consistent, and user-friendly experience, allowing for clearer calls to action and integrated loading states.
**Action:** Replace `window.confirm` with MUI `Dialog` for all destructive actions (like deletion) and ensure proper accessibility with `aria-labelledby` and `aria-describedby` attributes.
