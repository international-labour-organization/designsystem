import { createRequire } from "node:module";
import copy from "rollup-plugin-copy";
import { importMetaAssets } from "@web/rollup-plugin-import-meta-assets";
import typescript from "rollup-plugin-typescript2";

// eslint-disable-next-line
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      copy({
        targets: [{ src: "src/assets", dest: "dist/" }],
      }),
      typescript({
        baseUrl: "./src",
        useTsconfigDeclarationDir: true,
        tsconfig: "./tsconfig.json",
      }),
      importMetaAssets(),
    ],
  },
];
