import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { DatePickerProps } from "./DatePicker.props";

const DatePicker: FC<DatePickerProps> = ({
  onChange,
  disabled = false,
  error,
  id,
  name,
  placeholder,
  required,
  max,
  min,
  step,
  rtl = false,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--datepicker`;

  const DatePickerClasses = classNames(baseClass, {
    ["right-to-left"]: rtl,
    [`error`]: error,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    picker?: string
  ) => {
    if (onChange) {
      onChange(e, picker);
    }
  };

  return (
    <input
      type="date"
      id={id ? id : name}
      name={name}
      onChange={handleChange}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      className={`${DatePickerClasses} ${prefix}--input`}
      max={max}
      min={min}
      step={step}
    />
  );
};

export default DatePicker;
