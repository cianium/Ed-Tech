# Requirement and evidence traceability (do not fabricate completed tests)

| Source ID / origin | M0 artifact | Test / evidence | Status |
|---|---|---|---|
| Doc 12 M0-01 actual repository inventory | `docs/evidence/M0-REPORT.md` | Source and local inventory | Local baseline verified; no remote repo |
| Doc 12 M0-02 Node/npm and env contract | `.nvmrc`, `.env.example`, `src/lib/config/server.ts` | `tests/unit/config.test.ts`, core tsc | Local pure checks; dependency lock pending |
| Doc 12 M0-03 lint, strict TS, CI, test, secret scans | `eslint.config.mjs`, `tsconfig.json`, `.github/workflows/ci.yml`, scripts/tests | Local tests and scanners | ESLint/build/CI UNVERIFIED |
| Doc 12 M0-04 ADR-001/002/003 and traceability | `docs/adr/`, this file | Artifact inventory | Written |
| Doc 04 AC-US-15-01 automated CI typecheck, lint, tests, build | scripts and workflow | CI run | UNVERIFIED; cannot satisfy until npm install + repo CI |
| Doc 08 UX-07 accessibility and zoom | UI CSS and layout | Browser + manual device review | UNVERIFIED |
| Docs 06 DB-01–DB-16 | `docs/security/authorization-boundaries.md`, `docs/adr/ADR-002-tenancy.md` | Authenticated direct DB negative tests | PLANNED M1; never run |
| Docs 07 SEC-01–SEC-22 | threat model and future plan | Integrated security tests | PLANNED M1–M5; never run |
| Doc 09 AI-AC / GAME-AC | `docs/ai/evaluation-plan.md` | AI/game test suite | PLANNED M3; never run |
| Doc 10 P0 curated resources | scope freeze and model draft | Content tests | PLANNED M2; never run |
| Blueprint §3 guardian safeguards | ADR-005 + feature gates | Unit flag test | M0 flag tested; guardian flow PLANNED M1 |
| Blueprint §10–11 M0–M5 reconciliation | ADR-007 | Founder approval message | M0 only authorized |

Acceptance criteria and upstream IDs beyond M0 are not considered covered by placeholders. Retain source IDs in later ticket trackers.
