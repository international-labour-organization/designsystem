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
    const controlClass = `${baseClass}--control`;
    const errorClass = `${baseClass}__error`;

    const RadioClasses = classNames(baseClass, {
      [errorClass]: error,
    });

    return (
      <div className={RadioClasses}>
        <input
          ref={ref}
          id={id ? id : name}
          name={name}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          type="radio"
          defaultChecked={defaultChecked}
          aria-describedby={ariaDescribedBy}
          checked={checked}
          value={value}
        />
        <span className={controlClass}></span>
      </div>
    );
  }
);

const LabelledRadio = React.forwardRef<HTMLInputElement, LabelledRadioProps>(
  (props, ref) => {
    const {
      style,
      inputStyle,
      className,
      labelPlacement = "end",
      labelSize = "small",
      ...rest
    } = props;
    const fieldId = props.id ? props.id : props.name;

    return (
      <FormControl
        fieldId={fieldId}
        style={style}
        className={className}
        labelPlacement={labelPlacement}
        labelSize={labelSize}
        {...rest}
      >
        <Radio ref={ref} style={inputStyle} {...rest} />
      </FormControl>
    );
  }
);

export default LabelledRadio;
