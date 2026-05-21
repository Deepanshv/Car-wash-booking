## 2026-05-21 - [Themed Deletion Confirmation Dialog]
**Learning:** Replacing native browser `window.confirm` with themed MUI Dialogs significantly improves UI consistency and allows for better user feedback (e.g., loading states, destructive action warnings). Preventing dialog closure during an asynchronous destructive action prevents accidental interruptions.
**Action:** Always prefer MUI Dialog over `window.confirm` for destructive actions, and include contextual information (like the item name) and loading states.
