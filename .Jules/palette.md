## 2026-06-02 - Replacing native confirmation with MUI Dialog
**Learning:** Native `window.confirm` breaks the visual immersion and theme of a modern UI. Replacing it with a themed MUI `Dialog` provides better visual consistency, allows for richer context (like the item name), and enables better UX during async operations (loading states).
**Action:** Always prefer themed Dialogs over native browser alerts for destructive actions, and ensure an asynchronous loading state is handled to prevent double-submissions.
