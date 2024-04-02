import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { globSync } from "glob";

const designSystemEntries = globSync(
  "src/patterns/components/!(polyfill)/**/**.behavior.js"
);

export default designSystemEntries.map((entry) => {
  const componentName = entry.match(/([^\/]+)\.behavior.js$/)[1];
  return {
    input: entry,
    output: {
      dir: `dist/components/${componentName}`,
      compact: true,
      format: "umd",
      name: `${componentName}.behavior`,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        presets: ["@babel/preset-env"],
        babelHelpers: "bundled",
      }),
      terser(),
    ],
  };
});
