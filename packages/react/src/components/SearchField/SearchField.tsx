import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { SearchFieldProps } from "./SearchField.props";
import { Input } from "../Input";

const SearchField: FC<SearchFieldProps> = ({
  action,
  callback,
  className,
  input,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--searchfield`;
  const buttonClass = `${baseClass}--button`;

  const SearchFieldClasses = classNames(className, {
    [baseClass]: true,
    [`haslabel`]: input.label,
  });

  /**
   * On click, if there is a callback, call it
   */
  const handleSubmit = (e: React.SyntheticEvent) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    <form
      className={SearchFieldClasses}
      action={action}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        id={input.id}
        name={input.name}
        disabled={input.disabled}
        callback={input.callback}
        error={input.error}
        helper={input.helper}
        label={input.label}
        placeholder={input.placeholder}
        type={input.type}
        className={`${prefix}--input`}
      />
      <input className={buttonClass} disabled={input.disabled} type="submit" />
    </form>
  );
};

export default SearchField;
