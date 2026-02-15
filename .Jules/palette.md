## 2025-02-15 - Async Form Feedback
**Learning:** Forms in this application lacked feedback for asynchronous operations, which can lead to double submissions or user confusion. Adding an 'isSubmitting' state to disable buttons and show a loading spinner (CircularProgress) is a high-impact micro-UX improvement.
**Action:** Always implement loading and error states for form submissions using Material UI's CircularProgress and Alert components.

## 2025-02-15 - MUI Grid v2 Migration
**Learning:** The application is using Material UI v6/v7, where the 'Grid' component (Grid v2) has removed direct 'xs', 'sm', etc. props in favor of a 'size' object prop (e.g., size={{ xs: 12, sm: 6 }}). While the legacy props might still work with warnings, using 'size' is the correct approach for this version.
**Action:** Use 'size' prop on Grid components to avoid console warnings and ensure future compatibility.
