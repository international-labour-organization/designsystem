import React, { forwardRef } from "react";
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
    defaultValue,
    form,
    multiple,
    selectSize,
    size = "large",
  } = props;

  const { prefix } = useGlobalSettings();
  const formControlCtx = useFormControl();
  const { ariaDescribedBy } = formControlCtx;

  const baseClass = `${prefix}--dropdown`;

  const dropdownClasses = classNames(baseClass, `${baseClass}__size__${size}`, {
    error: error,
  });

  const wrapperClasses = classNames(
    `${baseClass}--wrapper`,
    `${baseClass}--wrapper__size__${size}`
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={wrapperClasses}>
      <select
        ref={ref}
        id={id ? id : name}
        autoComplete={autocomplete}
        name={name}
        required={required}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        defaultValue={defaultValue}
        className={dropdownClasses}
        value={value}
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
            >
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
});

const LabelledDropdown = forwardRef<HTMLSelectElement, LabelledDropdownProps>(
  (props, ref) => {
    const { style, inputStyle, className, size, ...rest } = props;
    const fieldId = props.id ? props.id : props.name;

    return (
      <FormControl
        fieldId={fieldId}
        style={style}
        className={className}
        labelSize={size}
        {...rest}
      >
        <Dropdown ref={ref} style={inputStyle} size={size} {...rest} />
      </FormControl>
    );
  }
);

export default LabelledDropdown;
