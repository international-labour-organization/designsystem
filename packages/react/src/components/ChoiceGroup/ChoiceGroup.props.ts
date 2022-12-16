// import { ChoiceGroupFieldTypes } from "../../types";
import { CheckboxProps } from "../Checkbox/Checkbox.props";
import { RadioProps } from "../Radio/Radio.props";

export interface CheckboxGroupItem {
  field: CheckboxProps;
  type: "checkbox";
}

export interface RadioGroupItem {
  field: RadioProps;
  type: "radio";
}

export type ChoiceGroupItem = CheckboxGroupItem | RadioGroupItem;

export interface ChoiceGroupProps {
  className?: string;
  choicegroupid: string;
  grouperror?: string;
  grouphelper?: string;
  grouptooltip?: string;
  items: ChoiceGroupItem[];
  legend?: string;
}
