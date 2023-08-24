import { useEffect, forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CheckboxProps } from "./Checkbox.props";
import { useFieldsetError } from "../Fieldset/Fieldset";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    onChange,
    disabled = false,
    error,
    id,
    name,
    required,
    defaultChecked = false,
  } = props;

  const { prefix } = useGlobalSettings();

  const { setHasError } = useFieldsetError();

  const baseClass = `${prefix}--checkbox`;
  const errorClass = `${baseClass}__error`;

  const CheckboxClasses = classNames(baseClass, {
    [errorClass]: error,
  });

  // Initialize the error state
  useEffect(() => {
    setHasError(!!error);
  }, [error, setHasError]);

  /**
   * On change, if there is a callback, call it
   */
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
      type={"checkbox"}
      className={CheckboxClasses}
      defaultChecked={defaultChecked}
    />
  );
});

export default Checkbox;
