import { GlobalProvider } from "../src/components/GlobalProvider";
import { Preview } from "@storybook/react";
import "./styles.scss";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <GlobalProvider prefix="ilo">
        <Story />
      </GlobalProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "ILO Design System for React",
          "Getting Started",
          ["Introduction"],
          "Components",
        ],
        locales: "en-US",
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: "white" },
        { name: "dark", value: "rgba(35, 0, 80, 1)" }, // --ilo-color-blue-dark
      ],
    },
    previewTabs: {
      "storybook/docs/panel": { index: -1 },
      canvas: { title: "Code", hidden: false },
    },
    viewMode: "docs",
    layout: "padded",
  },
};

export default preview;
