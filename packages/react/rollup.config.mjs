import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { createRequire } from "node:module";
import multiInput from "rollup-plugin-multi-input";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import del from "rollup-plugin-delete";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

const config = {
  input: ["src/index.ts"],
  external: [...Object.keys(packageJson.dependencies)],
  output: [
    {
      dir: "lib/cjs/",
      format: "cjs",
    },
    {
      dir: "lib/esm/",
      format: "esm",
    },
  ],
};

const basePlugins = [
  resolve(),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: true,
    tsconfig: "./tsconfig.build.json",
  }),
  peerDepsExternal(),
  postcss({
    extensions: [".css"],
  }),
  json(),
];

export default function (commandLineArgs) {
  let plugins;

  if (!commandLineArgs.configDevelop) {
    plugins = [...basePlugins, del({ targets: "lib/*" })];
  }

  if (commandLineArgs.configDevelop) {
    plugins = [
      ...basePlugins,
      del({ targets: "lib/*", runOnce: true }),
      livereload(),
    ];
  }

  config.plugins = plugins;
  return config;
}
