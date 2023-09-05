import { ChoiceFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../../types";
export type CheckboxProps = ChoiceFieldProps<HTMLInputElement>;

export type LabelledCheckboxProps = LabelledFormFieldProps<CheckboxProps>;
