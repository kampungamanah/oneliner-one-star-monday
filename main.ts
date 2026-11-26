import { mkdirSync, writeFileSync } from "node:fs";

// One Star for Monday: a one-star review of Monday, framed as a
// restaurant review. The entry is a single line, written verbatim to
// entry.txt. The grader counts characters, so the file must contain
// exactly the line below and nothing else — no trailing newline.

const REVIEW =
  "One star. Waited forty minutes for my coffee, the waiter blamed the weekend, and Monday still charged me for the full week.";

const OUTPUT_FILE = "entry.txt";
const DEFAULT_DIR = "/output";

function candidateDirs(): string[] {
  // The env var wins when set; the default is always tried as well.
  return [process.env.MAKEFUN_OUTPUT_DIR, DEFAULT_DIR].filter(
    (dir): dir is string => Boolean(dir),
  );
}

function writeReview(dir: string): void {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/${OUTPUT_FILE}`, REVIEW);
  } catch {
    // A directory we cannot write to is skipped, not fatal.
  }
}

for (const dir of candidateDirs()) {
  writeReview(dir);
}
