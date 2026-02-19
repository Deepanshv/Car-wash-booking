# Palette's Journal

## 2025-05-14 - MUI v7 Grid Layout Transitions
**Learning:** In this project's MUI v7 environment, the standard Grid component has transitioned to the 'Grid2' implementation. Legacy props like 'xs', 'sm', etc., on the Grid container items are ignored or cause layout issues. The 'size' prop must be used (e.g., size={{ xs: 12, sm: 6 }}) to maintain proper responsiveness and alignment.
**Action:** Always verify Grid implementations and prefer the 'size' prop for all new or modified layout components to avoid visual regressions.

## 2025-05-14 - Async Form Feedback Pattern
**Learning:** For asynchronous form submissions in this app, providing both a loading state (spinner in button) and an explicit error feedback (MUI Alert) significantly improves user confidence, especially when API latency or validation errors occur.
**Action:** Implement 'isSubmitting' and 'error' states for all data-entry forms, ensuring buttons are disabled during transit to prevent double-submissions.
