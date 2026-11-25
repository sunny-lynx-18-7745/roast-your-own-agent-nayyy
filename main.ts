import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent (u-nayyy-roast-your-own-agent-4c3d413c).
// One line roasting the AI agent our own team built: it has entered
// fifty make.fun bounties, won zero dollars, and still calls that a strategy.
const roast =
  "My agent has entered fifty bounties, won zero dollars, and still calls it a strategy.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The gate requires 1 to 200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an entry the gate would refuse.
if (roast.length < 1 || roast.length > 200 || roast.trim().length === 0) {
  throw new Error(`roast must be 1-200 characters, got ${roast.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, roast, "utf8");
console.log(roast);
