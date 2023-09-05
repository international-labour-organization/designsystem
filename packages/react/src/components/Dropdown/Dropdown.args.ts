import { LabelledDropdownProps } from "./Dropdown.props";

export const options = [
  { label: "Switzerland", value: "CH" },
  { label: "Côte d'Ivoire ", value: "CI" },
  { label: "Thailand", value: "TH" },
  { label: "United States", value: "US" },
  { label: "Zimbabwe", value: "ZW" },
  { label: "Afghanistan", value: "AF" },
  { label: "Åland Islands", value: "AX" },
  { label: "Albania", value: "AL" },
  { label: "Algeria", value: "DZ" },
  { label: "American Samoa", value: "AS" },
  { label: "AndorrA", value: "AD" },
  { label: "Angola", value: "AO" },
  { label: "Anguilla", value: "AI" },
  { label: "Antarctica", value: "AQ" },
  { label: "Antigua and Barbuda", value: "AG" },
  { label: "Argentina", value: "AR" },
  { label: "Armenia", value: "AM" },
  { label: "Aruba", value: "AW" },
  { label: "Australia", value: "AU" },
  { label: "Austria", value: "AT" },
  { label: "Azerbaijan", value: "AZ" },
];

const basic: LabelledDropdownProps = {
  label: "Select a country",
  errorMessage: "Please select a country",
  autocomplete: "false",
  className: "storybook",
  disabled: false,
  error: false,
  id: "dropdown",
  name: "dropdown",
  options,
  required: false,
  value: "option one",
  style: { width: "100%" },
};

const haserror: LabelledDropdownProps = {
  ...basic,
  error: true,
};

const hashelper: LabelledDropdownProps = {
  ...basic,
  helper: "Please select a country",
};

const hastooltip: LabelledDropdownProps = {
  ...basic,
  tooltip: "Please select a country",
};

const isdisabled: LabelledDropdownProps = {
  ...basic,
  disabled: true,
};

const DropdownArgs = {
  basic,
  haserror,
  hashelper,
  hastooltip,
  isdisabled,
};

export default DropdownArgs;
