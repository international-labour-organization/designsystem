import "@ilo-org/styles/scss/index.scss";
import "@ilo-org/styles/scss/global.scss";
import { BehaviorDecorator } from "@ilo-org/maestro/storybook";

/** @type { import('@storybook/html').Preview } */
const preview = {
  decorators: [BehaviorDecorator],
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
