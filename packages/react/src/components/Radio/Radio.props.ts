import { ChoiceFieldProps } from "../../types";
import { LabelledFormFieldProps } from "../../types";

export type RadioProps = ChoiceFieldProps<HTMLInputElement>;

export type LabelledRadioProps = LabelledFormFieldProps<RadioProps>;
