import React from "react";
import type { DecoratorFn } from "@storybook/react";
import { GlobalProvider } from "../src/components/GlobalProvider";
import { themeprefix } from "@ilo-org/themes/tokens/theme/base.json";
import "./styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    layout: "centered",
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
    canvas: { title: "Code", hidden: false },
  },
  viewMode: "docs",
};

export const decorators: DecoratorFn[] = [
  (Story, { globals }) => (
    <div style={{ margin: "3em" }}>
      <GlobalProvider prefix={themeprefix.value}>
        <Story />
      </GlobalProvider>
    </div>
  ),
];
