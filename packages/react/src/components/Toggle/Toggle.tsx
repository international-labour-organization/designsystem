import React, { useEffect } from "react";
import { ToggleProps } from "./Toggle.props";
import { useGlobalSettings } from "../../hooks";
import classnames from "classnames";
import { useFormControl } from "../FormControl/FormControl";
import { FormControlContextProps } from "../FormControl/FormControl";

function getAriaDescribedBy(
  formControlCtx: FormControlContextProps,
  hasError: boolean
) {
  const { tooltipId, helperId, errorId } = formControlCtx;
  const ariaDescribedBy = classnames(tooltipId, helperId, {
    [`${errorId}`]: hasError,
  });
  return ariaDescribedBy.length > 0 ? ariaDescribedBy : undefined;
}

const Toggle: React.FC<ToggleProps> = ({
  size = "medium",
  error = false,
  disabled = false,
  defaultChecked = false,
  required = false,
  id,
  name,
  onChange,
  onClick,
  checked,
  className,
}) => {
  const { prefix } = useGlobalSettings();
  const formControlCtx = useFormControl();

  const { setDisabled, setError, setFieldId } = formControlCtx;

  // Set disabled if the field's disabled
  useEffect(() => {
    if (setDisabled) {
      setDisabled(disabled);
    }
  }, [disabled, setDisabled]);

  // Set error if the field's errored
  useEffect(() => {
    if (setError) {
      setError(error);
    }
  }, [error, setError]);

  // Set the field ID if it's provided
  useEffect(() => {
    if (id && setFieldId) {
      setFieldId(id);
    }
  }, [id, setFieldId]);

  const inputName = name || id;

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
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
        name={inputName}
        id={id}
        type="checkbox"
        role="switch"
        required={required}
        onChange={onChange}
        onClick={onClick}
        aria-describedby={getAriaDescribedBy(formControlCtx, hasError)}
      />
      <span className={sliderClass} />
    </div>
  );
};

export default Toggle;
