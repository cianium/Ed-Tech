# Access control contract (to implement in M1–M2)
## Request sequence
1. Verify session through reviewed server-side provider; derive actor ID from verified session.
2. Validate request DTO and deny invalid values.
3. Resolve requested tenant in server DB and verify active membership; deny client role overrides.
4. Resolve resource ownership, class assignment or enrollment and guardian relationship/consent if applicable.
5. Authorize action by least-privilege role matrix; deny by default, hide existence when appropriate.
6. Query DB using scoped SQL and RLS-enabled non-bypass identity.
7. Persist audited mutations and respond with minimal DTO.

## Critical negative cases
- Academy A cannot read/change academy B resources by guessed ID, join, upload path or search.
- Teacher cannot access unassigned class or submit feedback outside assignment scope.
- Student cannot escalate to academy/platform role through HTTP request or profile update.
- Invite token cannot be reused, self-issued to privileged roles or redeemed after expiry/revocation.
- Guardian impersonation and consent revocation cannot be bypassed with a stale session.
- Academy personnel never see B2C personal history by default.
- Restricted child account cannot call educational APIs until activation gates are satisfied.

## M0 limitations
`canAccessTenantResource` accepts a **caller-supplied** membership for unit-test purposes and is not safe as an authentication or authorization boundary by itself. There are no real sessions, role providers, DB rows, RLS policies or integration tests. No private API paths exist. Do not deploy for learner use.
