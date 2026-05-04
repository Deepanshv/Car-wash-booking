# Palette's Journal

## 2025-05-15 - Material UI Consistency
**Learning:** Using native `window.confirm` in a Material UI application creates a jarring user experience as it doesn't match the application's theme and lacks support for asynchronous loading states.
**Action:** Always prefer themed MUI `Dialog` components for destructive actions to maintain visual consistency and provide better feedback (e.g., loading spinners) during async operations.
