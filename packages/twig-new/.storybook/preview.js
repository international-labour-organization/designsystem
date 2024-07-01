import "@ilo-org/styles/css/index.css";
import { BehaviorDecorator } from "@ilo-org/maestro/sb";

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
