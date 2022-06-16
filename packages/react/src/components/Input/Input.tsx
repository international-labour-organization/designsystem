import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({
  callback,
  disabled = false,
  error,
  id,
  name,
  placeholder,
  type = "text",
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--input`;

  const InputClasses = classNames("", {
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
    <input
      id={id}
      name={name}
      onChange={handleChange}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      className={InputClasses}
    />
  );
};

export default Input;
