import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import { useGlobalSettings } from "../../hooks";
import { DropdownProps, LabelledDropdownProps } from "./Dropdown.props";
import FormControl, { useFormControl } from "../FormControl/FormControl";

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
  const {
    autocomplete,
    onChange,
    onBlur,
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
  const formControlCtx = useFormControl();
  const { ariaDescribedBy } = formControlCtx;

  const baseClass = `${prefix}--dropdown`;

  const dropdownClasses = classNames(baseClass, {
    [`error`]: error,
  });

  const [currentvalue, setValue] = useState(value);

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
        onBlur={onBlur}
        disabled={disabled}
        className={dropdownClasses}
        value={currentvalue}
        form={form}
        multiple={multiple}
        size={selectSize}
        aria-describedby={ariaDescribedBy}
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

const LabelledDropdown = forwardRef<HTMLSelectElement, LabelledDropdownProps>(
  (props, ref) => {
    const fieldId = props.id ? props.id : props.name;
    return (
      <FormControl fieldId={fieldId} {...props}>
        <Dropdown ref={ref} {...props} />
      </FormControl>
    );
  }
);

export default LabelledDropdown;
