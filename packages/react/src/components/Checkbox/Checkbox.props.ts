import { ChoiceFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../FormControl/FormControl.props";

export type CheckboxProps = ChoiceFieldProps<HTMLInputElement>;

export type LabelledCheckboxProps = LabelledFormFieldProps<CheckboxProps>;
