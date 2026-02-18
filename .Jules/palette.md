## 2025-05-14 - [MUI Grid v2 in MUI v7]
**Learning:** In projects using MUI v7, the `Grid` component follows Grid v2 patterns where the `size` prop is used for layout instead of the legacy `item`, `xs`, `sm` props. Reverting to legacy props can be a regression.
**Action:** Always verify the MUI version in `package.json` and use the corresponding `Grid` API. In MUI v6+, prefer `size`.

## 2025-05-14 - [Micro-UX PR Constraints]
**Learning:** Strict line-count constraints (e.g., < 50 lines) for micro-UX improvements mean that environmental artifacts like `pnpm-lock.yaml` should be excluded from the commit if they are large, and focus should remain on a single high-impact change.
**Action:** Delete temporary lockfiles generated during verification and consolidate multiple small improvements into the most impactful one to stay within the "ONE improvement" and line-count boundaries.
