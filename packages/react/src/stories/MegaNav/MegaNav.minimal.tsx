import { StoryObj } from "@storybook/react-vite";

import { MegaNav } from "../../components/MegaNav";

import { MegaNavArgs } from "./MegaNav.args";
import { MegaNavItems } from "./MegaNav.items";

const MinimalStory: StoryObj<typeof MegaNav.Root> = {
  parameters: {
    docs: {
      description: {
        story:
          "The leanest shell: the bar and the menu only, no top area, search or mobile drawer.",
      },
    },
  },
  render: () => (
    <MegaNav.Root labels={MegaNavArgs.labels}>
      <MegaNav.Bar>
        <MegaNav.Menu>{MegaNavItems}</MegaNav.Menu>
      </MegaNav.Bar>
    </MegaNav.Root>
  ),
};

export { MinimalStory };
