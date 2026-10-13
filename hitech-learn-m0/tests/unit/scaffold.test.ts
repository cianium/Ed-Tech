import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("M0 landing is non-indexable and has no sign-up form or private API", () => {
  const layout = readFileSync("src/app/layout.tsx", "utf8");
  const page = readFileSync("src/app/page.tsx", "utf8");
  assert.match(layout, /robots: \{ index: false, follow: false \}/);
  assert.match(page, /The learning experience is not available yet/);
  assert.doesNotMatch(page, /<form\b|<input\b|\/api\//);
});

test("M0 styling contains project design tokens and RTL readiness", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  const page = readFileSync("src/app/page.tsx", "utf8");
  assert.match(css, /--brand-700: #146b68/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(page, /lang="fa" dir="rtl"/);
  assert.match(page, /lang="de" dir="ltr"/);
});
