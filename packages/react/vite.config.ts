import type { UserConfig as VitestUserConfig } from "vitest/config";
import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { globSync } from "glob";
import { PreRenderedChunk } from "rollup";

type ViteConfig = UserConfig & { test: VitestUserConfig["test"] };

const OUT_DIR = "lib";

function names({ facadeModuleId }: PreRenderedChunk) {
  if (facadeModuleId?.endsWith("src/index.ts")) {
    return "index.js";
  }

  if (facadeModuleId?.includes("components")) {
    const componentName = facadeModuleId.split("/").at(-2);

    return `_store/${componentName}-entry-[hash].js`;
  }

  return "_store/[name].js";
}

const config: ViteConfig = {
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      outDir: `${OUT_DIR}/types`,
    }),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@ilo-org/styles/css/*",
          dest: "styles",
        },
      ],
    }),
  ],
  root: "./",
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["tests/**/*.test.{ts,tsx}"],
  },
  publicDir: false,
  build: {
    emptyOutDir: true,
    outDir: OUT_DIR,
    lib: {
      entry: globSync([
        "src/components/**/index.ts",
        "src/hooks/**/index.ts",
        "src/index.ts",
      ]),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: [
        {
          dir: `${OUT_DIR}/esm`,
          entryFileNames: names,
          chunkFileNames: "_store/[name]-chunk-[hash].js",
          format: "es",
          assetFileNames: "",
        },
        {
          dir: `${OUT_DIR}/cjs`,
          entryFileNames: names,
          chunkFileNames: "_store/[name]-chunk-[hash].js",
          format: "commonjs",
          assetFileNames: "",
        },
      ],
    },
  },
};

export default defineConfig(config as UserConfig);
