import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const stylesDir = join(root, "src/styles");

mkdirSync(dist, { recursive: true });

const tokens = readFileSync(join(stylesDir, "tokens.css"), "utf8");
const themes = readFileSync(join(stylesDir, "themes.css"), "utf8");
const globals = readFileSync(join(stylesDir, "globals.css"), "utf8");

// Bundle tokens + themes + tailwind layers for npm consumers
const bundledCss = `${tokens}\n${themes}\n${globals.replace(/^@import[^;]+;\n?/gm, "")}`;
writeFileSync(join(dist, "styles.css"), bundledCss);

copyFileSync(join(stylesDir, "themes.css"), join(dist, "themes.css"));

const indexPath = join(dist, "index.js");
const indexSource = readFileSync(indexPath, "utf8");
if (!indexSource.startsWith('"use client"')) {
  writeFileSync(indexPath, `"use client";\n${indexSource}`);
}
