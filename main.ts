// news-image-20261123 entry (Node 22, standard library only).
// The entry image lives beside this file as entry.png; the program copies it
// to the output directory the grader provides (/output, or MAKEFUN_OUTPUT_DIR
// when set for a local run). No network, no dependencies, deterministic:
// every run writes the same bytes.
//
// Safety checks run before the copy: the source must be a real PNG file and
// the output directory must already exist (it is not created here — a missing
// output directory is a caller error). Any failed check prints one clear line
// to stderr and exits non-zero instead of failing with a bare ENOENT.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// The 8-byte signature every PNG file starts with.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(message: string): never {
  console.error(`news-image-20261123: ${message}`);
  process.exit(1);
}

function validatePng(path: URL): void {
  const data = readFileSync(path);
  if (data.length < PNG_SIGNATURE.length) {
    fail("entry.png is too small to be a PNG file");
  }
  if (!data.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
    fail("entry.png is not a valid PNG file (bad signature)");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);

if (!existsSync(outDir) || !statSync(outDir).isDirectory()) {
  fail(`output directory is missing or not a directory: ${outDir}`);
}

validatePng(src);
copyFileSync(src, join(outDir, "entry.png"));
