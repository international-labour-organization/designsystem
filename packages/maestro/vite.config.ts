import { builtinModules } from "node:module";

import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: ["src/index.ts", "src/vite.ts", "src/sb.ts"],
      formats: ["es"],
    },
    target: "esnext",
    outDir: "lib",
    rollupOptions: {
      external: builtinModules
        .map((item) => `node:${item}`)
        .concat(builtinModules),
    },
  },
});
