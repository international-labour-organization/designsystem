import React from "react";
import { ToggleProps } from "./Toggle.props";
import { useGlobalSettings } from "../../hooks";
import classnames from "classnames";

const Toggle: React.FC<ToggleProps> = ({
  size = "medium",
  error = false,
  disabled = false,
  defaultChecked = false,
  required = false,
  id,
  onChange,
  onClick,
  inputProps,
  className,
}) => {
  const { prefix } = useGlobalSettings();

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
        disabled={disabled}
        defaultChecked={defaultChecked}
        name={id}
        id={id}
        type="checkbox"
        role="switch"
        required={required}
        onChange={onChange}
        onClick={onClick}
        {...inputProps}
      />
      <span className={sliderClass} />
    </div>
  );
};

export default Toggle;
