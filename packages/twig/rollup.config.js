import { globSync } from "glob";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "@rollup/plugin-swc";
import copy from "rollup-plugin-copy";

const behaviorFiles = globSync("src/components/**/**.behavior.js");

const behaviorBuildConfigs = behaviorFiles.map((behaviorFile) => ({
  input: behaviorFile,
  output: {
    dir: "dist",
    format: "iife",
    entryFileNames: (chunkInfo) => {
      const componentFolder = chunkInfo.facadeModuleId?.match(
        /(.*)\/(.*)\/(.*).behavior.js$/
      )?.[2];
      return `components/${componentFolder}/${chunkInfo.name}.js`;
    },
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    swc({
      swc: {
        env: {
          targets: "last 2 versions, not dead, > 1% in US",
        },
        minify: true,
      },
    }),
  ],
}));

const copyConfig = copy({
  targets: [
    {
      src: "src/components/**/**.component.yml",
      dest: "dist/components/",
      rename: (name, extension, fullPath) => {
        const componentFolder = fullPath.match(
          /(.*)\/(.*)\/(.*).component.yml$/
        )?.[2];
        return `${componentFolder}/${name}.${extension}`;
      },
    },
    {
      src: "src/components/**/**.component.yml",
      dest: "dist/components/",
      rename: (name, extension, fullPath) => {
        const componentFolder = fullPath.match(
          /(.*)\/(.*)\/(.*).component.yml$/
        )?.[2];
        const componentName = name.split(".").at();
        return `${componentFolder}/${componentName}.wingsuit.${extension}`;
      },
    },
    {
      src: "src/components/**/*.twig",
      dest: "dist/components/",
      rename: (name, extension, fullPath) => {
        // Extract the full path after src/components/
        const pathMatch = fullPath.match(/src\/components\/(.*)\/(.*)\.twig$/);
        if (!pathMatch) return `${name}.${extension}`;

        const [_, componentPath, fileName] = pathMatch;
        return `${componentPath}/${fileName}.${extension}`;
      },
      transform: (contents, path) =>
        contents
          .toString()
          // @TODO: We need to find a way to set this dynamically for
          // theming purposes now that the themes package has been deprecated
          .replace(/{{prefix}}/g, "ilo")
          .replace(/prefix ~/g, `'ilo' ~`),
    },
    {
      src: "node_modules/@ilo-org/styles/css/*",
      dest: "dist/styles",
    },
  ],
  hook: "writeBundle",
  verbose: true,
});

// Add copy plugin to the last behavior build config
behaviorBuildConfigs.at(-1).plugins.push(copyConfig);

export default behaviorBuildConfigs;
