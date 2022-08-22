import { ChoiceGroupProps } from "./ChoiceGroup.props";
import CheckboxArgs from "../Checkbox/Checkbox.args";
import RadioArgs from "../Radio/Radio.args";

const checkboxfields = [];
const radiofields = [];

for (let i = 0; i < 5; i++) {
  const checkboxargs = { ...CheckboxArgs.basic };
  const radioargs = { ...RadioArgs.basic };
  checkboxfields.push(checkboxargs);
  checkboxfields[i].label = `Checkbox ${i}`;
  checkboxfields[i].name = `checkbox${i}`;
  checkboxfields[i].grouped = true;
  radiofields.push(radioargs);
  radiofields[i].label = `Radio ${i}`;
  radiofields[i].name = `radio${i}`;
}

const checkboxes: ChoiceGroupProps = {
  choicegroupid: "checkboxgroup",
  items: checkboxfields,
  legend: "Checkbox Legend",
};

const radios: ChoiceGroupProps = {
  choicegroupid: "radiogroup",
  grouphelper: "Helper text",
  grouptooltip: "Tooltip text",
  items: radiofields,
  legend: "Radio Legend",
};

/**
 * Sample prop definitions ChoiceGroup's enumerable properties (imported in stories and test)
 */
const ChoiceGroupArgs = {
  checkboxes,
  radios,
};

export default ChoiceGroupArgs;
