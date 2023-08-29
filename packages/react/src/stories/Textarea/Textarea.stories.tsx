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
import { labelledFormFieldArgTypes } from "../../types/forms.args";

const TextareaMeta: Meta<typeof Textarea> = {
  title: "Components/Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    autocorrect: {
      description:
        "Activate automatic spelling correction and processing of text substitutions",
      control: {
        type: "select",
        options: ["on", "off"],
      },
      table: {
        type: {
          summary: "on | off",
        },
      },
    },
    form: {
      description:
        "The id of the form element the Textarea belongs to if it's not nested inside the form.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    maxlength: {
      description: "The maximum number of characters that the user can enter.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    minlength: {
      description: "The minimum number of characters that the user can enter.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    placeholder: {
      description: "The placeholder text for the textarea",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    spellcheck: {
      description:
        "Specifies whether the textarea is subject to spellchecking by the underlying browser/OS",
      control: {
        type: "select",
        options: [true, false, "default"],
      },
      table: {
        type: {
          summary: "true | false | 'default'",
        },
      },
    },
    wrap: {
      description:
        "Specifies how the text in a textarea is to be wrapped when submitted in a form",
      control: {
        type: "select",
        options: ["hard", "soft", "off"],
      },
      table: {
        type: {
          summary: "'hard' | 'soft' | 'off'",
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

export const WithLabel: StoryObj<typeof Textarea> = {
  args: TextareaArgs.basic,
  render: (props) => <Textarea {...props} />,
};

export const WithError: StoryObj<typeof Textarea> = {
  args: TextareaArgs.basic,
  render: (props) => <Textarea {...props} error />,
};

export const disabled: StoryObj<typeof Textarea> = {
  args: TextareaArgs.disabled,
  render: (props) => <Textarea {...props} />,
};
