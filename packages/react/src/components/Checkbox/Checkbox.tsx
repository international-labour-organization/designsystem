import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CheckboxProps } from "./Checkbox.props";
import { useFieldsetError } from "../Fieldset/Fieldset";

const Checkbox: FC<CheckboxProps> = ({
  onChange,
  disabled = false,
  error,
  id,
  name,
  required,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--checkbox`;
  const errorClass = `${baseClass}__error`;

  const { setHasError } = useFieldsetError();

  if (error) {
    setHasError(true);
  }

  const CheckboxClasses = classNames(baseClass, {
    [errorClass]: error,
  });

  const [checked, setChecked] = useState(false);

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      id={id}
      name={name ? name : id}
      onChange={handleChange}
      disabled={disabled}
      required={required}
      type={"checkbox"}
      className={CheckboxClasses}
      checked={checked}
    />
  );
};

export default Checkbox;
