import commonjs from "@rollup/plugin-commonjs";
import { createRequire } from "node:module";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser  from "@rollup/plugin-terser";

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
        name: "@ilo-org/utils",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        name: "@ilo-org/utils",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.build.json" }),
      json(),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
