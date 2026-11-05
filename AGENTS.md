# Team-wide instructions for all AI coding agents

This is a small Vite + React school-portal DEMO using mock data only. It does not have real authentication, payments, or student storage.

1. Read `README.md`, `docs/TEAM_TASKS.md`, and `docs/ARCHITECTURE.md` first.
2. Work only on your assigned feature branch, never on `main`.
3. Your default edit scope is the assigned `src/pages/<Page>.jsx` file. Do not modify `src/App.jsx`, `src/styles.css`, `src/data/mockData.js`, package files, or other pages unless the project owner explicitly authorizes it.
4. Each page is a default-exported React component with no required props; preserve that contract. Import shared mock data read-only from `src/data/mockData.js`.
5. Scope any new CSS locally (e.g., a page-specific CSS file), and avoid changing global selectors. You may create a stylesheet adjacent to your assigned page if needed.
6. Never hardcode real private data, credentials, API secrets, or live payment endpoints.
7. Run `npm run build` before proposing changes when dependencies are installed; report honestly if it wasn't run.
8. Commit only your assigned work and open a pull request. Never merge your own PR without owner approval.
9. Do not delete files or run destructive Git commands.
10. Summarize changed files, verification done, and remaining limitations.
