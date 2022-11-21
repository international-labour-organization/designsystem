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
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Welcome", "Intro", "Tokens", ["Colors", "Typography"]],
      locales: "en-US",
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
  (Story) => (
    <div>
      <GlobalProvider prefix={themeprefix.value}>
        <Story />
      </GlobalProvider>
    </div>
  ),
];
