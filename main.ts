// news-image-20261123 entry (Node 22, standard library only).
// The entry image lives beside this file as entry.png; the program copies it
// to the output directory the grader provides (/output, or MAKEFUN_OUTPUT_DIR
// when set for a local run). No network, no dependencies, deterministic:
// both runs write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
