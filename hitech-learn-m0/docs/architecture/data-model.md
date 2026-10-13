# Conceptual data model and boundaries — NOT an applied schema
## Identity / privilege
- `auth_identities`: provider-authenticated account; exact provider/user key undecided.
- `profiles`: minimal, user-owned fields; no password copy.
- `tenants`, `tenant_memberships`: one person can belong to several academies; membership uniqueness/status.
- `platform_role_assignments`: platform grants audited and inaccessible to academy admin.
- `invitations`: hashed single-use tokens, TTL, revocation and transactionally protected grants.
- `guardian_relationships`, `consent_records`: verified relationship, scopes, versions, revocation and audit separately from academy roles.
## Learning
- `personal_learning_profiles`: B2C profile with user_id and **no fabricated tenant**.
- `lessons`, `resources`, `exercises`, `practice_attempts`, `progress_events`: approved educational content and verified completion.
- `classes`, `class_memberships`, `assignments`, `submissions`, `feedback`: tenant-owned, tenant-consistent FKs, class authorization.
- `ai_usage_events`, `ai_feedback_reports`: minimal metadata only, no raw conversation by default.
- `vocabulary_items`, `game_attempts`, `game_attempt_answers`, `xp_ledger`: M3 deterministic, idempotent scoring.
- `privacy_requests`, `audit_logs`: reviewability with minimal PII.

## Invariants required for later migration review
1. Tenant ownership set by trusted server/data layer and enforced with DB policies.
2. Composite (tenant_id, entity_id) foreign keys forbid cross-tenant children; tenancy immutable.
3. B2C learning not accidentally visible to academies.
4. Guardian rights require a verified child relationship plus active scope and consent state; revocation enforced.
5. Every table exposed to application roles must have reviewed grants and default-deny RLS; service role not used for user CRUD.
6. Unique membership and invite redemption enforced transactionally; last owner protected.

M0 contains **no migration or connection**, because auth identity mapping/provider remains an open ADR. No schema can be asserted as tested.
