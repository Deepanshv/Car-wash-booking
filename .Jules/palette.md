## 2025-05-22 - MUI Dialog Contrast in Dark Mode
**Learning:** In this project's MUI v7 theme, Dialog components can suffer from extremely low contrast or incorrect surface colors in dark mode because of the default elevation linear-gradient overlay on the Paper component.
**Action:** Use `PaperProps={{ sx: { backgroundColor: 'background.paper', backgroundImage: 'none' } }}` on MUI Dialogs to ensure the background correctly matches the theme's intended surface color and allows the text to be legible.
