import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, Subheading} from '@storybook/addon-docs';
import { Link }  from '../components/Link';
import { LinkProps } from '../components/Link/Link.props';
import linkArgs from '../components/Link/Link.args';

const themeDoc = `
By changing the \`theme\` prop you can change base coloring of the links. By default this is set to \`light\`.

| Theme   |  Description  |
|----------|-------------|
| \`light\` | Link theme for a light background color. |
| \`dark\` | Link theme for a dark background color. |
`;

/**
 * Accordion Story
 *
 */
export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Component',
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
          The link component creates an anchor link with a specific theme.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>Theme Prop</Subheading>
          <Description>
            {themeDoc}
          </Description>
          <Stories title="Examples">
          </Stories>
        </>
      ),
    },
  },
} as Meta<typeof Link>;

/**
 * Light Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const LightTemplate: Story<LinkProps> = (args) => (
  <Link {...linkArgs.light}>
    This is text for the link
  </Link>
);

/**
 * Dark Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
 const DarkTemplate: Story<LinkProps> = (args) => (
  <Link {...linkArgs.dark}>
    This is text for the link
  </Link>
);

/**
 * Light Link Instance
 *
 */
 export const BaseLink = LightTemplate.bind({});

/**
 * Dark Link Instance
 *
 */
export const DarkLink = DarkTemplate.bind({});

// enumerate the props for the light link.
BaseLink.args = linkArgs.light;
BaseLink.args.url = 'https://www.google.com/';
BaseLink.storyName = 'Light Link';

// enumerate the props dark link
DarkLink.args = linkArgs.dark;
DarkLink.parameters = {
  backgrounds: {default: 'dark'},
};
DarkLink.args.url = 'https://www.wikipedia.org/';
DarkLink.storyName = 'Dark Link';