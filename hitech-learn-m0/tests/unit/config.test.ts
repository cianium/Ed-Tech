import assert from "node:assert/strict";
import test from "node:test";
import { parseServerConfig } from "../../src/lib/config/server.ts";

test("M0 config permits an empty local environment", () => {
  assert.deepEqual(parseServerConfig({}), { environment: "local", baseUrl: null });
});
test("M0 config requires an HTTPS origin in staging and production", () => {
  assert.deepEqual(parseServerConfig({ APP_ENV: "staging", APP_BASE_URL: "https://staging.example.org" }), { environment: "staging", baseUrl: "https://staging.example.org" });
  for (const environment of ["staging", "production"]) {
    assert.throws(() => parseServerConfig({ APP_ENV: environment }), /required/);
    assert.throws(() => parseServerConfig({ APP_ENV: environment, APP_BASE_URL: "http://example.org" }), /HTTPS/);
  }
});
test("M0 config rejects ambiguous or dangerous origins", () => {
  for (const address of ["file:///tmp/test", "garbage", "https://user:pass@domain.test", "https://domain.test/path", "https://domain.test/?secret=hello", "https://domain.test/#fragment"]) {
    assert.throws(() => parseServerConfig({ APP_BASE_URL: address }));
  }
  assert.throws(() => parseServerConfig({ APP_ENV: "superuser" }), /APP_ENV/);
});
