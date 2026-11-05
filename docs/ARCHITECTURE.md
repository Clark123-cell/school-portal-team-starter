# Simple architecture
- `src/App.jsx`: owner-controlled navigation and shell. Do not edit for assigned tasks.
- `src/pages/Dashboard.jsx`: owner-controlled landing/overview.
- `src/pages/Students.jsx`: developer A task.
- `src/pages/Results.jsx`: developer B task.
- `src/pages/Fees.jsx`: developer C task.
- `src/data/mockData.js`: stable read-only mock data contracts.
- `src/styles.css`: shared design and layout, owner-controlled.

## Data contracts
`students`: { id, name, className, status }.
`results`: { id, studentId, subject, score (0-100), term }.
`fees`: { id, studentId, amount (NGN integer), status }.
Helpers: `nameFor(studentId)` and `naira(amount)`.

This is an intentionally frontend-only demo. No real login, database, payment, authorization, or server-side privacy controls. Do NOT use as a real school system.
