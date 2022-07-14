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
  });

  /**
   * On click, if there is a callback, call it
   */
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    <form className={SearchFieldClasses} action={action}>
      <Input {...input} />
      <input
        className={buttonClass}
        type="submit"
        onClick={(e) => handleClick(e)}
      />
    </form>
  );
};

export default SearchField;
