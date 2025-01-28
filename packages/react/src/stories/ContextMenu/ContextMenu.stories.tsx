import { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "../../components";
import { ContextMenuProps } from "../../components/ContextMenu";

const meta: Meta = {
  title: "Components/Navigation/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
};

const Default: StoryObj<ContextMenuProps> = {
  args: {
    links: [
      { label: "Link One", url: "http://www.google.com" },
      { label: "Link Two", url: "http://www.google.com" },
      {
        label: "Link Three Ends A Section",
        url: "http://www.google.com",
        endsection: true,
      },
      { label: "Link Four", url: "http://www.google.com" },
      { label: "Link Five Is Slightly Longer", url: "http://www.google.com" },
    ],
  },
};

export default meta;
export { Default };
