import React from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TextInputProps, LabelledTextInputProps } from "./TextInput.props";
import FormControl, { useFormControl } from "../FormControl/FormControl";

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      onChange,
      onBlur,
      error,
      id,
      name,
      placeholder,
      required,
      pattern,
      value,
      size = "large",
      disabled = false,
      type = "text",
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const formControlCtx = useFormControl();
    const { ariaDescribedBy } = formControlCtx;

    const baseClass = `${prefix}--input`;

    const inputClass = classNames(baseClass, {
      error: error,
      [`${baseClass}__size__${size}`]: size,
    });

    return (
      <input
        value={value}
        ref={ref}
        id={id ? id : name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        type={type}
        className={inputClass}
        pattern={pattern}
        aria-describedby={ariaDescribedBy}
      />
    );
  }
);

const LabelledTextInput = React.forwardRef<
  HTMLInputElement,
  LabelledTextInputProps
>((props, ref) => {
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
      <TextInput ref={ref} style={inputStyle} size={size} {...rest} />
    </FormControl>
  );
});

export default LabelledTextInput;
