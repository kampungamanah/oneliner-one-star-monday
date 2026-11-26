import { mkdirSync, writeFileSync } from "node:fs";

// A one-star review of Monday, written as if Monday were a restaurant.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character (1 to 180).
// The complaint is a diner's: a long wait, a waiter passing the blame,
// and a bill that charges for the whole week up front.
const line = "One star. Waited forty minutes for my coffee, the waiter blamed the weekend, and Monday still charged me for the full week.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
