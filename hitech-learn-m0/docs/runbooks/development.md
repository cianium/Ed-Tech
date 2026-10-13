# Local M0 runbook
- Use Node 22 via nvm and npm, work on a feature branch; do not commit secrets.
- Online first install: `npm install` then commit the created `package-lock.json`, verify `npm ci` on a clean checkout.
- Run `npm run lint`, `npm run typecheck`, `npm test`, `npm run verify:static`, `npm run build`.
- Without npm: `node --experimental-strip-types --test tests/unit/*.test.ts`, globally installed `tsc -p tsconfig.core.json`, `node scripts/check-boundaries.mjs`, `node scripts/scan-secrets.mjs`.
- `APP_ENV=local` is the default; nonlocal requires `APP_BASE_URL=https://<origin>`. No runtime env secrets are used yet.
- Never treat a green M0 unit suite as DB RLS, authorization, guardian, UI or E2E verification.
