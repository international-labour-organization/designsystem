import { defineConfig } from "vitest/config";
import type { Plugin, Rolldown } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { globSync } from "glob";

const OUT_DIR = "lib";

function names({ facadeModuleId }: Rolldown.PreRenderedChunk) {
  if (facadeModuleId?.endsWith("src/index.ts")) {
    return "index.js";
  }

  if (facadeModuleId?.includes("components")) {
    const componentName = facadeModuleId.split("/").at(-2);

    return `_store/${componentName}-entry-[hash].js`;
  }

  return "_store/[name].js";
}

/**
 * Some dependencies (videojs-youtube, url-toolkit via video.js, classnames)
 * only ship UMD builds. Rolldown inlines them but leaves the UMD wrapper
 * intact, so the AMD branch (`define(["videojs"], ...)`) ends up verbatim in
 * the published chunk. Consumer bundlers such as webpack and Turbopack
 * statically analyse AMD `define` calls and fail with "Can't resolve 'videojs'"
 * (the real package is "video.js"). At runtime the branch is dead code, since
 * the CommonJS branch is taken first. Replacing the AMD guard with `false`
 * lets Rolldown drop the branch as dead code.
 *
 * The guard must also swallow a trailing `!== void 0` / `!== undefined`
 * (store2 inside Storybook's manager-api uses that form), otherwise it turns
 * into `false !== void 0`, which is always true and makes the AMD branch the
 * only one left.
 */
const UMD_AMD_GUARD =
  /typeof define\s*===?\s*(['"])function\1\s*&&\s*(?:typeof define\.amd\s*===?\s*(['"])object\2\s*&&\s*)?define\.amd(?:\s*!==?\s*(?:void 0|undefined|null))?/g;

function stripAmdBranch(): Plugin {
  return {
    name: "ilo:strip-amd-branch",
    enforce: "pre",
    transform(code, id) {
      if (!id.includes("node_modules") || !code.includes("define.amd")) {
        return null;
      }

      return { code: code.replace(UMD_AMD_GUARD, "false"), map: null };
    },
  };
}

export default defineConfig({
  plugins: [
    stripAmdBranch(),
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
        {
          src: "node_modules/@ilo-org/styles/scss/*",
          dest: "styles/scss",
        },
      ],
    }),
  ],
  root: "./",
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["tests/unit/**/*.test.{ts,tsx}"],
          environment: "jsdom",
          setupFiles: ["./vitest.setup.ts"],
        },
      },
      {
        test: {
          name: "integration",
          include: ["tests/integration/**/*.test.ts"],
        },
      },
    ],
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
    rolldownOptions: {
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
});
