import { forwardRef, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { DropdownProps } from "./Dropdown.props";

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
  const {
    autocomplete,
    onChange,
    disabled = false,
    error,
    id,
    name,
    options,
    required,
    value,
    form,
    multiple,
    selectSize,
  } = props;

  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--dropdown`;

  const dropdownClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  const [currentvalue, setValue] = useState(value);

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${baseClass}--wrapper`}>
      <select
        ref={ref}
        id={id ? id : name}
        autoComplete={autocomplete}
        name={name}
        required={required}
        onChange={handleChange}
        disabled={disabled}
        className={dropdownClasses}
        value={currentvalue}
        form={form}
        multiple={multiple}
        size={selectSize}
      >
        {options &&
          options.map((option, i) => (
            <option
              disabled={option.disabled}
              label={option.label}
              value={option.value}
              key={`${baseClass}--option--${i}`}
            />
          ))}
      </select>
    </div>
  );
});

export default Dropdown;
