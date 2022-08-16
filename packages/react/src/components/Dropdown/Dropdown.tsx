import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { DropdownProps } from "./Dropdown.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const Dropdown: FC<DropdownProps> = ({
  autocomplete,
  callback,
  disabled = false,
  error,
  helper,
  id,
  label,
  name,
  options,
  required,
  tooltip,
  value,
}) => {
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
        <div className={`${baseClass}--wrapper`}>
          <select
            id={id}
            autoComplete={autocomplete}
            name={name}
            required={required}
            onChange={handleChange}
            disabled={disabled}
            className={dropdownClasses}
            value={currentvalue}
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
      </FormElement>
    </Fieldset>
  );
};

export default Dropdown;
