import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CheckboxProps } from "./Checkbox.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const Checkbox: FC<CheckboxProps> = ({
  callback,
  disabled = false,
  error,
  grouped,
  helper,
  id,
  label,
  name,
  required,
  tooltip,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--checkbox`;

  const CheckboxClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  const [checked, setChecked] = useState(false);

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    if (callback) {
      callback(e);
    }
  };

  return (
    <>
      {grouped && (
        <FormElement
          elemid={id as any}
          label={label}
          helper={helper as any}
          error={error as any}
          required={required as any}
          tooltip={tooltip}
        >
          <input
            id={id}
            name={name}
            onChange={handleChange}
            disabled={disabled}
            required={required as any}
            type={"checkbox"}
            className={CheckboxClasses}
            checked={checked}
          />
        </FormElement>
      )}
      {!grouped && (
        <Fieldset>
          <FormElement
            elemid={id as any}
            label={label}
            helper={helper as any}
            error={error as any}
            required={required as any}
            tooltip={tooltip}
            type={"checkbox"}
          >
            <input
              id={id}
              name={name}
              onChange={handleChange}
              disabled={disabled}
              required={required as any}
              type={"checkbox"}
              className={CheckboxClasses}
              checked={checked}
            />
          </FormElement>
        </Fieldset>
      )}
    </>
  );
};

export default Checkbox;
