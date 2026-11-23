import * as fs from "node:fs";

const LINE: string = "The bus driver held the door for a sprinting schoolgirl, then grinned at the whole bus like we'd all just won something.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE + "\n", "utf-8");
process.exit(0);
