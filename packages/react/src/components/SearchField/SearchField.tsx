import { FC, useState, forwardRef, useId } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { SearchFieldProps } from "./SearchField.props";
import { Icon } from "../Icon";
import { FormControl } from "../FormControl";

// @TODO Remove the deprecated `input` prop (and SearchFieldInputProps) in
// the next major release. Until then, the merge logic below preserves
// backward compatibility for consumers still passing `input={{ ... }}`.

const SearchField: FC<
  SearchFieldProps & React.RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      action,
      callback,
      className,
      input,
      onInputChange,
      label,
      helper,
      error,
      errorMessage,
      disabled,
      style,
      labelPlacement,
      labelSize,
      tooltip,
      theme,
      placeholder,
      name,
      id,
      size = "large",
    },
    ref
  ) => {
    // Top-level props win; fall back to the deprecated `input` prop so
    // existing consumers keep working unchanged.
    const resolvedPlaceholder = placeholder ?? input?.placeholder;
    const resolvedName = name ?? input?.name;
    const resolvedLabel = label ?? input?.label ?? "";
    const resolvedHelper = helper ?? (input?.helper || undefined);
    const legacyErrorMessage =
      typeof input?.error === "string" ? input.error : undefined;
    const resolvedError = error ?? !!input?.error;
    const resolvedErrorMessage = errorMessage ?? legacyErrorMessage;
    // Only forward `disabled` to FormControl when set at the top level, to
    // preserve the prior behavior of `input.disabled` (input/button only).
    const inputDisabled = disabled ?? input?.disabled;

    const [searchValue, setSearchValue] = useState<string>("");
    const { prefix } = useGlobalSettings();
    const baseClass = `${prefix}--searchfield`;
    const buttonClass = `${baseClass}--button`;
    const formClass = `${baseClass}--form`;
    const clearButtonClass = `${baseClass}--clear-button ${
      searchValue.trim() !== "" && "show"
    }`;
    const rId = useId();
    const fieldId = id ?? input?.id ?? rId;

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
      const newValue = e.target?.value as string;
      setSearchValue(newValue);
      if (onInputChange) {
        onInputChange(newValue);
      }
    };

    return (
      <form action={action} className={formClass} style={{ display: "flex" }}>
        <FormControl
          fieldId={fieldId}
          error={resolvedError}
          errorMessage={resolvedErrorMessage}
          helper={resolvedHelper}
          label={resolvedLabel}
          disabled={disabled}
          labelPlacement={labelPlacement}
          labelSize={labelSize ?? size}
          tooltip={tooltip}
          theme={theme}
          style={{ width: "100%", ...style }}
        >
          <div
            className={classNames(
              className,
              baseClass,
              `${baseClass}__size__${size}`
            )}
          >
            <div className={fieldSetClass}>
              <input
                className={classNames(
                  `${prefix}--input`,
                  `${prefix}--input__size__${size}`
                )}
                id={fieldId}
                name={resolvedName}
                onChange={onKeyPress}
                placeholder={resolvedPlaceholder}
                value={searchValue}
                ref={ref}
                disabled={inputDisabled}
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
              disabled={inputDisabled}
              type="submit"
              onClick={handleClick}
            />
          </div>
        </FormControl>
      </form>
    );
  }
);

export default SearchField;
