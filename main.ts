// makefun-news-image-20261120 — v2 entrypoint (Node 22, standard library only).
//
// The image is the product: entry.png beside this file is copied byte-for-byte
// to $MAKEFUN_OUTPUT_DIR/entry.png (or /output/entry.png inside the grader).
// No network, no randomness, no timestamps — a plain copy is deterministic
// by construction, so the two grader runs produce identical bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Read-back check: the written file must be byte-identical to the repo
// copy. If it is not, the run is not reproducible — fail loudly.
const back = readFileSync(target);
if (!back.equals(bytes)) {
  throw new Error("read-back mismatch: output differs from repo entry.png");
}
console.log("read-back check: output is byte-identical to repo entry.png");

const sha = createHash("sha256").update(bytes).digest("hex");
console.log(`wrote ${target} (${bytes.length} bytes, ${width}x${height}, sha256 ${sha})`);
