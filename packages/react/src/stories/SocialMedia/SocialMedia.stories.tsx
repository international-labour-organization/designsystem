import { Meta, StoryObj } from "@storybook/react";

import {
  SocialMedia,
  SocialMediaProps,
  socialMediaArgs,
} from "../../components/SocialMedia";

const meta: Meta<typeof SocialMedia> = {
  title: "Components/Navigation/SocialMedia",
  component: SocialMedia,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The Social Media component displays a list of social media icons.
        It can have a light or a dark theme and can be aligned to the start or center of its container.`,
      },
    },
  },
};

const Default: StoryObj<SocialMediaProps> = {
  args: socialMediaArgs,
};

export default meta;
export { Default };
