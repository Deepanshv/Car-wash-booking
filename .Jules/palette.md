## 2025-05-14 - MUI v7 Dialog Styling for Dark Mode
**Learning:** In this repository's MUI v7 theme, Dialog components can exhibit inconsistent surface colors or unwanted elevation overlays (linear gradients) in dark mode. Using `PaperProps={{ sx: { backgroundColor: 'background.paper', backgroundImage: 'none' } }}` ensures the Dialog matches the intended theme surface color and maintains high contrast.
**Action:** Always apply these `PaperProps` to MUI Dialogs in this project to ensure visual consistency across light and dark modes.
