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
          main: (
            <img
              src="/logo_en_horizontal_blue_dark.svg"
              alt="Logo"
              width={200}
            />
          ),
          mobile: (
            <img src="/logo_en_horizontal_white.svg" alt="Logo" width={105} />
          ),
        },
        tag: {
          main: "Advancing social justice, promoting decent work",
          sub: "ILO is a specialized agency of the United Nations",
        },
      },
    },
  },
};

export default meta;
export { Compact, Complex };
