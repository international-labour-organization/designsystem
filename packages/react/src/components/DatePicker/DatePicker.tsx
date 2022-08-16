import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { DatePickerProps } from "./DatePicker.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const DatePicker: FC<DatePickerProps> = ({
  callback,
  disabled = false,
  error,
  helper,
  id,
  label,
  name,
  placeholder,
  range,
  required,
  tooltip,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--datepicker`;

  const DatePickerClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    picker: string | false = false
  ) => {
    if (callback) {
      callback(e, picker);
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
          id={`${id}`}
          name={`${name}`}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          required={required as any}
          type={"date"}
          className={`${DatePickerClasses} ${prefix}--input`}
        />
        {range && (
          <input
            id={`${name}--end`}
            name={`${name}--end`}
            onChange={(e) => handleChange(e, "end")}
            disabled={disabled}
            placeholder={placeholder}
            required={required as any}
            type={"date"}
            className={`${DatePickerClasses} ${prefix}--input`}
          />
        )}
      </FormElement>
    </Fieldset>
  );
};

export default DatePicker;
