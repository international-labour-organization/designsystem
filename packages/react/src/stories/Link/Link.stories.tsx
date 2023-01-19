import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Link } from "../../components/Link";
import { LinkProps } from "../../components/Link/Link.props";

const themeDoc = `
By changing the \`theme\` prop you can change base coloring of the links. By default this is set to \`light\`.

| Theme   |  Description  |
|----------|-------------|
| \`light\` | Link theme for a light background color. |
| \`dark\` | Link theme for a dark background color. |
| \`footer\` | Link theme for a dark background color. |
`;

const LinkMeta: Meta<typeof Link> = {
  title: "Components/Navigation/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: ["light", "dark", "footer"],
      control: { type: "select" },
    },
  },
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The link component creates an anchor link with a specific theme.
          </Description>
          <Primary />
          <Subheading>Theme</Subheading>
          <Description>{themeDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default Props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default LinkMeta;

const LinkTemplate: StoryFn<LinkProps> = (args) => (
  <Link {...args}>This is text for the link</Link>
);

export const BaseLink: StoryFn<LinkProps> = LinkTemplate.bind({});

export const DarkLink: StoryFn<LinkProps> = LinkTemplate.bind({});

export const FooterLink: StoryFn<LinkProps> = LinkTemplate.bind({});

BaseLink.args = { theme: "light" };
BaseLink.args.url = "https://www.ilo.org";
BaseLink.storyName = "Light";

DarkLink.args = { theme: "dark" };
DarkLink.parameters = {
  backgrounds: { default: "dark" },
};
DarkLink.args.url = "https://www.ilo.org";
DarkLink.storyName = "Dark";

FooterLink.args = { theme: "footer" };
FooterLink.args.url = "https://www.ilo.org";
FooterLink.storyName = "Footer";
