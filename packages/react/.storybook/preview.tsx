import { GlobalProvider } from "../src/components/GlobalProvider";
import { themeprefix } from "@ilo-org/themes/tokens/theme/base.json";
import { Preview } from "@storybook/react";
import theme from "./theme";
import "./styles.scss";
import { brand } from "@ilo-org/themes/tokens/brand/base.json";

const preview: Preview = {
  decorators: [
    (Story) => (
      <GlobalProvider prefix={themeprefix.value}>
        <Story />
      </GlobalProvider>
    ),
    // Wraps components in story mode
    (Story, ctx) => {
      // Should this story be rendered in full width?
      const fullWidthStories = ["footer", "localnav", "navigation", "hero"];
      const isFullWidth = fullWidthStories.some((story) =>
        ctx.title.toLocaleLowerCase().includes(story)
      );

      if (ctx.viewMode === "story") {
        if (isFullWidth) {
          return <Story />;
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
