import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    external: [...Object.keys(packageJson.dependencies)],
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
      typescript({ tsconfig: "./tsconfig.json" }),
      json(),
      terser(),
    ],
  },
  {
    input: "lib/types/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
