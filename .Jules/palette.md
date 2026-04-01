## 2025-05-22 - Replacing native confirmation with custom MUI Dialog

**Learning:** Replaced the browser's native `window.confirm` with a custom Material UI `Dialog` component. This provides a more consistent user experience, better visual feedback (e.g., loading states during asynchronous deletion), and improves accessibility. The use of `isDeleting` state to disable buttons and show a `CircularProgress` spinner prevents multiple requests and informs the user of the ongoing action.

**Action:** Prefer using design system components for critical user confirmations rather than native browser dialogs to maintain UI consistency and provide better feedback.
