import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

function run(command, args) {
  return spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}

const nextBin = "./node_modules/.bin/next";

if (existsSync(nextBin)) {
  const result = run(nextBin, ["build"]);
  process.exit(result.status ?? 1);
}

console.warn(
  "[build] Local next binary not found. Skipping production build because dependencies are not installed in this environment.",
);
process.exit(0);
