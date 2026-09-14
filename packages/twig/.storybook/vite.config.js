import { defineConfig } from "vite";
import { join } from "node:path";

import { UIPatterns } from "@ilo-org/maestro/plugin";

export default defineConfig({
  css: {
    preprocessorOptions: {
      // Vite 5 still reaches for Sass's legacy JS API, which Dart Sass removes
      // in 2.0.0.
      scss: { api: "modern-compiler" },
    },
  },
  plugins: UIPatterns({
    namespaces: {
      components: join(__dirname, "..", "src/components"),
    },
    globals: {
      prefix: "ilo",
    },
    dynamics: ["modal", "tabs"],
  }),
});
