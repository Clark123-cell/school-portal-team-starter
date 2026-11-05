# Brightfield School Portal — GitHub team practice

A simple **frontend-only** Vite + React portal to practise team branches, AI-agent collaboration, pull requests, and Vercel preview deployments. Uses sample data and does **not** implement real school accounts, private records, or live payments.

## Start locally (Windows PowerShell)
Install Git and Node.js (Node 20.19+ or 22.12+ recommended). Unzip and open a terminal in this folder.

```powershell
npm install
npm run dev
```

Open the local address displayed in the terminal (usually `http://localhost:5173`). To verify a production build:

```powershell
npm run build
```

## First-time repository setup — OWNER
1. Create an **empty** GitHub repository `school-portal-team-demo`, Private if preferred. Do not generate a GitHub README, .gitignore or license during creation.
2. Extract ZIP into a project folder and open PowerShell there.
3. Run:

```powershell
git init
git branch -M main
git add .
git commit -m "chore: add school portal team starter"
git remote add origin https://github.com/YOUR-USERNAME/school-portal-team-demo.git
git push -u origin main
```

4. GitHub repo -> Settings -> Collaborators and teams -> invite Developer A, B and C with appropriate access.
5. Settings -> Rules -> Rulesets: protect `main`, require pull requests and build check. Review enforcement/plan availability. If possible require one approval and no bypass. **When practising with one GitHub account only, some rules cannot be meaningfully enforced.**
6. Import the GitHub repository into Vercel, set Framework Preset to Vite, build command `npm run build`, output directory `dist`, and production branch `main`.
7. Preview deployment settings must not contain production secrets or database credentials (none needed for this demo).

## Each developer (on their own PC)
First accept your GitHub invitation, install Git/Node/VS Code or Cursor or Claude Code, then run:

```powershell
git clone https://github.com/YOUR-USERNAME/school-portal-team-demo.git
cd school-portal-team-demo
npm ci
```

Choose **only your assigned branch**:

```powershell
git switch -c feature/students       # A only
# OR git switch -c feature/results     # B only
# OR git switch -c feature/fees        # C only
```

Open folder in your AI editor, read `AGENTS.md` and `docs/AI_PROMPTS.md`; copy your personal prompt to your AI agent. Test with `npm run dev` and `npm run build`.

Then:

```powershell
git status
git add src/pages/Students.jsx      # Developer A example, plus optional Students.css
git commit -m "feat: add student search and filter"
git push -u origin feature/students
```

Open GitHub -> Pull requests -> New pull request -> base: `main`, compare: `feature/students`. Wait for Actions and Vercel preview. Ask owner for review. Do not merge yourself.

## Owner's PR merge checklist
- [ ] Changed files are limited to the assigned page/optional local CSS.
- [ ] Build check is green.
- [ ] Preview opens and works on mobile and desktop.
- [ ] No unrelated changes, secrets, or real private student data.
- [ ] Review and merge one PR at a time (later PRs should sync with main if necessary).

## AI help
See `docs/AI_PROMPTS.md` for each developer's copy-ready AI instruction.

## Notes
- This ZIP includes no `node_modules` or dependency lockfile. Run `npm install` once as owner to generate `package-lock.json`, then commit/push that lockfile before inviting collaborators. GitHub Actions uses `npm ci`, which requires the lockfile.
- The app is a learning demo, not a production school management system. Add a secure backend and role-based access before using real records.
