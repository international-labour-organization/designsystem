import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";
import { globSync } from "glob";
import theme from "@ilo-org/themes/tokens/theme/base.json" assert { type: "json" };

const twigPaths = globSync("src/components/**/**.twig");

export default defineConfig({
  plugins: [
    copy({
      targets: [
        {
          src: "src/components/**/**.pattern.yml",
          dest: "dist/components/",
          rename: (name, extension, fullPath) => {
            const componentFolder = fullPath.match(
              /(.*)\/(.*)\/(.*).pattern.yml$/
            )?.[2];
            return `${componentFolder}/${name}.${extension}`;
          },
        },
        {
          src: "src/components/**/**.twig",
          dest: "dist/components/",
          rename: (name, extension, fullPath) => {
            const componentFolder = fullPath.match(
              /(.*)\/(.*)\/(.*).twig$/
            )?.[2];
            return `${componentFolder}/${name}.${extension}`;
          },
          transform: (contents, path) =>
            contents
              .toString()
              .replace(/{{prefix}}/g, theme.themeprefix.value)
              .replace(/prefix ~/g, `'${theme.themeprefix.value}' ~`),
        },
        {
          src: "node_modules/@ilo-org/styles/css/index.css",
          dest: "dist/global/",
          rename: "styles.css",
        },
      ],
      hook: "writeBundle",
      verbose: true,
    }),
  ],
  build: {
    lib: {
      entry: globSync("src/components/**/**.behavior.js"),
      name: "twig",
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          const componentFolder = chunkInfo.facadeModuleId?.match(
            /(.*)\/(.*)\/(.*).behavior.js$/
          )?.[2];
          return `components/${componentFolder}/${chunkInfo.name}.js`;
        },
        chunkFileNames: "components/shared-[hash].js",
      },
    },
  },
});
