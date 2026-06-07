## 2025-05-14 - [Enhanced Deletion UX with MUI Dialog]
**Learning:** Using a themed MUI Dialog instead of the native `window.confirm` significantly improves the professional feel and consistency of the application. Including specific context (e.g., the customer's name) in the confirmation message helps prevent accidental deletions.
**Action:** Always prefer MUI Dialog components for destructive actions and include contextual information to confirm the specific entity being affected.

## 2025-05-14 - [Dynamic ARIA Labels for State-based Buttons]
**Learning:** Icon-only buttons that toggle states (like theme switchers) must have dynamic `aria-label` attributes that reflect the *action* the button will perform next, rather than just the current state.
**Action:** Implement dynamic `aria-label` for all state-toggle buttons to ensure clarity for screen reader users.
