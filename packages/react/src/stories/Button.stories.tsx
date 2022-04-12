import { Story, Meta } from '@storybook/react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, Subheading} from '@storybook/addon-docs';
import { Button }  from '../components/Button';
import { ButtonProps } from '../components/Button/Button.props';
import buttonArgs from '../components/Button/Button.args';

const themeDoc = `
By changing the \`theme\` prop you can change the size ofm the button. By default this is set to \`large\`.

| Theme   |  Description  |
|----------|-------------|
| \`large\` | Button theme for a large button. |
| \`medium\` | Button theme for a medium button. |
| \`small\` | Button theme for a small button. |
`;

/**
 * Button Story
 *
 */
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Component',
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
          The button component creates either an HTML button, or an anchor link styled like a button.
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
} as Meta<typeof Button>;

/**
 * Button Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const ButtonTemplate: Story<ButtonProps> = (args) => (
  <Button {...args} />
);


/**
 * Large Button Instance
 *
 */
 export const BaseButton = ButtonTemplate.bind({});

/**
 * Medium Button Instance
 *
 */
export const MediumButton = ButtonTemplate.bind({});

/**
 * Small Button Instance
 *
 */
export const SmallButton = ButtonTemplate.bind({});

// enumerate the props for the large button
BaseButton.args = buttonArgs.large;
BaseButton.args.url = '#';
BaseButton.storyName = 'Large Button';

// enumerate the props for the large button
MediumButton.args = buttonArgs.medium;
MediumButton.args.url = '#';
MediumButton.storyName = 'Medium Button';

// enumerate the props for the large button
SmallButton.args = buttonArgs.small;
SmallButton.args.url = '#';
SmallButton.storyName = 'Small Button';