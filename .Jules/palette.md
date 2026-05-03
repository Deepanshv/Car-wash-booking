# Palette Journal

## 2025-05-15 - Consistency with Themed Dialogs
**Learning:** Using native browser `window.confirm` breaks the visual immersion and theme consistency of the application, especially in dark mode. It also lacks support for asynchronous feedback (like loading spinners) within the confirmation action itself.
**Action:** Always prefer MUI `Dialog` components for destructive actions to maintain theme integrity and allow for better interaction feedback during the process.
