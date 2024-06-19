import { defineConfig } from "vite";
import twig from "vite-plugin-twig-drupal";
import yaml from "@modyfi/vite-plugin-yaml";
import { join } from "node:path";

export default defineConfig({
  plugins: [
    yaml(),
    twig({
      namespaces: {
        components: join(__dirname, "..", "components"),
      },
      functions: {
        boolval: (instance) =>
          instance.extendFilter("boolval", (string) =>
            string === "false" ? false : !!string
          ),
      },
      globalContext: {
        prefix: "ilo",
      },
    }),
  ],
});
