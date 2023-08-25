import React, { useEffect, forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CheckboxProps, LabelledCheckboxProps } from "./Checkbox.props";
import { useFieldsetError } from "../Fieldset/Fieldset";
import FormControl, { useFormControl } from "../FormControl/FormControl";
import usePrevious from "../../hooks/usePrevious";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    onChange,
    disabled = false,
    error,
    id,
    name,
    required,
    defaultChecked = false,
    checked,
    value,
  } = props;

  const { prefix } = useGlobalSettings();
  const { setHasError } = useFieldsetError();
  const formControlCtx = useFormControl();
  const { ariaDescribedBy } = formControlCtx;

  const baseClass = `${prefix}--checkbox`;
  const errorClass = `${baseClass}__error`;

  const CheckboxClasses = classNames(baseClass, {
    [errorClass]: error,
  });

  const prevError = usePrevious(error);

  useEffect(() => {
    if (error !== prevError) {
      setHasError(!!error);
    }
  }, [error, prevError, setHasError]);

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
      disabled={disabled}
      required={required}
      type="checkbox"
      className={CheckboxClasses}
      defaultChecked={defaultChecked}
      aria-describedby={ariaDescribedBy}
      checked={checked}
      value={value}
    />
  );
});

const LabelledCheckbox = React.forwardRef<
  HTMLInputElement,
  LabelledCheckboxProps
>((props, ref) => {
  const fieldId = props.id ? props.id : props.name;
  const { style, inputStyle, ...rest } = props;
  return (
    <FormControl fieldId={fieldId} style={style} {...rest}>
      <Checkbox ref={ref} style={inputStyle} {...rest} />
    </FormControl>
  );
});

export default LabelledCheckbox;
