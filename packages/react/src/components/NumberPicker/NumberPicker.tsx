import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { NumberPickerProps } from "./NumberPicker.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const NumberPicker: FC<NumberPickerProps> = ({
  callback,
  disabled = false,
  error,
  helper,
  id,
  label,
  name,
  placeholder,
  required,
  tooltip,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--numberpicker`;

  const NumberPickerClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <input
          id={id}
          name={name}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          required={required as any}
          type={"text"}
          className={`${NumberPickerClasses} ${prefix}--input`}
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </FormElement>
    </Fieldset>
  );
};

export default NumberPicker;
