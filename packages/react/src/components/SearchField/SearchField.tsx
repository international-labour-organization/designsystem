import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { SearchFieldProps } from "./SearchField.props";
import { Input } from "../Input";
import { Icon } from "../Icon";

const SearchField: FC<SearchFieldProps> = ({
  action,
  callback,
  className,
  input,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--searchfield`;
  const buttonClass = `${baseClass}--button`;
  const clearButtonClass = `${baseClass}--clear-button ${
    searchValue.trim() !== "" && "show"
  }`;
  const fieldSetClass = `${prefix}--fieldset`;

  const SearchFieldClasses = classNames(className, {
    [baseClass]: true,
    [`haslabel`]: input?.label,
  });

  const handleClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
    if (callback) {
      callback(e);
    }
  };

  // handle click for clear button in search
  const handleClearButtonClick: React.MouseEventHandler<
    HTMLInputElement
  > = () => {
    setSearchValue("");
  };

  // Update search value on input
  const onKeyPress: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const inputHasType = !!input?.type;

  if (!inputHasType) {
    throw new Error("SearchField: Input must have type prop");
  }

  return inputHasType ? (
    <form className={SearchFieldClasses} action={action}>
      <div className={fieldSetClass}>
        <Input
          id={input?.id}
          name={input?.name}
          disabled={input?.disabled}
          callback={onKeyPress}
          error={input?.error}
          helper={input?.helper}
          label={input?.label}
          placeholder={input?.placeholder}
          type={input?.type}
          value={searchValue}
          className={`${prefix}--input`}
        />
        <span onClick={handleClearButtonClick} className={clearButtonClass}>
          <Icon name="close" hidden={true} />
        </span>
      </div>
      <input
        className={buttonClass}
        disabled={input?.disabled}
        type="submit"
        onClick={handleClick}
      />
    </form>
  ) : null;
};

export default SearchField;
