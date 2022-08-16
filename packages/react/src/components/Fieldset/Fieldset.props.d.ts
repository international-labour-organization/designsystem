export interface FieldsetProps {
  /**
   * Specify the content of your Fieldset.
   */
  children: ReactElement<Input> | ReactElement<Select> | ReactElement<Textarea>;

  /**
   * Specify an optional className to be added to your Fieldset component.
   */
  className?: string;

  /**
   * The fieldset's id
   */
  fieldsetid: string | boolean;

  /**
   * The fieldset's legend
   */
  legend: Required<string | boolean>;
}
