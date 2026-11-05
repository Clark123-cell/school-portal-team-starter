# Team assignments (three collaborators + owner)

## Owner — integration and release manager
- GitHub repository/settings, invite developers, configure main branch protection, connect Vercel.
- Own `src/App.jsx`, `src/pages/Dashboard.jsx`, `src/styles.css`, and `src/data/mockData.js`.
- Review every pull request, check every preview link, merge one PR at a time.
- Do not share production credentials with collaborators.

## Developer A — student records
Branch: `feature/students`
Default file: `src/pages/Students.jsx`.
Deliver: accessible text search by name or ID, class dropdown filter, student count that updates, clean empty state. Keep mobile layout usable and preserve `export default function Students()`.

## Developer B — results
Branch: `feature/results`
Default file: `src/pages/Results.jsx`.
Deliver: automatic letter grade from score (A: 70-100, B: 60-69, C: 50-59, D: 45-49, E: 40-44, F: below 40), filter results by student, show average of visible scores to one decimal place, clear empty state. Do not change mock data.

## Developer C — school fees
Branch: `feature/fees`
Default file: `src/pages/Fees.jsx`.
Deliver: filter Paid/Pending/All, show amounts paid and pending, show count of matching records, use `naira()`, and show an empty state. This is a demo; do not add real payments.

## Acceptance conditions for every developer
- Change only assigned page and optional page-specific CSS.
- Build succeeds with `npm run build`.
- PR contains screenshot and describes changes.
- Preview is visually inspected on desktop and mobile.
- Owner approves before merge.
