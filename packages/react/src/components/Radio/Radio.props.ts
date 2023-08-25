import { ChoiceFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../FormControl/FormControl.props";

export type RadioProps = ChoiceFieldProps<HTMLInputElement>;

export type LabelledRadioProps = LabelledFormFieldProps<RadioProps>;
