import { FC, useEffect } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { RadioProps } from "./Radio.props";
import { useFieldsetError } from "../Fieldset/Fieldset";

const Radio: FC<RadioProps> = ({
  onChange,
  disabled = false,
  error,
  id,
  name,
  required,
  defaultChecked = false,
}) => {
  const { prefix } = useGlobalSettings();
  const { setHasError } = useFieldsetError();

  const baseClass = `${prefix}--radio`;
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
    console.log(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      id={id ? id : name}
      name={name}
      onChange={handleChange}
      disabled={disabled}
      required={required}
      type={"radio"}
      className={CheckboxClasses}
      defaultChecked={defaultChecked}
    />
  );
};

export default Radio;
