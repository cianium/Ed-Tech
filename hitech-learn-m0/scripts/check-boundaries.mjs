import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const blockedDirs = new Set(["node_modules", ".next", ".git", "coverage"]);
function walk(dir) {
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !blockedDirs.has(entry.name)) found.push(...walk(join(dir, entry.name)));
    else if (entry.isFile() && /\.(tsx?|jsx?)$/.test(entry.name)) found.push(join(dir, entry.name));
  }
  return found;
}
const source = walk(join(root, "src"));
const failures = [];
for (const path of source) {
  const name = relative(root, path);
  const body = readFileSync(path, "utf8");
  if (body.includes("use client") && /\b(?:process\.env\.(?!NEXT_PUBLIC_)|service_role|DATABASE_URL)\b/i.test(body)) {
    failures.push(`${name}: potential secret access in client file`);
  }
  if (/\b(?:eval\s*\(|new Function\s*\()/.test(body)) failures.push(`${name}: dynamic code evaluation`);
}
for (const essential of [".env.example", "src/app/layout.tsx", "src/app/page.tsx", "src/lib/security/pilot-policy.ts", "docs/traceability.md", "docs/adr/ADR-001-stack.md"]) {
  if (!existsSync(join(root, essential))) failures.push(`Missing foundation artifact: ${essential}`);
}
if (failures.length) { for (const f of failures) console.error(`FAIL: ${f}`); process.exitCode = 1; }
else console.log(`PASS: inspected ${source.length} TS/TSX source files and required M0 artifacts (heuristic, not a security audit)`);
