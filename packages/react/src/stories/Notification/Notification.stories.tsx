import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Subheading,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from "@storybook/addon-docs";
import { Notification } from "../../components/Notification";
import { NotificationProps } from "../../components/Notification/Notification.props";
import notificationArgs from "../../components/Notification/Notification.args";

const typeDoc = `
By changing the \`type\` prop you can set which icon to use with the Notification.

| type   |  Description  |
|----------|-------------|
| \`error\` | The Notification alerts user to an error. Border is red with an error icon. |
| \`info\` | The Notification alerts user to new information. Border is blue with an info icon. |
| \`success\` | The Notification alerts user to an operation's success. Border is green with a success icon. |
| \`warning\` | The Notification alerts user to a warning. Border is yellow with a warning icon. |`;

const placementDoc = `
By changing the \`placement\` prop you can set whether the Notification is displayed inline in the document flow, or highest in the document z-index as a dialog.

| type   |  Description  |
|----------|-------------|
| \`dialog\` | The Notification appears highest in the document z-index, outside the doucment flow. |
| \`inline\` | The Notification appears in the normal document flow. |`;

/**
 * Notification Story
 *
 */
const NotificationMeta: Meta<typeof Notification> = {
  title: "Components/Feedback/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["error", "info", "success", "warning"],
      control: { type: "select" },
    },
    placement: {
      options: ["dialog", "inline"],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Notification component presents a dismissible alert. It can
            appear as an inline alert, which appears in the normal flow of the
            document, or it can appear as a dialog, highest in the document's
            z-index.
          </Description>
          <Primary />
          <Subheading>Type</Subheading>
          <Description>{typeDoc}</Description>
          <Subheading>Placement</Subheading>
          <Description>{placementDoc}</Description>
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default NotificationMeta;

/**
 * Notification Template
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const NotificationTemplate: StoryFn<NotificationProps> = (args) => (
  <Notification {...args} />
);

/**
 * Notification Instance without CTA
 *
 */
export const BaseNotification: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - CTA is populated
 *
 */
export const NotificationWithCTA: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - error
 *
 */
export const NotificationError: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - success
 *
 */
export const NotificationSuccess: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - warning
 *
 */
export const NotificationWarning: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - info, as dialog
 *
 */
export const DialogNotification: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - CTA is populated, as dialog
 *
 */
export const DialogWithCTA: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - error, as dialog
 *
 */
export const DialogError: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - success, as dialog
 *
 */
export const DialogSuccess: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

/**
 * Notification Instance - warning, as dialog
 *
 */
export const DialogWarning: StoryFn<NotificationProps> =
  NotificationTemplate.bind({});

// enumerate the props for the read more component
BaseNotification.args = notificationArgs.nocta;
BaseNotification.storyName = "Info";

NotificationWithCTA.args = notificationArgs.hascta;
NotificationWithCTA.storyName = "Call to action";

NotificationError.args = notificationArgs.error;
NotificationError.storyName = "Error";

NotificationSuccess.args = notificationArgs.success;
NotificationSuccess.storyName = "Success";

NotificationWarning.args = notificationArgs.warning;
NotificationWarning.storyName = "Warning";

DialogNotification.args = notificationArgs.infodialog;
DialogNotification.storyName = "Info";

DialogWithCTA.args = notificationArgs.hasctadialog;
DialogWithCTA.storyName = "Dialog with call to action";

DialogError.args = notificationArgs.errordialog;
DialogError.storyName = "Error dialog";

DialogSuccess.args = notificationArgs.successdialog;
DialogSuccess.storyName = "Success dialog";

DialogWarning.args = notificationArgs.warningdialog;
DialogWarning.storyName = "Warning dialog";
