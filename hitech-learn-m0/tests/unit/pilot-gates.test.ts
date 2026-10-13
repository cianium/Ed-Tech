import assert from "node:assert/strict";
import test from "node:test";
import { PILOT_FEATURES, isPilotFeatureEnabled } from "../../src/lib/security/pilot-policy.ts";

test("every sensitive feature is off in M0", () => {
  assert.ok(Object.isFrozen(PILOT_FEATURES));
  for (const feature of Object.keys(PILOT_FEATURES) as (keyof typeof PILOT_FEATURES)[]) {
    assert.equal(isPilotFeatureEnabled(feature), false, `${feature} must be disabled`);
  }
});
