import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { TextInputProps } from "./TextInput.props";

const TextInput: FC<TextInputProps> = ({
  onChange,
  error,
  id,
  name,
  placeholder,
  required,
  pattern,
  disabled = false,
  type = "text",
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--text-input`;

  const inputClass = classNames(baseClass, {
    [`${baseClass}__error`]: error,
  });

  const inputName = name ? name : id;

  return (
    <input
      id={id}
      name={inputName}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      type={type}
      className={inputClass}
      pattern={pattern}
    />
  );
};

export default TextInput;
