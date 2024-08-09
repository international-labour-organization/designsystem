import "@ilo-org/fonts/font-css/fonts.css";
import "@ilo-org/fonts/font-css/fonts-ar.css";
import "@ilo-org/fonts/font-css/fonts-google.css";
import "@ilo-org/styles/scss/index.scss";
import "@ilo-org/styles/scss/global.scss";
import { BehaviorDecorator } from "@ilo-org/maestro/storybook";
import "./styles.scss";

/** @type { import('@storybook/html').Preview } */
const preview = {
  decorators: [BehaviorDecorator],
  parameters: {
    options: {
      storySort: {
        order: [
          "ILO Design System for Twig",
          "Get started",
          ["Introduction"],
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
