# Registered projects

These are your two projects. Both live under `services/site/`, registered as
members of the monorepo alongside the Kent C. Dodds site (`services/site/`),
and both are listed in the portfolio project list below so they appear as real
projects of the site, not as third-party/external repositories.

## Projects

1. **HitKeep (Angular)** — `Munirmohammed/hitkeep`. Angular 22 dashboard +
   cookieless analytics tracker (`@hitkeep/dashboard` + `@hitkeep/tracker`).
   - Path: `services/site/hitkeep/`
   - Runs with: `cd services/site/hitkeep/frontend/dashboard && npm run start`
2. **Marketing Dashboard (Next.js 16)** — `Munirmohammed/marketing-dashboard`.
   - A local-first marketing operations control center (CRM, outreach, content,
     analytics, approvals, automations, agent activity).
   - Path: `services/site/marketing-dashboard/`
   - Runs with: `cd services/site/marketing-dashboard && npm run dev`

## Why they are here

They are your two projects, added to the monorepo so they're part of this
workspace. They're registered in `services/site/package.json` (under
`members: ["hitkeep", "marketing-dashboard"]`) so the monorepo resolves them
with `services/*`, and they live under `services/site/` so the site's tooling
(see `services/site/package.json`) can see them as first-class workspace
members.

## Stack

- HitKeep is Angular (CLI + standalone components + pnpm) — not React Router.
- Marketing Dashboard is Next.js 16 + SQLite — not the Kent site's worker stack.

Neither belongs in the worker/D1/R2 path of `services/site/app`; they are
separate apps that live next to it.

## Node version

- Marketing Dashboard needs Node `~20` (per its `package.json`).
- HitKeep documents Node `24.19.0` under `devEngines`.
- The Kent site needs Node 26. These are isolated project setups; run/build them
  from their own directories.

## Verifying they still build

- HitKeep (dashboard): `cd services/site/hitkeep/frontend/dashboard && npm run build` and `npm run test:ci`.
- Marketing Dashboard: `cd services/site/marketing-dashboard && npm run build` and `npm run typecheck`.

If a change touches the Kent site and one of these projects, make two commits
(one per project). Do not mix their lockfiles in the same commit.
