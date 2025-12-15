import "@ilo-org/fonts/font-css/fonts.css";
import "@ilo-org/fonts/font-css/fonts-ar.css";
import "@ilo-org/fonts/font-css/fonts-google.css";
import "@ilo-org/styles/scss/index.scss";
import "@ilo-org/styles/scss/global.scss";
import { BehaviorDecorator } from "@ilo-org/maestro/storybook";
import "./styles.scss";

/** @type { import('@storybook/html').Preview } */
const preview = {
  globalTypes: {
    locale: {
      description: "Locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "ar", title: "Arabic" },
          { value: "zh", title: "Chinese" },
          { value: "ja", title: "Japanese" },
          { value: "ru", title: "Russian" },
        ],
      },
    },
    dir: {
      description: "Direction",
      toolbar: {
        icon: "transfer",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL" },
        ],
      },
    },
  },
  initialGlobals: {
    locale: "en",
    dir: "ltr",
  },
  decorators: [
    BehaviorDecorator,
    (Story, context) => {
      const wrapper = document.createElement("div");

      if (context.globals.locale) {
        wrapper.lang = context.globals.locale;
      }

      if (context.globals.dir) {
        wrapper.dir = context.globals.dir;
      }

      document.dir = context.globals.dir || "ltr";

      wrapper.appendChild(Story());

      return wrapper;
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          "ILO Design System for Twig",
          "Get started",
          ["Introduction", "Base Theme", "Custom Theme", "Changelog"],
          "Examples",
          "Components",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
