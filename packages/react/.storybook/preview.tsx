import { GlobalProvider } from "../src/components/GlobalProvider";
import { themeprefix } from "@ilo-org/themes/tokens/theme/base.json";
import { Decorator } from "@storybook/react";
import { theme } from "./theme";
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
      order: ["Introduction", "GettingStarted"],
      locales: "en-US",
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
    canvas: { title: "Code", hidden: false },
  },
  viewMode: "docs",
  docs: {
    theme: theme,
    source: {
      excludeDecorators: true,
    },
  },
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
    // Should this story be rendered in full width?
    const fullWidthStories = ["footer", "localnav", "navigation"];
    const isFullWidth = fullWidthStories.some((story) =>
      ctx.title.toLocaleLowerCase().includes(story)
    );

    if (ctx.viewMode === "story") {
      if (isFullWidth) {
        return (
          <div className="story-decorator-wrapper full-width-wrapper">
            <Story />
          </div>
        );
      }

      return (
        <div className="story-decorator-wrapper ">
          <div className="story-decorator">
            <Story />
          </div>
        </div>
      );
    }
    return <Story />;
  },
];
