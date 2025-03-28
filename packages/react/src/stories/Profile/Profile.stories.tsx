import { Meta, StoryObj } from "@storybook/react";

import { Profile, ProfileProps } from "../../components/Profile";

const meta: Meta<typeof Profile> = {
  title: "Components/Content/Profile",
  component: Profile,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Profile component is used to display information about a person.",
      },
    },
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["light", "dark"],
    },
  },
};

const Default: StoryObj<ProfileProps> = {
  args: {
    avatar: "/ilo-dg.jpg",
    className: "storybook",
    name: "Gilbert F. Houngbo",
    description:
      "Gilbert F. Houngbo was elected as the ILO’s 11th Director-General by the organization’s Governing Body in March 2022.",
    link: {
      label: "Learn more",
      url: "https://www.ilo.org",
    },
    role: "ILO Director-General",
  },
};

export default meta;
export { Default };
