import { forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import FormControl, { useFormControl } from "../FormControl/FormControl";
import { DatePickerProps, LabelledDatePickerProps } from "./DatePicker.props";

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    const {
      onChange,
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
  const fieldId = props.id ? props.id : props.name;
  return (
    <FormControl fieldId={fieldId} {...props}>
      <DatePicker ref={ref} {...props} />
    </FormControl>
  );
});

export default LabelledDatePicker;
