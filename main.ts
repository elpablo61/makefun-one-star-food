// One Star, Five Stars for the Food — make.fun entry.
// Writes the winning one-star alien review of Earth to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star: Earth's gravity pulled my luggage, my spine, and my dignity to the floor, but the dumplings at Auntie Chen's stall leaked soup down my third chin.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts 1 to 200 characters, so refuse to write a bad entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch {
  mkdirSync("output", { recursive: true });
  writeFileSync(join("output", "entry.txt"), LINE, "utf8");
}

console.log(`Wrote ${LINE.length} characters to entry.txt`);
