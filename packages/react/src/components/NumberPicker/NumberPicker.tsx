import React from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import FormControl, { useFormControl } from "../FormControl/FormControl";
import {
  NumberPickerProps,
  LabelledNumberPickerProps,
} from "./NumberPicker.props";

const NumberPicker = React.forwardRef<HTMLInputElement, NumberPickerProps>(
  (
    {
      onChange,
      onBlur,
      disabled = false,
      error,
      id,
      name,
      placeholder,
      required,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const formControlCtx = useFormControl();
    const { ariaDescribedBy } = formControlCtx;

    const inputClass = `${prefix}--input`;
    const baseClass = `${prefix}--numberpicker`;

    const hasError = !disabled && !!error;

    const numberPickerClasses = classNames(inputClass, baseClass, {
      error: hasError,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <input
        ref={ref}
        id={id ? id : name}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        type="number"
        className={numberPickerClasses}
        pattern="[0-9]*"
        inputMode="numeric"
        aria-describedby={ariaDescribedBy}
      />
    );
  }
);

const LabelledNumberPicker = React.forwardRef<
  HTMLInputElement,
  LabelledNumberPickerProps
>((props, ref) => {
  const { style, inputStyle, className, ...rest } = props;
  const fieldId = props.id ? props.id : props.name;

  return (
    <FormControl
      fieldId={fieldId}
      style={style}
      className={className}
      {...rest}
    >
      <NumberPicker ref={ref} style={inputStyle} {...rest} />
    </FormControl>
  );
});

export default LabelledNumberPicker;
