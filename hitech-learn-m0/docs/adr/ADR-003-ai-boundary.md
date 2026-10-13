# ADR-003 — Bounded AI gateway (design only)
**Status:** Accepted conceptually; disabled M0. **Date:** 2026-10-13.

Docs 01, 09 and Blueprint §5 require the server to mediate AI with schema validation, educational task allowlist, age/guardian policy, atomic quota reservations, timeouts, provider and cost controls, minimal logging and curated fallback. No client API keys, no unsolicited profile/private notes or tenant data in prompts. **No AI routes, clients, quotas or providers are implemented in M0**. Initial open-ended AI for under-13 learners is excluded; age thresholds are product bands, not established local legal requirements. M3 will define 120+ reviewed cases (proposed), a cost-capped verified provider and a kill switch, and block production AI pending all gates.
