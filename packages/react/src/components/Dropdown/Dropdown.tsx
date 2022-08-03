import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { DropdownProps } from "./Dropdown.props";
import { Fieldset } from "../Fieldset";

const Dropdown: FC<DropdownProps> = ({
  autocomplete,
  callback,
  defaultValue,
  disabled = false,
  error,
  helper,
  id,
  label,
  multiple,
  name,
  options,
  required,
  tooltip,
}) => {
  const { prefix } = useGlobalSettings();

  const baseClass = `${prefix}--dropdown`;

  const dropdownClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    <Fieldset
      inputid={name as any}
      label={label}
      helper={helper as any}
      error={error as any}
      tooltip={tooltip}
    >
      <div className={`${baseClass}--wrapper`}>
        <select
          id={id}
          autoComplete={autocomplete}
          multiple={multiple}
          name={name}
          required={required}
          onChange={handleChange}
          defaultValue={defaultValue}
          disabled={disabled}
          className={dropdownClasses}
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
    </Fieldset>
  );
};

export default Dropdown;
