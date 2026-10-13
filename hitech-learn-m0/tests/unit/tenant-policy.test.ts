import assert from "node:assert/strict";
import test from "node:test";
import { canAccessTenantResource } from "../../src/modules/access/policy.ts";

const activeA = { tenantId: "academy-A", userId: "alice", state: "active" } as const;
const resourceA = { id: "class-A", tenantId: "academy-A" };
const resourceB = { id: "class-B", tenantId: "academy-B" };

test("M0 pure policy allows matching active membership", () => {
  assert.equal(canAccessTenantResource("alice", activeA, resourceA), true);
});
test("M0 pure policy denies cross-tenant references", () => {
  assert.equal(canAccessTenantResource("alice", activeA, resourceB), false);
});
test("M0 pure policy denies another account using the same membership", () => {
  assert.equal(canAccessTenantResource("bob", activeA, resourceA), false);
});
test("M0 pure policy denies absent auth and absent membership", () => {
  assert.equal(canAccessTenantResource(null, activeA, resourceA), false);
  assert.equal(canAccessTenantResource("alice", null, resourceA), false);
});
test("M0 pure policy denies revoked, pending, empty resources", () => {
  assert.equal(canAccessTenantResource("alice", { ...activeA, state: "revoked" }, resourceA), false);
  assert.equal(canAccessTenantResource("alice", { ...activeA, state: "pending" }, resourceA), false);
  assert.equal(canAccessTenantResource("alice", activeA, { id: "", tenantId: "academy-A" }), false);
});
