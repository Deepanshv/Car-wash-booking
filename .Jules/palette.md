## 2025-05-14 - Initial Observation
**Learning:** The application uses native `window.confirm` for destructive actions, which breaks the Material Design aesthetic and user flow. Replacing this with a themed `Dialog` provides a more integrated experience.
**Action:** Replace `window.confirm` with an MUI `Dialog` component in `BookingCard.tsx` and add a loading state during the deletion process.
