import { defineConfig } from "vite";
import { join } from "node:path";

import { UIPatterns } from "@ilo-org/maestro/plugin";

export default defineConfig({
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
