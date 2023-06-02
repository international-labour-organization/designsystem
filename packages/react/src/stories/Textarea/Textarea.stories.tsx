import { Meta, StoryObj } from "@storybook/react";
import { Textarea, TextareaArgs } from "../../components/Textarea";
import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from "@storybook/blocks";
import { FormControl } from "../../components/FormControl";
// import { FormControl } from "../../components/FormControl";

const TextareaMeta: Meta<typeof Textarea> = {
  title: "Components/Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Textarea field provides a way for users with a multiple lines of
            text to enter into a form. Use this component for things like
            comments, descriptions, and other long form fields.
          </Description>
          <Primary />
          <Subheading>Accessibility</Subheading>
          <Description>
            The Textarea component must have an `id` prop to map a label to the
            form element.
          </Description>
          <ArgTypes of={TextareaMeta} />
          <Stories />
        </>
      ),
    },
  },
};

export default TextareaMeta;

export const Basic: StoryObj<typeof Textarea> = {
  args: TextareaArgs.basic,
};

const formControlProps = {
  label: "Insert your life story here",
  labelPlacement: "top" as const,
  labelSize: "medium" as const,
  style: { width: "100%" },
  errorMessage: "This is an error message",
};

export const WithLabel: StoryObj<typeof Textarea> = {
  args: TextareaArgs.basic,
  render: (props) => (
    <FormControl {...formControlProps}>
      <Textarea {...props} />
    </FormControl>
  ),
};

export const WithError: StoryObj<typeof Textarea> = {
  args: TextareaArgs.basic,
  render: (props) => (
    <FormControl {...formControlProps}>
      <Textarea {...props} error />
    </FormControl>
  ),
};

export const disabled: StoryObj<typeof Textarea> = {
  args: TextareaArgs.disabled,
  render: (props) => (
    <FormControl {...formControlProps}>
      <Textarea {...props} />
    </FormControl>
  ),
};
