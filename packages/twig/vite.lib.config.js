import { basename, dirname, relative } from "node:path";
import { globSync } from "glob";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const behaviorFiles = globSync("src/components/**/*.behavior.js");

// IIFE can't be code-split, so each behavior gets its own build environment
const environments = Object.fromEntries(
  behaviorFiles.map((file) => {
    const component = basename(dirname(file));
    const name = basename(file, ".js");
    return [
      component.replace(/\W/g, "_"),
      {
        consumer: "client",
        build: {
          outDir: "dist",
          // Builds output to the same dir so none may empty it
          emptyOutDir: false,
          lib: {
            entry: file,
            formats: ["iife"],
            name: `behavior_${component.replace(/\W/g, "_")}`,
            fileName: () => `components/${component}/${name}.js`,
          },
        },
      },
    ];
  })
);

const componentFolder = (fullPath) => basename(dirname(fullPath));

export default defineConfig({
  publicDir: false,
  environments,
  plugins: [
    viteStaticCopy({
      // Copy once, from the last behavior build, instead of once per environment
      environment: Object.keys(environments).at(-1),
      targets: [
        {
          src: "src/components/**/*.component.yml",
          dest: "components",
          rename: (name, extension, fullPath) =>
            `${componentFolder(fullPath)}/${name}.${extension}`,
        },
        // TODO: Deprecate and stop emitting wingsuit files
        {
          src: "src/components/**/*.component.yml",
          dest: "components",
          rename: (name, extension, fullPath) =>
            `${componentFolder(fullPath)}/${name.split(".").at()}.wingsuit.${extension}`,
        },
        {
          src: "src/components/**/*.twig",
          dest: "components",
          // Keep nested folders, e.g. nav/desktop/navmenu.twig
          rename: (name, extension, fullPath) =>
            `${relative("src/components", dirname(fullPath))}/${name}.${extension}`,
          transform: (contents) =>
            contents
              // @TODO: We need to find a way to set this dynamically for
              // theming purposes now that the themes package has been deprecated
              .replace(/{{prefix}}/g, "ilo")
              .replace(/prefix ~/g, `'ilo' ~`),
        },
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
  builder: {
    async buildApp(builder) {
      // Skip the implicit "client" environment, which expects an index.html
      await Promise.all(
        Object.keys(environments).map((name) =>
          builder.build(builder.environments[name])
        )
      );
    },
  },
});
