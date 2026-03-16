## 2025-05-15 - Dynamic ARIA labels for theme toggles
**Learning:** For state-dependent toggles like theme switchers, use dynamic `aria-label` values that describe the *target* state (the action to be performed) rather than the current state, ensuring both accessibility and visual clarity through tooltips.
**Action:** Always check icon-only buttons for missing `aria-label` and `Tooltip` components, especially when their function changes based on application state.
