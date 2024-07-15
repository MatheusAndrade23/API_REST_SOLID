import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [["src/http/controllers/**", "prisma"]],
    dir: "src",
    hookTimeout: 15000,
    coverage: {
      exclude: [
        "src/app.ts",
        "src/env/**",
        "src/server.ts",
        "src/lib/**",
        "src/@types/**",
        "vite.config.ts",
        "prisma/**",
      ],
    },
  },
});
