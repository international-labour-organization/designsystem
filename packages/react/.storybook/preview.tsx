import { GlobalProvider } from "../src/components/GlobalProvider";
import { themeprefix } from "@ilo-org/themes/tokens/theme/base.json";
import { Preview } from "@storybook/react";
import theme from "./theme";
import "./styles.scss";
import { brand } from "@ilo-org/themes/tokens/brand/base.json";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <GlobalProvider prefix={themeprefix.value}>
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
        order: ["ILO Design System for React", "Getting Started"],
        locales: "en-US",
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: "white" },
        { name: "dark", value: brand["ilo-dark-blue"].value },
      ],
    },
    previewTabs: {
      "storybook/docs/panel": { index: -1 },
      canvas: { title: "Code", hidden: false },
    },
    viewMode: "docs",
    layout: "padded",
    docs: {
      theme: theme,
      source: {
        excludeDecorators: true,
      },
    },
  },
};

export default preview;
