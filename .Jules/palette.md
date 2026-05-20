## 2026-05-20 - [Themed Confirmation Dialog Pattern]
**Learning:** Replacing native `window.confirm` with a themed MUI `Dialog` significantly improves visual consistency and allows for better UX features like loading states on destructive actions. Using `CircularProgress` inside a `Button` provides immediate feedback during asynchronous operations.
**Action:** Default to MUI `Dialog` for all confirmation flows in this repository to maintain the professional aesthetic and provide better context (e.g., including the item name in the confirmation message).
