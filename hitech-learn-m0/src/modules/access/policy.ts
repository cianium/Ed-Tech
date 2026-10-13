/**
 * Pure tenancy rule prototype, NOT an M1 authentication implementation.
 * Incoming context must eventually be built from verified server-side session
 * and database membership; never from a browser-selected tenant or role.
 */
export type MembershipState = "active" | "pending" | "revoked";
export type TenantMembership = Readonly<{
  tenantId: string;
  userId: string;
  state: MembershipState;
}>;
export type TenantResource = Readonly<{ id: string; tenantId: string }>;

/** Deny missing, inactive, non-member or mismatched-tenant requests. */
export function canAccessTenantResource(
  authenticatedUserId: string | null,
  verifiedMembership: TenantMembership | null,
  resource: TenantResource,
): boolean {
  if (!authenticatedUserId || !verifiedMembership) return false;
  if (!resource.id || !resource.tenantId) return false;
  return verifiedMembership.state === "active" &&
    verifiedMembership.userId === authenticatedUserId &&
    verifiedMembership.tenantId === resource.tenantId &&
    verifiedMembership.tenantId.length > 0;
}
