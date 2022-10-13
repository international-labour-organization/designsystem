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
export const BaseButton = BaseButtonTemplate.bind({});
// enumerate the props for the base button
// @ts-ignore
BaseButton.args = buttonArgs.primary;

/**
 * Large Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Object) - props to be passed to the component
 */
const LargeButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    {largebuttons.map((button, i) => (
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
  </>
);

/**
 * Large Button Instance
 *
 */
export const LargeButton = LargeButtonTemplate.bind({});
const largebuttons = [
  buttonArgs.primary,
  buttonArgs.secondary,
  buttonArgs.tertiary,
  buttonArgs.alert,
  buttonArgs.disabled,
  buttonArgs.iconleftlgprimary,
  buttonArgs.iconleftlgsecondary,
  buttonArgs.iconleftlgtertiary,
  buttonArgs.iconleftlgalert,
  buttonArgs.iconrightlgprimary,
  buttonArgs.iconrightlgsecondary,
  buttonArgs.iconrightlgtertiary,
  buttonArgs.iconrightlgalert,
  buttonArgs.icononlylgprimary,
  buttonArgs.icononlylgsecondary,
  buttonArgs.icononlylgtertiary,
  buttonArgs.icononlylgalert,
];
// @ts-ignore
LargeButton.storyName = "Large Button";
LargeButton.parameters = {
  docs: {
    description: {
      story: "Large buttons should be used ",
    },
  },
};

/**
 * Medium Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Object) - props to be passed to the component
 */
const MediumButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    {mediumbuttons.map((button, i) => (
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
  </>
);

/**
 * Medium Button Instance
 *
 */
export const MediumButton = MediumButtonTemplate.bind({});

const mediumbuttons = [
  buttonArgs.medium,
  buttonArgs.secondarym,
  buttonArgs.tertiarym,
  buttonArgs.alertm,
  buttonArgs.disabledm,
  buttonArgs.iconleftmprimary,
  buttonArgs.iconleftmsecondary,
  buttonArgs.iconleftmtertiary,
  buttonArgs.iconleftmalert,
  buttonArgs.iconrightmprimary,
  buttonArgs.iconrightmsecondary,
  buttonArgs.iconrightmtertiary,
  buttonArgs.iconrightmalert,
  buttonArgs.icononlymprimary,
  buttonArgs.icononlymsecondary,
  buttonArgs.icononlymtertiary,
  buttonArgs.icononlymalert,
];
MediumButton.storyName = "Medium Button";
MediumButton.parameters = {
  docs: {
    description: {
      story: "Medium buttons should be used ",
    },
  },
};

/**
 * Small Button Template
 *
 * create a Storybook template for this component
 *
 *@param args (Object) - props to be passed to the component
 */
const SmallButtonTemplate: Story<ButtonProps> = (args) => (
  <>
    {smallbuttons.map((button, i) => (
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
  </>
);

/**
 * Small Button Instance
 *
 */
export const SmallButton = SmallButtonTemplate.bind({});

const smallbuttons = [
  buttonArgs.medium,
  buttonArgs.secondarym,
  buttonArgs.tertiarym,
  buttonArgs.alertm,
  buttonArgs.disabledm,
  buttonArgs.iconleftsmprimary,
  buttonArgs.iconleftmsecondary,
  buttonArgs.iconleftsmtertiary,
  buttonArgs.iconleftsmalert,
  buttonArgs.iconrightsmprimary,
  buttonArgs.iconrightmsecondary,
  buttonArgs.iconrightsmtertiary,
  buttonArgs.iconrightsmalert,
  buttonArgs.icononlysmprimary,
  buttonArgs.icononlysmsecondary,
  buttonArgs.icononlysmtertiary,
  buttonArgs.icononlysmalert,
];
SmallButton.storyName = "Small Button";
SmallButton.parameters = {
  docs: {
    description: {
      story: "Small buttons should be used ",
    },
  },
};
