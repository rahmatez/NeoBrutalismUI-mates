import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  // Avoid wiping dist during watch — prevents Next.js HMR races in the monorepo
  clean: !process.argv.includes("--watch"),
  external: ["react", "react-dom", "react/jsx-runtime"],
  treeshake: true,
});
