// makefun-x-reposts-02 entry program (Node 22+, standard library only).
//
// It copies POSTS.json from the repository root into the output directory,
// where the gate reads it. That is the whole job of this program.
//
// The entry itself is not code: it is the posts on X. Each post quotes, or
// replies directly to, a different one of make.fun's newest posts on
// x.com/makefunai, all from one public X account, with make.fun (or the
// @makefunai tag) and the entrant's play code in its own words. POSTS.json
// names those posts' addresses, and the house reads their reposts, quotes
// and likes from X. Nothing this program writes about the posts is scored.
//
// POSTS.json ships here as an empty placeholder list. The posts are made
// after this skeleton is built, and their addresses are filled in before
// the entry is submitted. An empty list is refused by the gate on purpose:
// a submission has to name at least one real post.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POSTS.json');
const target = join(OUTPUT_DIR, 'POSTS.json');

let payload: Buffer;
try {
  payload = readFileSync(source);
} catch (err) {
  console.error(`could not read POSTS.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// Refuse to hand the gate something that is not even JSON, or not the
// {"posts": [...]} object the gate expects. The house reads the list, so a
// wrong shape here would only be caught at submission time.
let parsed: unknown;
try {
  parsed = JSON.parse(payload.toString('utf8'));
} catch (err) {
  console.error(`POSTS.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  !Array.isArray((parsed as { posts?: unknown }).posts)
) {
  console.error('POSTS.json must be an object of the form {"posts": [...]}');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, payload);
console.log(`wrote ${target} (${payload.length} bytes)`);
