import { forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import FormControl, { useFormControl } from "../FormControl/FormControl";
import { DatePickerProps, LabelledDatePickerProps } from "./DatePicker.props";

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    const {
      onChange,
      onBlur,
      disabled = false,
      error,
      id,
      name,
      placeholder,
      required,
      max,
      min,
      step,
    } = props;

    const { prefix } = useGlobalSettings();
    const formControlCtx = useFormControl();
    const { ariaDescribedBy } = formControlCtx;

    const inputClass = `${prefix}--input`;
    const baseClass = `${prefix}--datepicker`;

    const datePickerClasses = classNames(inputClass, baseClass, {
      [`error`]: error,
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      picker?: string
    ) => {
      if (onChange) {
        onChange(e, picker);
      }
    };

    return (
      <input
        ref={ref}
        type="date"
        id={id ? id : name}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        className={datePickerClasses}
        max={max}
        min={min}
        step={step}
        aria-describedby={ariaDescribedBy}
      />
    );
  }
);

const LabelledDatePicker = forwardRef<
  HTMLInputElement,
  LabelledDatePickerProps
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
      <DatePicker ref={ref} style={inputStyle} {...rest} />
    </FormControl>
  );
});

export default LabelledDatePicker;
