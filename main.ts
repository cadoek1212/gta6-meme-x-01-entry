import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry program for the gta6-meme-x-01 bounty.
// It does one thing: copy POST.json from this repository into the output
// directory the grader reads. No network, no clock, no files outside the repo.
const repoDir = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoDir, "out");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "POST.json"), join(outDir, "POST.json"));
