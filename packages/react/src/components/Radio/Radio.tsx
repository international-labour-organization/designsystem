import React, { useEffect } from "react";
import classNames from "classnames";
import { useGlobalSettings } from "../../hooks";
import { LabelledRadioProps, RadioProps } from "./Radio.props";
import { useFieldsetError } from "../Fieldset/Fieldset";
import FormControl, { useFormControl } from "../FormControl/FormControl";
import usePrevious from "../../hooks/usePrevious";

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      onChange,
      onBlur,
      disabled = false,
      error,
      id,
      name,
      required,
      checked,
      defaultChecked = false,
      value,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const { setHasError } = useFieldsetError();
    const formControlCtx = useFormControl();
    const prevError = usePrevious(error);

    useEffect(() => {
      if (error !== prevError) {
        setHasError(!!error);
      }
    }, [error, prevError, setHasError]);

    const { ariaDescribedBy } = formControlCtx;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    const baseClass = `${prefix}--radio`;
    const errorClass = `${baseClass}__error`;

    const RadioClasses = classNames(baseClass, {
      [errorClass]: error,
    });

    return (
      <input
        ref={ref}
        id={id ? id : name}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        type="radio"
        className={RadioClasses}
        defaultChecked={defaultChecked}
        aria-describedby={ariaDescribedBy}
        checked={checked}
        value={value}
      />
    );
  }
);

const LabelledRadio = React.forwardRef<HTMLInputElement, LabelledRadioProps>(
  (props, ref) => {
    const fieldId = props.id ? props.id : props.name;
    return (
      <FormControl fieldId={fieldId} {...props}>
        <Radio ref={ref} {...props} />
      </FormControl>
    );
  }
);

export default LabelledRadio;
