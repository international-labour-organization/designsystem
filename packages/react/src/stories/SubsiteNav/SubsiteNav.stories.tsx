import { Meta, StoryObj } from "@storybook/react";
import { SubsiteNav, SubsiteNavProps } from "../../components/Nav";
import { SubsiteNavArgs } from "./SubsiteNav.args";

const meta: Meta<typeof SubsiteNav> = {
  title: "Components/Navigation/SubsiteNav",
  component: SubsiteNav,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The SubsiteNav component displays a sub site navigation.`,
      },
    },
  },
};

const Compact: StoryObj<SubsiteNavProps> = {
  args: {
    type: "compact",
    props: SubsiteNavArgs,
  },
};

const Complex: StoryObj<SubsiteNavProps> = {
  args: {
    type: "complex",
    props: {
      ...SubsiteNavArgs,
      branding: {
        ...SubsiteNavArgs.branding,
        logo: {
          ...SubsiteNavArgs.branding.logo,
          main: <img src="/ilo-live-logo-en-dark.png" alt="Logo" />,
          mobile: <img src="/ilo-live-logo-en-light.png" alt="Logo" />,
        },
        tag: {
          main: "Live events that shape the future of work",
          sub: "The official livestream platform of the ILO",
        },
      },
    },
  },
};

export default meta;
export { Compact, Complex };
