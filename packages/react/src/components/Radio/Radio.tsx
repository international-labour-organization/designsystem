import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { RadioProps } from "./Radio.props";
import { FormElement } from "../FormElement";

const Radio: FC<RadioProps> = ({
  callback,
  disabled = false,
  error,
  helper,
  id,
  label,
  name,
  required,
  tooltip,
  value,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--radio`;

  const RadioClasses = classNames("", {
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
        type={"radio"}
        className={RadioClasses}
        checked={checked}
        value={value}
      />
    </FormElement>
  );
};

export default Radio;
