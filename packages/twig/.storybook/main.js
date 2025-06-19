import { join, dirname } from "path";
import { mergeConfig } from "vite";
import alternate from "./vite.config.js";

import { head } from "@ilo-org/maestro/storybook";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
        configureJSX: true,
      },
    },
  ],
  framework: {
    name: getAbsolutePath("@storybook/html-vite"),
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(alternate, config);
  },
  previewHead: head,
};
export default config;
