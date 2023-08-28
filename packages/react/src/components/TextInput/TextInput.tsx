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
      disabled = false,
      type = "text",
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const formControlCtx = useFormControl();
    const { ariaDescribedBy } = formControlCtx;

    const baseClass = `${prefix}--text-input`;

    const inputClass = classNames(baseClass, {
      [`${baseClass}__error`]: error,
    });

    return (
      <input
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
  const fieldId = props.id ? props.id : props.name;
  return (
    <FormControl fieldId={fieldId} {...props}>
      <TextInput ref={ref} {...props} />
    </FormControl>
  );
});

export default LabelledTextInput;
