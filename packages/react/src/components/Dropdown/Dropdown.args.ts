import { DropdownProps } from "./Dropdown.props";

const options = [
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
];

const basic: DropdownProps = {
  autocomplete: "false",
  className: "storybook",
  disabled: false,
  error: false,
  id: "dropdown",
  name: "dropdown",
  options,
  required: false,
  value: "option one",
};

const haserror: DropdownProps = {
  autocomplete: "false",
  className: "storybook",
  disabled: false,
  error: true,
  id: "dropdown",
  name: "dropdown",
  options,
  required: false,
  value: "option one",
};

const hashelper: DropdownProps = {
  autocomplete: "false",
  className: "storybook",
  disabled: false,
  error: false,
  id: "dropdown",
  name: "dropdown",
  options,
  required: false,
  value: "option one",
};

const hastooltip: DropdownProps = {
  autocomplete: "false",
  className: "storybook",
  disabled: false,
  error: false,
  id: "dropdown",
  name: "dropdown",
  options,
  required: false,
  value: "option one",
};

const isdisabled: DropdownProps = {
  autocomplete: "false",
  className: "storybook",
  disabled: true,
  error: false,
  id: "dropdown",
  name: "dropdown",
  options,
  required: false,
  value: "option one",
};

const DropdownArgs = {
  basic,
  haserror,
  hashelper,
  hastooltip,
  isdisabled,
};

export default DropdownArgs;
