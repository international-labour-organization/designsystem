import type { StorybookConfig } from "@storybook/react-vite";

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
    name: "@storybook/react-vite",
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

    return config;
  },
};

export default config;
