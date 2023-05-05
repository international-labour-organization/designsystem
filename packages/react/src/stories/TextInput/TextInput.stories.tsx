import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputArgs } from "../../components/TextInput";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from "@storybook/blocks";
import { FormControl } from "../../components/FormControl";

const TextInputMeta: Meta<typeof TextInput> = {
  title: "Components/Forms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The TextInput field provides a way for users with a single line of
            text to enter into a form. Use this component for things like names,
            email addresses, passwords and other short form fields.
          </Description>
          <Primary />
          <Subheading>Accessibility</Subheading>
          <Description>
            The TextInput component must have an `id` prop to map a label to the
            form element.
          </Description>
          <ArgTypes of={TextInputMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default TextInputMeta;

export const Basic: StoryObj<typeof TextInput> = {
  args: TextInputArgs.basic,
};

export const WithLabel: StoryObj<typeof TextInput> = {
  args: TextInputArgs.basic,
  render: (props) => (
    <FormControl
      label="Insert your name here"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const WithHelperText: StoryObj<typeof TextInput> = {
  args: TextInputArgs.basic,
  render: (props) => (
    <FormControl
      label="Insert your name here"
      labelPlacement="top"
      labelSize="medium"
      helper="This is helper text"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const Error: StoryObj<typeof TextInput> = {
  args: TextInputArgs.haserror,
  render: (props) => (
    <FormControl
      label="Insert your name here"
      labelPlacement="top"
      labelSize="medium"
      errorMessage="This is an error message"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const Disabled: StoryObj<typeof TextInput> = {
  args: TextInputArgs.isdisabled,
  render: (props) => (
    <FormControl
      label="Insert your name here"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const WithToolTip: StoryObj<typeof TextInput> = {
  args: TextInputArgs.basic,
  render: (props) => (
    <FormControl
      label="Insert your name here"
      labelPlacement="top"
      labelSize="medium"
      tooltip="This is a tooltip"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const Email: StoryObj<typeof TextInput> = {
  args: TextInputArgs.email,
  render: (props) => (
    <FormControl
      label="Insert your email here"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const Telephone: StoryObj<typeof TextInput> = {
  args: TextInputArgs.tel,
  render: (props) => (
    <FormControl
      label="Insert your telephone number here"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const Password: StoryObj<typeof TextInput> = {
  args: TextInputArgs.password,
  render: (props) => (
    <FormControl
      label="Insert your password here"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};

export const URL: StoryObj<typeof TextInput> = {
  args: TextInputArgs.url,
  render: (props) => (
    <FormControl
      label="Insert your URL here"
      labelPlacement="top"
      labelSize="medium"
      style={{ width: "100%" }}
    >
      <TextInput {...props} />
    </FormControl>
  ),
};
