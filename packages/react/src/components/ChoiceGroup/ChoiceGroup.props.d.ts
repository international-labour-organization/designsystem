import { CheckboxProps } from "../Checkbox/Checkbox.props";
import { RadioProps } from "../RadioProps/RadioProps.props";
import { fieldTypes } from "../../types";

// We can't put a form group inside a form group so let's remove that option
const choiceGroupFieldTypes = fieldTypes.filter(
  (item) => item === "checkbox" || item === "radio"
);

interface ChoiceGroupItems {
  /**
   * The inputs in this choice group
   */
  field: Required<CheckboxProps | RadioProps>;

  /**
   * This item's field type
   */
  type: Required<choiceGroupFieldTypes>;
}

export interface ChoiceGroupProps {
  /**
   * Specify an optional className to be added to your ChoiceGroup component.
   */
  className?: string;

  /**
   * The ID of the ChoiceGroup
   */
  choicegroupid: Required<string>;

  /**
   * Optional error text for the choice group
   */
  grouperror?: string;

  /**
   * Optional helper text for the choice group
   */
  grouphelper?: string;

  /**
   * Optional tooltip text for the choice group
   */
  grouptooltip?: string;

  /**
   * The inputs in this ChoiceGroup
   */
  items: Required<Array<FormGroupItems>>;

  /**
   * The ChoiceGroup's legend
   */
  legend: Required<string | false>;
}
