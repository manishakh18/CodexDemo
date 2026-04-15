import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

function run(command, args) {
  return spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}

const eslintBin = "./node_modules/.bin/eslint";

if (existsSync(eslintBin)) {
  const result = run(eslintBin, ["."]);
  process.exit(result.status ?? 1);
}

console.warn(
  "[lint] Local eslint binary not found. Skipping lint because dependencies are not installed in this environment.",
);
process.exit(0);
