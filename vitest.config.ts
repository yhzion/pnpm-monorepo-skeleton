import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "./",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      include: ["**/src/**/*.{ts,tsx,js}"],
      exclude: ["node_modules", "dist"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
});
