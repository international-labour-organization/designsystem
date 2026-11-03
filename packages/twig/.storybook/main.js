import { mergeConfig } from "vite";
import alternate from "./vite.config.js";

import { head } from "@ilo-org/maestro/storybook";

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
        configureJSX: true,
      },
    },
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(alternate, config);
  },
  previewHead: head,
};
export default config;
