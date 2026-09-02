import { GlobalProvider } from "../src/components/GlobalProvider";
import { Preview } from "@storybook/react-vite";
import { SyntaxHighlighter } from "storybook/internal/components";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import "./styles.scss";
import React, { useEffect } from "react";

SyntaxHighlighter.registerLanguage("scss", scss);

const preview: Preview = {
  globalTypes: {
    textDirection: {
      description: "Text direction of the preview",
    },
  },
  decorators: [
    (Story, context) => {
      const direction = context.globals.textDirection ?? "ltr";
      context.canvasElement.dir = direction;

      // Portalled components render into document.body, outside the canvas
      // so the direction also has to be set on the preview document root.
      useEffect(() => {
        document.documentElement.dir = direction;
      }, [direction]);

      return <Story />;
    },
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
      options: {
        light: { name: "light", value: "white" },

        // --ilo-color-brand-800
        dark: { name: "dark", value: "rgba(35, 0, 80, 1)" },
      },
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
