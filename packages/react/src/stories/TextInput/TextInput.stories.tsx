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
import { labelledFormFieldArgTypes } from "../../types/forms.args";

const TextInputMeta: Meta<typeof TextInput> = {
  title: "Components/Forms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    pattern: {
      description:
        "Optional pattern attribute for phone numbers, zip codes, etc.",
      control: "select",
      options: ["email", "hidden", "password", "search", "tel", "text", "url"],

      table: {
        type: {
          summary: "email | hidden | password | search | tel | text| url",
        },
      },
    },
    ...labelledFormFieldArgTypes("HTMLTextAreaElement"),
  },
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
  render: (props) => <TextInput {...props} />,
};

export const WithHelperText: StoryObj<typeof TextInput> = {
  args: TextInputArgs.basic,
  render: (props) => <TextInput {...props} />,
};

export const Error: StoryObj<typeof TextInput> = {
  args: TextInputArgs.haserror,
  render: (props) => <TextInput {...props} />,
};

export const Disabled: StoryObj<typeof TextInput> = {
  args: TextInputArgs.isdisabled,
  render: (props) => <TextInput {...props} />,
};

export const WithToolTip: StoryObj<typeof TextInput> = {
  args: TextInputArgs.basic,
  render: (props) => <TextInput {...props} />,
};

export const Email: StoryObj<typeof TextInput> = {
  args: TextInputArgs.email,
  render: (props) => <TextInput {...props} />,
};

export const Telephone: StoryObj<typeof TextInput> = {
  args: TextInputArgs.telephone,
  render: (props) => <TextInput {...props} />,
};

export const Password: StoryObj<typeof TextInput> = {
  args: TextInputArgs.password,
  render: (props) => <TextInput {...props} />,
};

export const URL: StoryObj<typeof TextInput> = {
  args: TextInputArgs.url,
  render: (props) => <TextInput {...props} />,
};
