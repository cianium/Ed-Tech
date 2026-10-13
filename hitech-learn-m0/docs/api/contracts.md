# API convention — future contract, not implemented
M0 exports **zero** API routes. In M1/M2, typed DTO validation + verified session and membership + role/resource checks precede DB access, and DB RLS independently enforces scoped access. Error codes: `UNAUTHENTICATED`, `FORBIDDEN`, `NOT_FOUND`, `CONFLICT`, `VALIDATION_ERROR`, `RATE_LIMITED`. Avoid raw stack traces. Pagination/list limits and idempotent writes for invitations, submissions and XP awards are required.

Proposed endpoints from Blueprint (not yet approved as final API): `GET /api/me`, `PATCH /api/me/profile`, `POST /api/academies/:id/invitations`, `POST /api/invitations/accept`, later learning/class/submission/feedback/AI/game routes. Do not add route handlers without a separately reviewed milestone.
