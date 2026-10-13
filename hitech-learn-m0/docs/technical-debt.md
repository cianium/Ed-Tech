# Technical debt / deferred gates
| ID | Debt | Blocking stage |
|---|---|---|
| TD-001 | npm registry inaccessible; no generated lockfile or reproducible install proof | M0 exit |
| TD-002 | Next.js build, ESLint, full TS, Prettier and dependency audit not executed | M0 exit |
| TD-003 | CI YAML prepared but no remote repo/CI execution | M0 exit |
| TD-004 | Mobile/RTL design source exists, browser and device checks not run | M0 exit / M4 |
| TD-005 | Provider choice and actual auth identity mapping not verified | M1 |
| TD-006 | No DB migrations, constraints, RLS or real-credential negative tests | M1 |
| TD-007 | Guardian identity/consent workflow and legal review missing | M1 + pilot gate |
| TD-008 | No actual end-to-end journeys, approved learning content or teacher acceptance | M2 |
| TD-009 | No AI/gamification engine or evaluation | M3 |
| TD-010 | Accessibility audit, deployment, backup/restore and incident operations missing | M4/M5 |
