import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: [
    "../public",
    { from: "../node_modules/@ilo-org/fonts/font-css", to: "/fonts" },
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@chromatic-com/storybook"),
    {
      name: getAbsolutePath("@storybook/addon-docs"),
      options: {
        transcludeMarkdown: true,
        configureJSX: true,
      },
    },
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
  viteFinal: (config) => {
    config.optimizeDeps = {
      include: ["@storybook/addon-docs"],
    };

    // Vite 5 still reaches for Sass's legacy JS API, which Dart Sass removes
    // in 2.0.0.
    config.css = {
      ...config.css,
      preprocessorOptions: {
        ...config.css?.preprocessorOptions,
        scss: {
          ...config.css?.preprocessorOptions?.scss,
          api: "modern-compiler",
        },
      },
    };

    return config;
  },
};

export default config;
