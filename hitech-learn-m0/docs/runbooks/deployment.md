# Deployment checklist — NOT authorized for M0
This is a future runbook template, not a deployment. No cloud project, domain or live database has been created or verified.

Preconditions: (1) founder-approved Iran-eligible provider and entity arrangement; (2) npm lockfile, clean CI and audit; (3) M1–M5 acceptance evidence including PostgreSQL authenticated RLS negatives; (4) data minimization, privacy/terms, guardian process and contents licenses; (5) secrets in approved server-only store; (6) rollback version and staging migration/backup restoration; (7) monitoring, incident owner and explicit founder release sign-off. No real minors until legal/provider/security gates documented.

Rollback: halt registrations/dependent AI endpoints, promote last tested revision, revert with backward-compatible migrations, restore from verified backups *only under approved data-loss protocol*; measure RPO/RTO from actual rehearsal rather than assume.
