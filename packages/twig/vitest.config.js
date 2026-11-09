import { defineConfig } from "vitest/config";

export default defineConfig({
  assetsInclude: ["**/*.twig", "**/*.yml"],
  test: {
    include: ["tests/integration/**/*.test.js"],
  },
});
