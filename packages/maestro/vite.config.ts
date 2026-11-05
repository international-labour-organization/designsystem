import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import { isAbsolute } from "path";

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
      // Mark all package imports as external to prevent them from being bundled
      // Some dependencies have `require` statements in them which need to be resolved directly by Node.js on the final consumer level
      // Bundling the dependencies cause errors since `require` statements can't be processed by Vite in an ESM context
      external: (id) => !id.startsWith(".") && !isAbsolute(id),
    },
  },
});
