import { GlobalProvider } from "../src/components/GlobalProvider";
import { themeprefix } from "@ilo-org/themes/tokens/theme/base.json";
import "./styles.scss";
import { Decorator } from "@storybook/react";

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
      order: ["Introduction", "GettingStarted"],
      locales: "en-US",
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
    canvas: { title: "Code", hidden: false },
  },
  viewMode: "docs",
};

export const decorators: Decorator[] = [
  // Providces the GlobalProvider context to all stories
  (Story) => (
    <GlobalProvider prefix={themeprefix.value}>
      <Story />
    </GlobalProvider>
  ),
  // Wraps components in story mode
  (Story, ctx) => {
    if (ctx.viewMode === "story") {
      return (
        <div className="story-decorator-wrapper">
          <div className="story-decorator">
            <Story />
          </div>
        </div>
      );
    }
    return <Story />;
  },
];
