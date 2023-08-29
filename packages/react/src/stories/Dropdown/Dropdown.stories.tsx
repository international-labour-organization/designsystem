import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Subheading,
  ArgTypes,
} from "@storybook/addon-docs";
import { Dropdown } from "../../components/Dropdown";
import dropdownArgs from "../../components/Dropdown/Dropdown.args";
import { labelledFormFieldArgTypes } from "../../types/forms.args";

const DropdownMeta: Meta<typeof Dropdown> = {
  title: "Components/Forms/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    autocomplete: {
      description:
        "A string providing a hint for a user agent's autocomplete feature.",
      control: {
        type: "string",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    form: {
      description:
        "The id of the form that the dropdown belongs to if it isn't nested in a form element",
      control: {
        type: "string",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    multiple: {
      description: "Whether the dropdown allows multiple selections",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    options: {
      description: "The options to display in the dropdown",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "object",
        },
      },
    },
    selectSize: {
      description:
        "Number of rows in the list that should be visible at one time. Corresponds to the select element's size attribute.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    value: {
      description: "The value of the dropdown",
      control: {
        type: "string",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    ...labelledFormFieldArgTypes("HTMLSelectElement"),
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Dropdown displays a select element with options, and is most
            commonly used in forms.
          </Description>
          <Primary />
          <Subheading>Props</Subheading>
          <ArgTypes of={DropdownMeta} />
          <Stories title="Examples" />
        </>
      ),
    },
  },
};

export default DropdownMeta;

export const Basic: StoryObj<typeof Dropdown> = {
  args: { ...dropdownArgs.basic, style: { width: "100%" } },
};

export const WithLabel: StoryObj<typeof Dropdown> = {
  args: {
    ...dropdownArgs.basic,
    label: "Choose among the following options",
    labelPlacement: "top",
    labelSize: "medium",
    style: { width: "100%" },
  },
};

export const WithHelperText: StoryObj<typeof Dropdown> = {
  args: {
    ...dropdownArgs.basic,
    label: "Choose among the following options",
    labelPlacement: "top",
    labelSize: "medium",
    style: { width: "100%" },
    helper: "This is helper text",
  },
};

export const Error: StoryObj<typeof Dropdown> = {
  args: {
    ...dropdownArgs.haserror,
    label: "Choose among the following options",
    labelPlacement: "top",
    labelSize: "medium",
    style: { width: "100%" },
    errorMessage: "This is an error",
  },
};

export const Disabled: StoryObj<typeof Dropdown> = {
  args: {
    ...dropdownArgs.isdisabled,
    label: "Choose among the following options",
    labelPlacement: "top",
    labelSize: "medium",
    style: { width: "100%" },
  },
};

export const WithToolTip: StoryObj<typeof Dropdown> = {
  args: {
    ...dropdownArgs.basic,
    label: "Choose among the following options",
    labelPlacement: "top",
    labelSize: "medium",
    style: { width: "100%" },
    tooltip: "This is a tooltip",
  },
};
