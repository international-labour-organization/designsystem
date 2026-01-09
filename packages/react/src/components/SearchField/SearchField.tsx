import { FC, useState, forwardRef, useId } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { SearchFieldProps } from "./SearchField.props";
import { Icon } from "../Icon";
import { FormControl } from "../FormControl";

const SearchField: FC<
  SearchFieldProps & React.RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ action, callback, className, input, onInputChange }, ref) => {
    const [searchValue, setSearchValue] = useState("");
    const { prefix } = useGlobalSettings();
    const baseClass = `${prefix}--searchfield`;
    const buttonClass = `${baseClass}--button`;
    const formClass = `${baseClass}--form`;
    const clearButtonClass = `${baseClass}--clear-button ${
      searchValue.trim() !== "" && "show"
    }`;
    const rId = useId();
    const fieldId = input?.id || rId;

    const fieldSetClass = `${prefix}--fieldset`;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (callback) {
        callback(e);
      }
    };

    // handle click for clear button in search
    const handleClearButtonClick: React.MouseEventHandler<
      HTMLSpanElement
    > = () => {
      setSearchValue("");
    };

    // Update search value on input and trigger dynamic search callback
    const onKeyPress: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const newValue = e.target.value;
      setSearchValue(newValue);
      if (onInputChange) {
        onInputChange(newValue);
      }
    };

    const inputHasType = !!input?.type;

    if (!inputHasType) {
      throw new Error("SearchField: Input must have type prop");
    }

    return inputHasType ? (
      <form action={action} className={formClass} style={{ display: "flex" }}>
        <FormControl
          fieldId={fieldId}
          error={!!input?.error}
          helper={input?.helper || ""}
          label={input?.label || ""}
          style={{ width: "100%" }}
        >
          <div className={classNames(className, baseClass)}>
            <div className={fieldSetClass}>
              <input
                className={`${prefix}--text-input`}
                id={fieldId}
                name={input.name}
                onChange={onKeyPress}
                placeholder={input?.placeholder}
                value={searchValue}
                ref={ref}
                disabled={input?.disabled}
                type="search"
              />
              <span
                onClick={handleClearButtonClick}
                className={clearButtonClass}
                role="presentation"
              >
                <Icon name="close" hidden={true} />
              </span>
            </div>
            <button
              className={buttonClass}
              disabled={input?.disabled}
              type="submit"
              onClick={handleClick}
            />
          </div>
        </FormControl>
      </form>
    ) : null;
  }
);

export default SearchField;
