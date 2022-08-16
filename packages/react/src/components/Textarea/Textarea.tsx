import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TextareaProps } from "./Textarea.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const Textarea: FC<TextareaProps> = ({
  callback,
  disabled = false,
  error,
  helper,
  id,
  label,
  maxlength,
  minlength,
  name,
  placeholder,
  required,
  spellcheck,
  tooltip,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--textarea`;

  const TextareaClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    <Fieldset legend={false} fieldsetid={false}>
      <FormElement
        elemid={name as any}
        label={label}
        helper={helper as any}
        error={error as any}
        required={required as any}
        tooltip={tooltip}
      >
        <textarea
          id={id}
          name={name}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          required={required as any}
          className={TextareaClasses}
          maxLength={maxlength}
          minLength={minlength}
          spellCheck={spellcheck}
        />
      </FormElement>
    </Fieldset>
  );
};

export default Textarea;
