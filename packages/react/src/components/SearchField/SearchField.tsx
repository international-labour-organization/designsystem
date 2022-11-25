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
    [`haslabel`]: input?.label,
  });

  /**
   * On click, if there is a callback, call it
   */
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (callback) {
      callback(e);
    }
  };

  const inputHasType = !!input?.type;

  if (!inputHasType) {
    throw new Error("SearchField: Input must have type prop");
  }

  return inputHasType ? (
    <form className={SearchFieldClasses} action={action}>
      <Input
        id={input?.id}
        name={input?.name}
        disabled={input?.disabled}
        callback={input?.callback}
        error={input?.error}
        helper={input?.helper}
        label={input?.label}
        placeholder={input?.placeholder}
        type={input?.type}
        className={`${prefix}--input`}
      />
      <input
        className={buttonClass}
        disabled={input?.disabled}
        type="submit"
        onClick={(e) => handleClick(e)}
      />
    </form>
  ) : null;
};

export default SearchField;
