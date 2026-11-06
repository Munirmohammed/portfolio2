# Projects

Your two projects, registered in the monorepo under `services/site/`.

## hitkeep

- **Repo:** `Munirmohammed/hitkeep`
- **Path in repo:** `services/site/hitkeep/`
- **Stack:** Angular 22 (pnpm, standalone components), `@hitkeep/dashboard` + `@hitkeep/tracker` packages
- **What it is:** A self-hostable, privacy-friendly, Google Analytics alternative (HitKeep).
- **Run:** `cd services/site/hitkeep/frontend/dashboard && npm install && npm run start`

## marketing-dashboard

- **Repo:** `Munirmohammed/marketing-dashboard`
- **Path in repo:** `services/site/marketing-dashboard/`
- **Stack:** Next.js 16 + SQLite
- **What it is:** A local-first marketing operations control center (CRM, outreach, content, analytics, approvals, automations, agent activity).
- **Run:** `cd services/site/marketing-dashboard && npm install && npm run dev`

Both are registered in `services/site/package.json` (`members: ["hitkeep", "marketing-dashboard"]`, workspace pattern `services/*`).
