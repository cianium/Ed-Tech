import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
const root = process.cwd();
const ignored = new Set(["node_modules", ".git", ".next", "coverage", "dist"]);
const extensions = /\.(?:ts|tsx|js|mjs|json|yml|yaml|md|css)$/;
const excluded = new Set(["scripts/scan-secrets.mjs", "docs/runbooks/security.md", "docs/runbooks/operations.md"]);
const detectors = [
  { label: "private key block", pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { label: "GitHub access token", pattern: /gh[pousr]_[A-Za-z0-9]{20,}/ },
  { label: "OpenAI-style key", pattern: /sk-[A-Za-z0-9]{32,}/ },
  { label: "AWS key id", pattern: /AKIA[0-9A-Z]{16}/ },
];
const failures = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const pathname = join(dir, entry.name);
    if (entry.isDirectory()) walk(pathname);
    else if (entry.isFile() && extensions.test(entry.name)) {
      const rel = relative(root, pathname);
      if (excluded.has(rel)) continue;
      const body = readFileSync(pathname, "utf8");
      for (const detector of detectors) if (detector.pattern.test(body)) failures.push(`${rel}: ${detector.label}`);
    }
  }
}
walk(root);
if (failures.length) { failures.forEach((f) => console.error(`FAIL: ${f}`)); process.exitCode = 1; }
else console.log("PASS: local pattern-based secret scan (does not replace a dedicated scanner)");
