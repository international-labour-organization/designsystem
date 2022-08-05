import { DropdownProps } from "./Dropdown.props";

const basic: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  disabled: false,
  error: false,
  helper: false,
  id: "dropdown",
  label: "Dropdown Label",
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
  value: "option one",
};

const haserror: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  disabled: false,
  error: "This is an error message",
  helper: "Example Helper Text",
  id: "dropdown",
  label: "Dropdown Label",
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
  value: "option one",
};

const hashelper: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  disabled: false,
  error: false,
  helper: "Example Helper Text",
  id: "dropdown",
  label: "Dropdown Label",
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
  value: "option one",
};

const hastooltip: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  disabled: false,
  error: false,
  helper: false,
  id: "dropdown",
  label: "Dropdown Label",
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
  value: "option one",
};

const isdisabled: DropdownProps = {
  autocomplete: "false",
  callback: null,
  className: "storybook",
  disabled: false,
  error: false,
  helper: false,
  id: "dropdown",
  label: "Dropdown Label",
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
  value: "option one",
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
