import { Ref, forwardRef } from "react";
import { ToggleProps, LabelledToggleProps } from "./Toggle.props";
import { useGlobalSettings } from "../../hooks";
import classnames from "classnames";
import FormControl, { useFormControl } from "../FormControl/FormControl";

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      size = "medium",
      error = false,
      disabled = false,
      defaultChecked = false,
      required = false,
      id,
      name,
      onChange,
      onBlur,
      onClick,
      checked,
      className,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const formControlCtx = useFormControl();
    const { ariaDescribedBy } = formControlCtx;

    const hasError = !disabled && !!error;

    const baseClass = `${prefix}--input--toggle`;
    const sliderClass = `${baseClass}--slider`;

    const toggleClass = classnames(
      baseClass,
      className,
      `${baseClass}__size__${size}`,
      [
        { [`${baseClass}__error`]: hasError },
        { [`${baseClass}__disabled`]: disabled },
      ]
    );

    return (
      <div className={toggleClass}>
        <input
          ref={ref} // Forwarded ref applied here
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          name={name}
          id={id ? id : name}
          type="checkbox"
          role="switch"
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onClick}
          aria-describedby={ariaDescribedBy}
        />
        <span className={sliderClass} />
      </div>
    );
  }
);

const LabelledToggle = forwardRef(
  (props: LabelledToggleProps, ref: Ref<HTMLInputElement>) => {
    const fieldId = props.id ? props.id : props.name;
    const { style, inputStyle, className, ...rest } = props;
    return (
      <FormControl
        fieldId={fieldId}
        style={style}
        className={className}
        {...rest}
      >
        <Toggle ref={ref} style={inputStyle} {...rest} />
      </FormControl>
    );
  }
);

export default LabelledToggle;
