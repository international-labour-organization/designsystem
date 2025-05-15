import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { BreadcrumbProps } from "../../components/Breadcrumb/Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Navigation/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
  },
};

const Default: StoryObj<BreadcrumbProps> = {
  args: {
    buttonLabel: "More Links",
    links: [
      { label: "Link One", url: "http://ilo.org" },
      { label: "Link Two", url: "http://ilo.org" },
      { label: "Link Three", url: "http://ilo.org" },
      { label: "Link Four", url: "http://ilo.org" },
      { label: "Link Five", url: "http://ilo.org" },
      { label: "Link Five", url: "http://ilo.org" },
    ],
  },
};

export default meta;
export { Default };
