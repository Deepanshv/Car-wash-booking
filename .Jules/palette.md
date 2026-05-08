## 2026-05-08 - MUI v7 Dialog Styling for Dark Mode
**Learning:** In MUI v7, Dialog components in dark mode can sometimes exhibit inconsistent surface colors or unwanted elevation overlays (linear gradients) if not configured correctly.
**Action:** Use `PaperProps={{ sx: { backgroundColor: 'background.paper', backgroundImage: 'none' } }}` on Dialog components to ensure they match the application's dark mode palette and remain visually consistent with other surface elements.
