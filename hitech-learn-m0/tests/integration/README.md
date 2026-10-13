# Integration tests — not available in M0
M1 will use a real PostgreSQL test database and distinct authenticated non-bypass DB roles to validate RLS, FKs, invitations, owner protection and consent. These tests cannot be replaced with mocked membership objects.
