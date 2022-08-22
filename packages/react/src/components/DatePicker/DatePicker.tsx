import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { DatePickerProps } from "./DatePicker.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const DatePicker: FC<DatePickerProps> = ({
  callback,
  disabled = false,
  enddata,
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
    <>
      {!range && (
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
          </FormElement>
        </Fieldset>
      )}
      {range && (
        <div className={`${baseClass}--range`}>
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
            </FormElement>
          </Fieldset>
          <Fieldset legend={false} fieldsetid={false}>
            <FormElement
              elemid={enddata?.name as any}
              label={enddata?.label as any}
              helper={enddata?.helper as any}
              error={enddata?.error as any}
              required={enddata?.required as any}
              tooltip={enddata?.tooltip as any}
            >
              <input
                id={enddata?.name}
                name={enddata?.name}
                onChange={(e) => handleChange(e, "end")}
                disabled={enddata?.disabled}
                placeholder={enddata?.placeholder}
                required={enddata?.required as any}
                type={"date"}
                className={`${DatePickerClasses} ${prefix}--input`}
              />
            </FormElement>
          </Fieldset>
        </div>
      )}
    </>
  );
};

export default DatePicker;
