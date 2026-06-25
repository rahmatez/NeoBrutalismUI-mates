import path from "node:path";
import type { NextConfig } from "next";

const monorepoRoot = path.join(__dirname, "../..");

const nextConfig: NextConfig = {
  transpilePackages: ["neo-brutalism-ui-mates"],
  // Required for correct module tracing in pnpm monorepos
  outputFileTracingRoot: monorepoRoot,
  // Let Turbopack resolve `next` and workspace packages from the monorepo root
  turbopack: {
    root: monorepoRoot,
  },
};

export default nextConfig;
