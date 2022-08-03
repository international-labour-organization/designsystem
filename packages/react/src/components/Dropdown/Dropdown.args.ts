import { DropdownProps } from "./Dropdown.props";

const basic: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  defaultValue: "option one",
  disabled: false,
  error: false,
  helper: false,
  id: "dropdown",
  label: "Dropdown Label",
  multiple: false,
  name: "dropdown",
  options: [
    {
      disabled: false,
      label: "Option One",
      value: "option one",
    },
    {
      disabled: false,
      label: "Option Two",
      value: "option two",
    },
    {
      disabled: false,
      label: "Option Three",
      value: "option three",
    },
    {
      disabled: false,
      label: "Option Four",
      value: "four",
    },
    {
      disabled: false,
      label: "Option Five",
      value: "the fifth",
    },
  ],
  required: false,
  tooltip: false,
};

const haserror: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  defaultValue: "option one",
  disabled: false,
  error: "This is an error message",
  helper: "Example Helper Text",
  id: "dropdown",
  label: "Dropdown Label",
  multiple: false,
  name: "dropdown",
  options: [
    {
      disabled: false,
      label: "Option One",
      value: "option one",
    },
    {
      disabled: false,
      label: "Option Two",
      value: "option two",
    },
    {
      disabled: false,
      label: "Option Three",
      value: "option three",
    },
    {
      disabled: false,
      label: "Option Four",
      value: "four",
    },
    {
      disabled: false,
      label: "Option Five",
      value: "the fifth",
    },
  ],
  required: false,
  tooltip: false,
};

const hashelper: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  defaultValue: "option one",
  disabled: false,
  error: false,
  helper: "Example Helper Text",
  id: "dropdown",
  label: "Dropdown Label",
  multiple: false,
  name: "dropdown",
  options: [
    {
      disabled: false,
      label: "Option One",
      value: "option one",
    },
    {
      disabled: false,
      label: "Option Two",
      value: "option two",
    },
    {
      disabled: false,
      label: "Option Three",
      value: "option three",
    },
    {
      disabled: false,
      label: "Option Four",
      value: "four",
    },
    {
      disabled: false,
      label: "Option Five",
      value: "the fifth",
    },
  ],
  required: false,
  tooltip: false,
};

const hastooltip: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  defaultValue: "option one",
  disabled: false,
  error: false,
  helper: false,
  id: "dropdown",
  label: "Dropdown Label",
  multiple: false,
  name: "dropdown",
  options: [
    {
      disabled: false,
      label: "Option One",
      value: "option one",
    },
    {
      disabled: false,
      label: "Option Two",
      value: "option two",
    },
    {
      disabled: false,
      label: "Option Three",
      value: "option three",
    },
    {
      disabled: false,
      label: "Option Four",
      value: "four",
    },
    {
      disabled: false,
      label: "Option Five",
      value: "the fifth",
    },
  ],
  required: false,
  tooltip: "This is my tooltip text.",
};

const isdisabled: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  defaultValue: "option one",
  disabled: false,
  error: false,
  helper: false,
  id: "dropdown",
  label: "Dropdown Label",
  multiple: false,
  name: "dropdown",
  options: [
    {
      disabled: false,
      label: "Option One",
      value: "option one",
    },
    {
      disabled: false,
      label: "Option Two",
      value: "option two",
    },
    {
      disabled: false,
      label: "Option Three",
      value: "option three",
    },
    {
      disabled: false,
      label: "Option Four",
      value: "four",
    },
    {
      disabled: false,
      label: "Option Five",
      value: "the fifth",
    },
  ],
  required: false,
  tooltip: false,
};

/**
 * Sample prop definitions Dropdown's enumerable properties (imported in stories and test)
 */
const DropdownArgs = {
  basic,
  haserror,
  hashelper,
  hastooltip,
  isdisabled,
};

export default DropdownArgs;
