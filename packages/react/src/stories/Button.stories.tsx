import React from "react";
import { Meta, Story } from "@storybook/react";
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

const mainDoc = `
### Usage
Buttons are used primarily on action items (for actions like submitting a form, or triggering open a modal) that do not navigate the user to another page or view, though sometimes an anchor element may be styled as a button. (See below regarding the \`url\` prop).
`;

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

const iconDoc = `
By changing the \`icon\` and \`iconPosition\` props you can set the icon to use, and set its position in the button. Additonally, you can set the \`icononly\` prop to \`true\` if you want the button's label to be visually hidden.

| Prop   |  Description  |
|----------|-------------|
| \`icon\` | Sets the icon. Must match the name of an icon in the @ilo-org icons package. |
| \`iconPosition\` | left or right. On which side of the label does the icon display? |
| \`icononly\` | Boolean. If true, no label is shown visually (though one is still provided to screen readers). |
`;

const hrefDoc = `
Populating the \`url\` prop with a valid url and/or an anchor to an id in the current document (e.g. \`#my-id\`) will result in the same design being displayed, but "under the hood," in the html, an \`<a>\` element will be used, allowing link functionality. When this is populated, the \`target\` prop is also read. Populating this, sets the \`target\` attribute of the anchor tag, which opens the link url in a new tab or window.

| Prop   |  Description  |
|----------|-------------|
| \`url\` | Should be a valid url or anchor in the page. |
| \`target\` | Should be a valid value for the anchor tag's target attribute. |
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
          <Description>{mainDoc}</Description>
          <Primary />
          <ArgsTable />
          <Subheading>Theme Prop</Subheading>
          <Description>{themeDoc}</Description>
          <Subheading>Type Prop</Subheading>
          <Description>{typeDoc}</Description>
          <Subheading>Icon Props</Subheading>
          <Description>{iconDoc}</Description>
          <Subheading>Link Props</Subheading>
          <Description>{hrefDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Button>;

/**
 * Base Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Array) - props to be passed to the component
 */
const BaseButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

/**
 * Base Button Instance
 *
 */
export const A_BaseButton = BaseButtonTemplate.bind({});
// enumerate the props for the base button
// @ts-ignore
A_BaseButton.args = buttonArgs.primary;
A_BaseButton.storyName = "Default Button";

/**
 * Primary Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Object) - props to be passed to the component
 */
const PrimaryButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    {primarybuttons.map((button, i) => (
      <React.Fragment key={i}>
        <Button
          {...args}
          label={button.label}
          size={button.size}
          target={button.target}
          kind={button.kind}
          disabled={button.disabled}
          type={button.type}
          url={button.url}
          icon={button.icon}
          icononly={button.icononly}
          iconPosition={button.iconPosition}
        />
      </React.Fragment>
    ))}
    <Button {...primarybuttons[0]} label={`Disabled Primary`} disabled={true} />
  </>
);

/**
 * Primary Button Instance
 *
 */
export const B_PrimaryButton = PrimaryButtonTemplate.bind({});
const primarybuttons = [
  buttonArgs.primary,
  buttonArgs.iconleftlgprimary,
  buttonArgs.iconrightlgprimary,
  buttonArgs.icononlylgprimary,
  buttonArgs.medium,
  buttonArgs.iconleftmprimary,
  buttonArgs.iconrightmprimary,
  buttonArgs.icononlymprimary,
  buttonArgs.small,
  buttonArgs.iconleftsmprimary,
  buttonArgs.iconrightsmprimary,
  buttonArgs.icononlysmprimary,
];
// @ts-ignore
B_PrimaryButton.storyName = "Primary Button";
B_PrimaryButton.parameters = {
  docs: {
    description: {
      story:
        "Primary buttons are the default button style, most-often used. They usually indicate positive action.",
    },
  },
};

/**
 * Secondary Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Object) - props to be passed to the component
 */
const SecondaryButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    {secondarybuttons.map((button, i) => (
      <React.Fragment key={i}>
        <Button
          {...args}
          label={button.label}
          size={button.size}
          target={button.target}
          kind={button.kind}
          disabled={button.disabled}
          type={button.type}
          url={button.url}
          icon={button.icon}
          icononly={button.icononly}
          iconPosition={button.iconPosition}
        />
      </React.Fragment>
    ))}
    <Button
      {...secondarybuttons[0]}
      label={`Disabled Secondary`}
      disabled={true}
    />
  </>
);

/**
 * Medium Button Instance
 *
 */
export const C_SecondaryButton = SecondaryButtonTemplate.bind({});

const secondarybuttons = [
  buttonArgs.secondary,
  buttonArgs.iconleftlgsecondary,
  buttonArgs.iconrightlgsecondary,
  buttonArgs.icononlylgsecondary,
  buttonArgs.secondarym,
  buttonArgs.iconleftmsecondary,
  buttonArgs.iconrightmsecondary,
  buttonArgs.icononlymsecondary,
  buttonArgs.secondarysm,
  buttonArgs.iconleftsmsecondary,
  buttonArgs.iconrightsmsecondary,
  buttonArgs.icononlysmsecondary,
];
C_SecondaryButton.storyName = "Secondary Button";
C_SecondaryButton.parameters = {
  docs: {
    description: {
      story:
        "Secondary buttons are usually seen alongside Primary buttons when there are two action options, especially a positive and a negative option (e.g. a Cancel button next to a Submit button) or when there is a hierarchy of action (for example, the File Upload button in a form is a Secondary Button and the Submit button is a Primary button).",
    },
  },
};

/**
 * Tertiary Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Object) - props to be passed to the component
 */
const TertiaryButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    {tertiarybuttons.map((button, i) => (
      <React.Fragment key={i}>
        <Button
          {...args}
          label={button.label}
          size={button.size}
          target={button.target}
          kind={button.kind}
          disabled={button.disabled}
          type={button.type}
          url={button.url}
          icon={button.icon}
          icononly={button.icononly}
          iconPosition={button.iconPosition}
        />
      </React.Fragment>
    ))}
    <Button
      {...tertiarybuttons[0]}
      label={`Disabled Tertiary`}
      disabled={true}
    />
  </>
);

/**
 * Tertiary Button Instance
 *
 */
export const D_TertiaryButton = TertiaryButtonTemplate.bind({});

const tertiarybuttons = [
  buttonArgs.tertiary,
  buttonArgs.iconleftlgtertiary,
  buttonArgs.iconrightlgtertiary,
  buttonArgs.icononlylgtertiary,
  buttonArgs.tertiarym,
  buttonArgs.iconleftmtertiary,
  buttonArgs.iconrightmtertiary,
  buttonArgs.icononlymtertiary,
  buttonArgs.tertiarysm,
  buttonArgs.iconleftsmtertiary,
  buttonArgs.iconrightsmtertiary,
  buttonArgs.icononlysmtertiary,
];
D_TertiaryButton.storyName = "Tertiary Button";
D_TertiaryButton.parameters = {
  docs: {
    description: {
      story:
        "Tertiary buttons are used when the action taken is not of primary importance to the component functionality, especially when the action is optional (for example, the call to action in a Callout component).",
    },
  },
};

/**
 * Alert Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Object) - props to be passed to the component
 */
const AlertButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    {alertbuttons.map((button, i) => (
      <React.Fragment key={i}>
        <Button
          {...args}
          label={button.label}
          size={button.size}
          target={button.target}
          kind={button.kind}
          disabled={button.disabled}
          type={button.type}
          url={button.url}
          icon={button.icon}
          icononly={button.icononly}
          iconPosition={button.iconPosition}
        />
      </React.Fragment>
    ))}
    <Button {...alertbuttons[0]} label={`Disabled Alert`} disabled={true} />
  </>
);

/**
 * Alert Button Instance
 *
 */
export const E_AlertButton = AlertButtonTemplate.bind({});

const alertbuttons = [
  buttonArgs.alert,
  buttonArgs.iconleftlgalert,
  buttonArgs.iconrightlgalert,
  buttonArgs.icononlylgalert,
  buttonArgs.alertm,
  buttonArgs.iconleftmalert,
  buttonArgs.iconrightmalert,
  buttonArgs.icononlymalert,
  buttonArgs.alertsm,
  buttonArgs.iconleftsmalert,
  buttonArgs.iconrightsmalert,
  buttonArgs.icononlysmalert,
];
E_AlertButton.storyName = "Alert Button";
E_AlertButton.parameters = {
  docs: {
    description: {
      story:
        "Alert buttons are used when the action resolves an emergecny or responds to an alert.",
    },
  },
};
