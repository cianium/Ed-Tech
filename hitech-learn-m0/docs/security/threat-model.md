# Threat model — M0 architectural baseline
**Assets:** learner identities, progress, academy class roster/assignments, guardian contact and consent, content provenance, audit logs, future AI prompts and secret keys.

**Adversaries:** anonymous clients, authenticated users crossing academy boundaries, compromised teacher/admin accounts, malicious invitation redeemers, attackers injecting text into AI/resource workflows, unauthorized file readers and supply-chain threats.

| Threat | Planned mitigation | Test milestone |
|---|---|---|
| Cross-tenant IDOR and FK link | API permission check + tenant FK + non-bypass RLS | M1 DB-01–DB-16 |
| Privilege / owner escalation | Server-only grants, explicit owner transfer and transactional last-owner protection | M1 SEC suite |
| Child invited without guardian | Restricted state until verification and age-policy consent | M1 + legal gate |
| Guardian impersonation / revocation | Verified relationship, scoped access, recheck on each request | M1 guardian negative suite |
| File leakage | Private buckets and authorized short-lived delivery | M2/M4 |
| AI prompt injection / private context | Bounded task types, safety and input context allowlist, quotas | M3 AI-AC suite |
| Dependency compromise | Lockfile, controlled CI, dependency audit and secret scanning | M0 (blocked until network) |
| Data loss | Tested restore/rollback and retention controls | M5 |

**Current attack surface:** M0 contains only a public, no-login page plus source; no private records are processed. A pattern-based scanner and pure unit tests are not an audit. Before production include a CSP policy matched to real assets and environments, HSTS after HTTPS validation, dependency review, rate limits, safe error logging and incident drills. Do not claim compliance.
