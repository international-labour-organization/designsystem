import { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from "../../components/Link/Link";

const meta: Meta<LinkProps> = {
  title: "Components/Navigation/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A link component for navigation`,
      },
    },
  },
};

const Default: StoryObj<LinkProps> = {
  args: {
    children: "Default Link",
    url: "https://example.com",
    label: "Default Link",
    theme: "light",
  },
};

export default meta;
export { Default };
