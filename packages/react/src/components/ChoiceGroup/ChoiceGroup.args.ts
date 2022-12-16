import {
  ChoiceGroupProps,
  CheckboxGroupItem,
  RadioGroupItem,
} from "./ChoiceGroup.props";
import CheckboxArgs from "../Checkbox/Checkbox.args";
import RadioArgs from "../Radio/Radio.args";

const checkboxfields = [] as CheckboxGroupItem[];
const radiofields = [] as RadioGroupItem[];
const radioid = `radio${Math.random() * (1000 - 1) + 1}`;

for (let i = 0; i < 5; i++) {
  const checkboxargs = { ...CheckboxArgs.basic };
  const radioargs = { ...RadioArgs.basic };
  checkboxfields.push({ type: "checkbox", field: checkboxargs });
  checkboxfields[i].field.label = `Checkbox ${i}`;
  checkboxfields[i].field.name = `checkbox${i}`;
  checkboxfields[i].field.grouped = true;
  checkboxfields[i].type = "checkbox";
  radiofields.push({ type: "radio", field: radioargs });
  radiofields[i].field.label = `Radio ${i}`;
  radiofields[i].field.name = radioid;
  radiofields[i].type = "radio";
}

const checkboxes: ChoiceGroupProps = {
  choicegroupid: "checkboxgroup",
  items: checkboxfields,
  legend: "Checkbox Legend",
};

const radios: ChoiceGroupProps = {
  choicegroupid: "radiogroup",
  items: radiofields,
  legend: "Radio Legend",
};

const checkboxeshelper: ChoiceGroupProps = {
  choicegroupid: "checkboxgroup",
  grouphelper: "This is the helper text",
  items: checkboxfields,
  legend: "Checkbox Legend",
};

const radioshelper: ChoiceGroupProps = {
  choicegroupid: "radiogroup",
  grouphelper: "This is the helper text",
  items: radiofields,
  legend: "Radio Legend",
};

const checkboxeserror: ChoiceGroupProps = {
  choicegroupid: "checkboxgroup",
  grouperror: "this one has an error",
  items: checkboxfields,
  legend: "Checkbox Legend",
};

const radioserror: ChoiceGroupProps = {
  choicegroupid: "radiogroup",
  grouperror: "this one has an error",
  items: radiofields,
  legend: "Radio Legend",
};

const checkboxestooltip: ChoiceGroupProps = {
  choicegroupid: "checkboxgroup",
  items: checkboxfields,
  legend: "Checkbox Legend",
  grouptooltip: "This is the tooltip",
};

const radiostooltip: ChoiceGroupProps = {
  choicegroupid: "radiogroup",
  items: radiofields,
  legend: "Radio Legend",
  grouptooltip: "This is the tooltip",
};

/**
 * Sample prop definitions ChoiceGroup's enumerable properties (imported in stories and test)
 */
const ChoiceGroupArgs = {
  checkboxes,
  radios,
  checkboxeshelper,
  radioshelper,
  checkboxeserror,
  radioserror,
  checkboxestooltip,
  radiostooltip,
};

export default ChoiceGroupArgs;
