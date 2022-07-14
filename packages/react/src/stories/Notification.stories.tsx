import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Subheading,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { Notification } from "../components/Notification";
import { NotificationProps } from "../components/Notification/Notification.props";
import notificationArgs from "../components/Notification/Notification.args";

const typeDoc = `
By changing the \`type\` prop you can set which icon to use with the Notification.

| type   |  Description  |
|----------|-------------|
| \`error\` | The Notification alerts user to an error. Border is red with an error icon. |
| \`info\` | The Notification alerts user to new information. Border is blue with an info icon. |
| \`success\` | The Notification alerts user to an operation's success. Border is green with a success icon. |
| \`warning\` | The Notification alerts user to a warning. Border is yellow with a warning icon. |`;

/**
 * Notification Story
 *
 */
export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {},
  parameters: {
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Notification component presents a dismissible alert.
          </Description>
          <Primary />
          <ArgsTable />
          <Subheading>type Prop</Subheading>
          <Description>{typeDoc}</Description>
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Notification>;

/**
 * Notification Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const NotificationTemplate: Story<NotificationProps> = (args) => (
  <Notification {...args} />
);

/**
 * Notification Instance without CTA
 *
 */
export const BaseNotification = NotificationTemplate.bind({});

/**
 * Notification Instance - CTA is populated
 *
 */
export const NotificationWithCTA = NotificationTemplate.bind({});

/**
 * Notification Instance - error
 *
 */
export const NotificationError = NotificationTemplate.bind({});

/**
 * Notification Instance - success
 *
 */
export const NotificationSuccess = NotificationTemplate.bind({});

/**
 * Notification Instance - warning
 *
 */
export const NotificationWarning = NotificationTemplate.bind({});

/**
 * Notification Instance - info, as dialog
 *
 */
export const DialogNotification = NotificationTemplate.bind({});

/**
 * Notification Instance - CTA is populated, as dialog
 *
 */
export const DialogWithCTA = NotificationTemplate.bind({});

/**
 * Notification Instance - error, as dialog
 *
 */
export const DialogError = NotificationTemplate.bind({});

/**
 * Notification Instance - success, as dialog
 *
 */
export const DialogSuccess = NotificationTemplate.bind({});

/**
 * Notification Instance - warning, as dialog
 *
 */
export const DialogWarning = NotificationTemplate.bind({});

// enumerate the props for the read more component
BaseNotification.args = notificationArgs.nocta;
BaseNotification.storyName = "Notification - info";

NotificationWithCTA.args = notificationArgs.hascta;
NotificationWithCTA.storyName = "Notification - has call to action";

NotificationError.args = notificationArgs.error;
NotificationError.storyName = "Notification - error";

NotificationSuccess.args = notificationArgs.success;
NotificationSuccess.storyName = "Notification - success";

NotificationWarning.args = notificationArgs.warning;
NotificationWarning.storyName = "Notification - warning";

DialogNotification.args = notificationArgs.infodialog;
DialogNotification.storyName = "Notification - info dialog";

DialogWithCTA.args = notificationArgs.hasctadialog;
DialogWithCTA.storyName = "Notification - dialog, has call to action";

DialogError.args = notificationArgs.errordialog;
DialogError.storyName = "Notification - error dialog";

DialogSuccess.args = notificationArgs.successdialog;
DialogSuccess.storyName = "Notification - success dialog";

DialogWarning.args = notificationArgs.warningdialog;
DialogWarning.storyName = "Notification - warning dialog";
