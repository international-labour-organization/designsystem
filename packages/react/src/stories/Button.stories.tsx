import { Story, Meta } from '@storybook/react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, Subheading} from '@storybook/addon-docs';
import { Button }  from '../components/Button';
import { ButtonProps } from '../components/Button/Button.props';
import buttonArgs from '../components/Button/Button.args';

const themeDoc = `
By changing the \`size\` prop you can change the size of the button. By default this is set to \`large\`.

| Size   |  Description  |
|----------|-------------|
| \`large\` | Button theme for a large button. |
| \`medium\` | Button theme for a medium button. |
| \`small\` | Button theme for a small button. |
`;

const typeDoc = `
By changing the \`type\` prop you can change the type of the button, which affects the design of its default state. By default this is set to \`primary\`.

| Type   |  Description  |
|----------|-------------|
| \`primary\` | Button type for a primary button. |
| \`secondary\` | Button type for a secondary button. |
| \`tertiary\` | Button type for a tertiary button. |
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
          <Subheading>Type Prop</Subheading>
          <Description>
            {typeDoc}
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

/**
 * Primary Button Instance
 *
 */
export const PrimaryButton = ButtonTemplate.bind({});

/**
 * Secondary Button Instance
 *
 */
export const SecondaryButton = ButtonTemplate.bind({});

/**
 * Tertiary Button Instance
 *
 */
export const TertiaryButton = ButtonTemplate.bind({});

/**
 * Disabled Button Instance
 *
 */
export const DisabledButton = ButtonTemplate.bind({});


// enumerate the props for the large button
BaseButton.args = buttonArgs.large;
BaseButton.args.url = '#';
BaseButton.storyName = 'Large Button';

// enumerate the props for the medium button
MediumButton.args = buttonArgs.medium;
MediumButton.args.url = '#';
MediumButton.storyName = 'Medium Button';

// enumerate the props for the small button
SmallButton.args = buttonArgs.small;
SmallButton.args.url = '#';
SmallButton.storyName = 'Small Button';

// enumerate the props for the primary button
PrimaryButton.args = buttonArgs.primary;
PrimaryButton.args.url = '';
PrimaryButton.storyName = 'Primary Button';

// enumerate the props for the secondary button
SecondaryButton.args = buttonArgs.secondary;
SecondaryButton.args.url = '';
SecondaryButton.storyName = 'Secondary Button';

// enumerate the props for the tertiary button
TertiaryButton.args = buttonArgs.tertiary;
TertiaryButton.args.url = '';
TertiaryButton.storyName = 'Tertiary Button';

// enumerate the props for a disabled button
DisabledButton.args = buttonArgs.disabled;
DisabledButton.args.url = '';
DisabledButton.storyName = 'Disabled Button';