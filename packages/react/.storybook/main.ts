import sass from "sass";

export const core = {
  disableTelemetry: true,
  builder: "@storybook/builder-vite",
};

export const framework = {
  name: "@storybook/react-vite",
};

export const stories = [
  "../src/stories/**/*.mdx",
  "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
];

export const docs = {
  defaultName: "Overview",
  autodocs: "tag",
};

export const staticDirs = [
  "../public",
  { from: "../node_modules/@ilo-org/fonts/font-css", to: "/fonts" },
];

export const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-a11y",
  "@storybook/addon-styling",
];

export const typescript = {
  reactDocgen: "react-docgen-typescript",
  reactDocgenTypescriptOptions: {
    compilerOptions: {
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
    },
  },
};
