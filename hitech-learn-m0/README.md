# HiTech Learn — M0 foundation (not an MVP release)

This repository is the **M0** implementation baseline for HiTech Learn, an English/German learning platform planned for independent learners and 1–3 pilot language academies (~100 users is a goal, not an established capacity). The attached project Documents 01–12 v1.0 and Implementation Blueprint v1.0 are the source of product decisions.

**Status:** architecture/scaffold only. No authentication, database, migrations, live AI, guardian account verification, academy APIs, learning flows, or deployment. **Do not onboard learners or minors.**

## Prerequisites
- Node.js **22** (`.nvmrc`), npm 10+, internet access to the npm registry for the first install.
- No API keys required for M0.

## Getting started
```bash
nvm use                   # if nvm is installed
npm install               # first online install; generates package-lock.json
npm ci                    # repeatable installs once lockfile exists
npm run dev               # http://localhost:3000
```
**Important:** package-lock.json is not present in this archive because the build environment could not reach npm. Generate and commit it **before opening a PR or enabling CI**. Do not substitute an invented lockfile. Once dependencies resolve, run:
```bash
npm run lint
npm run typecheck
npm test
npm run verify:static
npm run build
```
The dependency-free commands `node --experimental-strip-types --test tests/unit/*.test.ts`, `node scripts/check-boundaries.mjs`, and `node scripts/scan-secrets.mjs` can run without `npm install`; `tsc -p tsconfig.core.json` works only if TypeScript is globally installed or after `npm install`.

## Boundaries
- M0 UI is a non-interactive, non-indexable foundation page; no live sign-up or data.
- Future private routes will use verified actor + active membership + resource-specific authorization + PostgreSQL RLS. Pure tenancy helper in M0 is **not** an API or DB security control.
- Feature gates for minors, payments, AI, ad tracking and child leaderboards are hard-disabled.
- Provider choices (Auth, DB hosting, AI, email, domain) remain unverified for Iran.
- No remote infrastructure is connected. No production configuration may be assumed.

See [M0 report](docs/evidence/M0-REPORT.md), [ADRs](docs/adr/), [threat model](docs/security/threat-model.md), [traceability](docs/traceability.md), and [open questions](docs/decisions/open-questions.md).

## Milestones
M0 foundation → M1 identity/tenant/guardian → M2 learning loops → M3 constrained AI/Word Forge → M4 UX/privacy/operations → M5 staging/pilot. Each later milestone requires a separate approval checkpoint.
