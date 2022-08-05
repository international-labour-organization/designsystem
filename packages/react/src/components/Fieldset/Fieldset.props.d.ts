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
   * The fieldset's error message
   */
  error: string | false;

  /**
   * The fieldset's helper text
   */
  helper: string;

  /**
   * The ID of the form element
   */
  inputid: Required<string>;

  /**
   * The fieldset's label
   */
  label: Required<string>;

  /**
   * Does this fieldset have a tooltip?
   */
  tooltip: string | false;
}
