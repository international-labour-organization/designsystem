import { Meta } from "@storybook/react";
import { LinkList, LinkListProps } from "../../components/LinkList";

const meta: Meta<typeof LinkList> = {
  title: "Components/Navigation/LinkList",
  component: LinkList,
  tags: ["autodocs"],
};

const Default: Meta<LinkListProps> = {
  args: {
    headline: "Link List Headline",
    linkgroup: [
      {
        headline: "Section Headline",
        links: [
          { label: "Link One", url: "http://www.google.com" },
          { label: "Link Two", url: "http://www.google.com" },
          { label: "Link Three", url: "http://www.google.com" },
          { label: "Link Four", url: "http://www.google.com" },
          {
            label: "Link Five Is Slightly Longer",
            url: "http://www.google.com",
          },
        ],
      },
      {
        headline: "Section 2 (With Indents)",
        links: [
          { label: "Section 2 Link One", url: "http://www.google.com" },
          {
            indented: true,
            label: "Section 2 Link Two",
            url: "http://www.google.com",
          },
          {
            indented: true,
            label: "Section 2 Link Three",
            url: "http://www.google.com",
          },
          {
            indented: true,
            label: "Section 2 Link Four",
            url: "http://www.google.com",
          },
          {
            label: "Section 2 Link Five Is Slightly Longer",
            url: "http://www.google.com",
          },
        ],
      },
    ],
  },
};

export default meta;
export { Default };
