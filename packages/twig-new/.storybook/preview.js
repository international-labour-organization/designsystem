import "@ilo-org/styles/css/index.css";
import { DrupalDecorator } from "./decorators/drupal";

/** @type { import('@storybook/html').Preview } */
const preview = {
  decorators: [DrupalDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
