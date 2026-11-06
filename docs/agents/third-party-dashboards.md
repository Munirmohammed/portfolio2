# Third-party dashboards

This file lists the two third-party dashboard/micro-product repos that live under
`services/site/*` alongside the Kent C. Dodds site (`services/site/`).

They were added to the monorepo's workspaces so we can run, test, and lint them
together with the Kent site. They are **not** part of `kentcdodds.com`, and they
are not drop-ins for it.

## Why they are here

- `services/site/hitkeep` — HitKeep's Angular dashboard + tracker SDK. A
  self-hostable, privacy-friendly, Google Analytics alternative. Angular 22,
  pnpm, `@hitkeep/dashboard` + `@hitkeep/tracker`.
- `services/site/marketing-dashboard` — `builderz-labs/marketing-dashboard`.
  A local-first marketing operations control center: CRM, outreach, content,
  analytics, approvals, automations, agent activity. Next.js 16 + SQLite.

## Stack mismatch with the Kent site

The Kent site `services/site` is a React Router v7 app on Cloudflare Workers with
D1 + KV + R2. Neither of the two repos below is that stack:

- HitKeep is Angular (CLI + standalone components + pnpm).
- Marketing Dashboard is Next.js 16 + SQLite (`better-sqlite3`), no worker.

Consequences:

- Do not try to import HitKeep or Marketing Dashboard components into
  `services/site/app`.
- Do not add Cloudflare/D1/R2 code to either repo.
- Each repo is a standalone app that must be built/run from its own directory
  (`ng serve` / `next dev`).
- The monorepo's `nx run-many` targets only apply if a repo declares an Nx
  project. HitKeep does not currently declare one, so `nx` targets for it are
  limited to what it has (`ng`, `npm run build`, `npm run test`).

## How to work on them

From the repo root:

- HitKeep dashboard: `cd services/site/hitkeep/frontend/dashboard && npm install && npm run start`
- Marketing Dashboard: `cd services/site/marketing-dashboard && npm install && npm run dev`

### Node version

- Marketing Dashboard needs Node `~20` (per `package.json`) — the repo's lockfile
  and Next 16 stack assume that. The Kent site requires Node 26. These two are in
  conflict, so build/marketing-dashboard in a separate, isolated env.
- HitKeep is documented as needing Node `24.19.0` in its `package.json`
  `devEngines`.

## Verifying they still build

Both repos have their own build/test commands. Run those from their own
directories:

- HitKeep: `cd services/site/hitkeep/frontend/dashboard && npm run build` and
  `npm run test:ci`.
- Marketing Dashboard: `cd services/site/marketing-dashboard && npm run build`
  and `npm run typecheck`.

If a change touches **both** the Kent site and one of these repos, make two
commits (one per repo) and never mix their `package-lock.json` / `pnpm-lock.yaml`
in the same commit.
