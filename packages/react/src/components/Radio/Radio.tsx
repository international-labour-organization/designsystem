import { FC } from "react";
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
  selected,
  tooltip,
  value,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--radio`;

  const RadioClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  /**
   * On change, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        checked={selected == value}
        value={value}
      />
    </FormElement>
  );
};

export default Radio;
