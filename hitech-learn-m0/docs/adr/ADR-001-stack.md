# ADR-001 — M0 stack and hosting boundary
**Status:** Accepted for local M0; hosting remains OPEN. **Date:** 2026-10-13.

**Context:** Document 01 favors a small modular monolith; Blueprint §2 confirms Next.js App Router, TypeScript and Tailwind. Market is Iran-first and external service availability is not verified.

**Decision:** One Next.js 16 App Router web application, strict TypeScript, Tailwind v4, Node 22 and npm; no independent NestJS/FastAPI service. Local source only in M0. No provider or cloud is selected. The dependency choices are proposed version constraints; installs/builds were not verified because the npm registry is unreachable in this environment.

**Consequences:** Small cognitive overhead and server/frontend colocated. Production infra choice is deferred pending provider/legal/availability check. Lockfile generation and revalidation on an online environment are mandatory before CI is operational. No public endpoints that accept private data are implemented in M0.

**Alternatives:** Independent backend rejected as unnecessary scope; Supabase project creation deferred until Iran feasibility review.
