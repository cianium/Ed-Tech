# ADR-002 — Multi-tenancy design (M1 implementation required)
**Status:** Accepted conceptual boundary; SQL implementation NOT begun. **Date:** 2026-10-13.

**Context:** Docs 05–07 specify one identity with multiple academy memberships and B2C private data with no academy. The Blueprint adds guardian relationships distinct from academy roles.

**Decision:** Shared PostgreSQL schema, explicit tenant-owned rows, immutable tenant IDs, composite tenant-aware FKs, default-deny RLS and least-privilege DB credentials. Every API action resolves authenticated actor, current active tenant membership and resource scope SERVER-SIDE before queries. DB RLS provides separate enforcement and is tested with real non-bypass roles in M1. Personal progress is user-owned and not assigned to a fake tenant. Guardian relationships require separate verified grants and are never academy roles.

**Consequences:** More authorization work but safer academy isolation. No SQL migration, RLS, identity integration or tenant APIs in M0; `src/modules/access/policy.ts` is a pure illustrative rule and cannot establish trustworthy actor identity.

**M1 decision:** Resolve stable identity mapping once eligible auth provider is selected. Write DB-01–DB-16 integration tests before approving M1 exit.
