import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { NumberPickerProps } from "./NumberPicker.props";

const NumberPicker: FC<NumberPickerProps> = ({
  onChange,
  disabled = false,
  error,
  id,
  name,
  placeholder,
  required,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--numberpicker`;

  const NumberPickerClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      id={id ? id : name}
      name={name}
      onChange={handleChange}
      disabled={disabled}
      placeholder={placeholder}
      required={required as any}
      type="number"
      className={`${NumberPickerClasses} ${prefix}--input`}
      pattern="[0-9]*"
      inputMode="numeric"
    />
  );
};

export default NumberPicker;
