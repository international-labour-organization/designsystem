import { GlobalProvider } from "../src/components/GlobalProvider";
import { Preview } from "@storybook/react";
import { SyntaxHighlighter } from "@storybook/components";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import "./styles.scss";
import React from "react";

// Storybook's docs highlighter only registers a handful of languages out of
// the box; scss is not one of them, so the ```scss fences in the MDX docs
// render as plain text without this.
SyntaxHighlighter.registerLanguage("scss", scss);

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
          "Getting started",
          ["Introduction", "Installation", "Support", "Changelog"],
          "Usage",
          ["Layouts", "Theming", "Typography", "Icons"],
          "Components",
          "Utilities",
          ["React Hooks", "SASS Helpers"],
          "Brand",
          ["Logos"],
          "Design System",
          [
            "Homepage",
            "Figma",
            "Drupal (Twig) Components",
            "React examples",
            "Drupal examples",
          ],
        ],
        locales: "en-US",
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: "white" },
        { name: "dark", value: "rgba(35, 0, 80, 1)" }, // --ilo-color-brand-800
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
