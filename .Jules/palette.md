# Palette Journal

## 2025-05-15 - Replacing Native Dialogs for Design Consistency
**Learning:** Native browser dialogs like `window.confirm` are often preferred for simplicity but break visual continuity and offer poor feedback during asynchronous operations. Custom MUI Dialogs allow for brand-aligned styling and the integration of loading states (e.g., `CircularProgress`) which significantly improve the perceived reliability of destructive actions.
**Action:** Use MUI `Dialog` instead of `window.confirm` for critical user actions. Always pair deletion confirmations with an `isDeleting` state to provide immediate visual feedback.
