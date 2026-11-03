import { builtinModules } from "node:module";

import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

import pkg from "./package.json";

// Dependencies are resolved by the consumer at runtime. Bundling them inlines
// CJS `require` calls that throw when the output is loaded as native ESM
// (e.g. by Storybook 10, which imports main.js without a `require` shim).
const dependencies = Object.keys(pkg.dependencies);

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: ["src/index.ts", "src/vite.ts", "src/storybook.ts"],
      formats: ["es"],
    },
    target: "esnext",
    outDir: "lib",
    rollupOptions: {
      external: [
        ...builtinModules,
        ...builtinModules.map((item) => `node:${item}`),
        ...dependencies.map((dep) => new RegExp(`^${dep}(/.*)?$`)),
      ],
    },
  },
});
