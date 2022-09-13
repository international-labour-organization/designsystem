import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from "@storybook/addon-docs";
import { Button } from "../components/Button";
import { ButtonProps } from "../components/Button/Button.props";
import buttonArgs from "../components/Button/Button.args";

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
| \`alert\` | Button type for an alert button. |
`;

/**
 * Button Story
 *
 */
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The button component creates either an HTML button, or an anchor
            link styled like a button.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>Theme Prop</Subheading>
          <Description>{themeDoc}</Description>
          <Subheading>Type Prop</Subheading>
          <Description>{typeDoc}</Description>
          <Stories title="Examples"></Stories>
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
const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

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
 * Secondary Button Instance
 *
 */
export const SecondaryButtonM = ButtonTemplate.bind({});

/**
 * Tertiary Button Instance
 *
 */
export const TertiaryButtonM = ButtonTemplate.bind({});

/**
 * Secondary Button Instance
 *
 */
export const SecondaryButtonSm = ButtonTemplate.bind({});

/**
 * Tertiary Button Instance
 *
 */
export const TertiaryButtonSm = ButtonTemplate.bind({});

/**
 * Disabled Button Instance
 *
 */
export const DisabledButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Left Instance
 *
 */
export const LgIconLeftButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Left Instance
 *
 */
export const MIconLeftButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Left Instance
 *
 */
export const SmIconLeftButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Right Instance
 *
 */
export const LgIconRightButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Right Instance
 *
 */
export const MIconRightButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Right Instance
 *
 */
export const SmIconRightButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Left Instance
 *
 */
export const LgSecondaryIconLeftButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Left Instance
 *
 */
export const MSecondaryIconLeftButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Left Instance
 *
 */
export const SmSecondaryIconLeftButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Right Instance
 *
 */
export const LgSecondaryIconRightButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Right Instance
 *
 */
export const MSecondaryIconRightButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Right Instance
 *
 */
export const SmSecondaryIconRightButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Left Instance
 *
 */
export const LgTertiaryIconLeftButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Left Instance
 *
 */
export const MTertiaryIconLeftButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Left Instance
 *
 */
export const SmTertiaryIconLeftButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Right Instance
 *
 */
export const LgTertiaryIconRightButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Right Instance
 *
 */
export const MTertiaryIconRightButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Right Instance
 *
 */
export const SmTertiaryIconRightButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Left Instance
 *
 */
export const LgAlertIconLeftButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Left Instance
 *
 */
export const MAlertIconLeftButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Left Instance
 *
 */
export const SmAlertIconLeftButton = ButtonTemplate.bind({});

/**
 * Large Button With Icon on the Right Instance
 *
 */
export const LgAlertIconRightButton = ButtonTemplate.bind({});

/**
 * Medium Button With Icon on the Right Instance
 *
 */
export const MAlertIconRightButton = ButtonTemplate.bind({});

/**
 * Small Button With Icon on the Right Instance
 *
 */
export const SmAlertIconRightButton = ButtonTemplate.bind({});

/**
 * Secondary Button Instance
 *
 */
export const ButtonAlertM = ButtonTemplate.bind({});

/**
 * Tertiary Button Instance
 *
 */
export const ButtonAlertSm = ButtonTemplate.bind({});

// enumerate the props for the large button
BaseButton.args = buttonArgs.large;
BaseButton.args.url = "#";
BaseButton.storyName = "Large Button";

// enumerate the props for the medium button
MediumButton.args = buttonArgs.medium;
MediumButton.args.url = "#";
MediumButton.storyName = "Medium Button";

// enumerate the props for the small button
SmallButton.args = buttonArgs.small;
SmallButton.args.url = "#";
SmallButton.storyName = "Small Button";

// enumerate the props for the primary button
PrimaryButton.args = buttonArgs.primary;
PrimaryButton.args.url = "";
PrimaryButton.storyName = "Primary Button";

// enumerate the props for the secondary button
SecondaryButton.args = buttonArgs.secondary;
SecondaryButton.args.url = "";
SecondaryButton.storyName = "Secondary Button";

// enumerate the props for the tertiary button
TertiaryButton.args = buttonArgs.tertiary;
TertiaryButton.args.url = "";
TertiaryButton.storyName = "Tertiary Button";

// enumerate the props for the secondary button
SecondaryButtonM.args = buttonArgs.secondarym;
SecondaryButtonM.args.url = "";
SecondaryButtonM.storyName = "Secondary Medium";

// enumerate the props for the tertiary button
TertiaryButtonM.args = buttonArgs.tertiarym;
TertiaryButtonM.args.url = "";
TertiaryButtonM.storyName = "Tertiary Medium";

// enumerate the props for the secondary button
SecondaryButtonSm.args = buttonArgs.secondarysm;
SecondaryButtonSm.args.url = "";
SecondaryButtonSm.storyName = "Secondary Small";

// enumerate the props for the tertiary button
TertiaryButtonSm.args = buttonArgs.tertiarysm;
TertiaryButtonSm.args.url = "";
TertiaryButtonSm.storyName = "Tertiary Small";

// enumerate the props for the tertiary button
ButtonAlertM.args = buttonArgs.alertm;
ButtonAlertM.args.url = "";
ButtonAlertM.storyName = "Alert Medium";

// enumerate the props for the secondary button
ButtonAlertSm.args = buttonArgs.alertsm;
ButtonAlertSm.args.url = "";
ButtonAlertSm.storyName = "Alert Small";

// enumerate the props for a disabled button
DisabledButton.args = buttonArgs.disabled;
DisabledButton.args.url = "";
DisabledButton.storyName = "Disabled Button";

// enumerate the props for a large primary icon left button
LgIconLeftButton.args = buttonArgs.iconleftlgprimary;
LgIconLeftButton.args.url = "";
LgIconLeftButton.storyName = "Large Primary Button with icon on left";

// enumerate the props for a medium primary icon left button
MIconLeftButton.args = buttonArgs.iconleftmprimary;
MIconLeftButton.args.url = "";
MIconLeftButton.storyName = "Medium Primary Button with icon on left";

// enumerate the props for a small primary icon left button
SmIconLeftButton.args = buttonArgs.iconleftsmprimary;
SmIconLeftButton.args.url = "";
SmIconLeftButton.storyName = "Small Primary Button with icon on left";

// enumerate the props for a large primary icon right button
LgIconRightButton.args = buttonArgs.iconrightlgprimary;
LgIconRightButton.args.url = "";
LgIconRightButton.storyName = "Large Primary Button with icon on right";

// enumerate the props for a medium primary icon right button
MIconRightButton.args = buttonArgs.iconrightmprimary;
MIconRightButton.args.url = "";
MIconRightButton.storyName = "Medium Primary Button with icon on right";

// enumerate the props for a small primary icon right button
SmIconRightButton.args = buttonArgs.iconrightsmprimary;
SmIconRightButton.args.url = "";
SmIconRightButton.storyName = "Small Primary Button with icon on right;";

// enumerate the props for a large secondary icon left button
LgSecondaryIconLeftButton.args = buttonArgs.iconleftlgsecondary;
LgSecondaryIconLeftButton.args.url = "";
LgSecondaryIconLeftButton.storyName =
  "Large Secondary Button with icon on left";

// enumerate the props for a medium secondary icon left button
MSecondaryIconLeftButton.args = buttonArgs.iconleftmsecondary;
MSecondaryIconLeftButton.args.url = "";
MSecondaryIconLeftButton.storyName =
  "Medium Secondary Button with icon on left";

// enumerate the props for a small secondary icon left button
SmSecondaryIconLeftButton.args = buttonArgs.iconleftsmsecondary;
SmSecondaryIconLeftButton.args.url = "";
SmSecondaryIconLeftButton.storyName =
  "Small Secondary Button with icon on left";

// enumerate the props for a large secondary icon right button
LgSecondaryIconRightButton.args = buttonArgs.iconrightlgsecondary;
LgSecondaryIconRightButton.args.url = "";
LgSecondaryIconRightButton.storyName =
  "Large Secondary Button with icon on right";

// enumerate the props for a medium secondary icon right button
MSecondaryIconRightButton.args = buttonArgs.iconrightmsecondary;
MSecondaryIconRightButton.args.url = "";
MSecondaryIconRightButton.storyName =
  "Medium Secondary Button with icon on right";

// enumerate the props for a small secondary icon right button
SmSecondaryIconRightButton.args = buttonArgs.iconrightsmsecondary;
SmSecondaryIconRightButton.args.url = "";
SmSecondaryIconRightButton.storyName =
  "Small Secondary Button with icon on right;";

// enumerate the props for a large tertiary icon left button
LgTertiaryIconLeftButton.args = buttonArgs.iconleftlgtertiary;
LgTertiaryIconLeftButton.args.url = "";
LgTertiaryIconLeftButton.storyName = "Large Tertiary Button with icon on left";

// enumerate the props for a medium tertiary icon left button
MTertiaryIconLeftButton.args = buttonArgs.iconleftmtertiary;
MTertiaryIconLeftButton.args.url = "";
MTertiaryIconLeftButton.storyName = "Medium Tertiary Button with icon on left";

// enumerate the props for a small tertiary icon left button
SmTertiaryIconLeftButton.args = buttonArgs.iconleftsmtertiary;
SmTertiaryIconLeftButton.args.url = "";
SmTertiaryIconLeftButton.storyName = "Small Tertiary Button with icon on left";

// enumerate the props for a large tertiary icon right button
LgTertiaryIconRightButton.args = buttonArgs.iconrightlgtertiary;
LgTertiaryIconRightButton.args.url = "";
LgTertiaryIconRightButton.storyName =
  "Large Tertiary Button with icon on right";

// enumerate the props for a medium tertiary icon right button
MTertiaryIconRightButton.args = buttonArgs.iconrightmtertiary;
MTertiaryIconRightButton.args.url = "";
MTertiaryIconRightButton.storyName =
  "Medium Tertiary Button with icon on right";

// enumerate the props for a small tertiary icon right button
SmTertiaryIconRightButton.args = buttonArgs.iconrightsmtertiary;
SmTertiaryIconRightButton.args.url = "";
SmTertiaryIconRightButton.storyName =
  "Small Tertiary Button with icon on right;";

// enumerate the props for a large alert icon left button
LgAlertIconLeftButton.args = buttonArgs.iconleftlgalert;
LgAlertIconLeftButton.args.url = "";
LgAlertIconLeftButton.storyName = "Large Alert Button with icon on left";

// enumerate the props for a medium alert icon left button
MAlertIconLeftButton.args = buttonArgs.iconleftmalert;
MAlertIconLeftButton.args.url = "";
MAlertIconLeftButton.storyName = "Medium Alert Button with icon on left";

// enumerate the props for a small alert icon left button
SmAlertIconLeftButton.args = buttonArgs.iconleftsmalert;
SmAlertIconLeftButton.args.url = "";
SmAlertIconLeftButton.storyName = "Small Alert Button with icon on left";

// enumerate the props for a large alert icon right button
LgAlertIconRightButton.args = buttonArgs.iconrightlgalert;
LgAlertIconRightButton.args.url = "";
LgAlertIconRightButton.storyName = "Large Alert Button with icon on right";

// enumerate the props for a medium alert icon right button
MAlertIconRightButton.args = buttonArgs.iconrightmalert;
MAlertIconRightButton.args.url = "";
MAlertIconRightButton.storyName = "Medium Alert Button with icon on right";

// enumerate the props for a small alert icon right button
SmAlertIconRightButton.args = buttonArgs.iconrightsmalert;
SmAlertIconRightButton.args.url = "";
SmAlertIconRightButton.storyName = "Small Alert Button with icon on right;";
