import { FC, createContext, useContext, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FieldsetProps } from "./Fieldset.props";
import { Tooltip } from "../Tooltip";

type FieldsetContextType = {
  hasError: boolean;
  setHasError: (value: boolean) => void;
};

// Create a new context for the error state
export const FieldsetErrorContext = createContext<FieldsetContextType>({
  hasError: false,
  setHasError: (value) => value,
});

// Custom hook to access the error state from the context
export const useFieldsetError = () => useContext(FieldsetErrorContext);

const Fieldset: FC<FieldsetProps> = ({
  children,
  className,
  legend,
  helper,
  tooltip,
  errorMessage,
  disabled = false,
  wrap = "nowrap",
  direction = "column",
  ...props
}) => {
  const { prefix } = useGlobalSettings();

  const [hasError, setHasError] = useState(false);

  const baseClass = `${prefix}--fieldset`;
  const wrapClass = `${baseClass}--wrap__${wrap}`;
  const directionClass = `${baseClass}--direction__${direction}`;
  const helperClass = `${baseClass}--helper`;
  const errorClass = `${baseClass}__error`;
  const disabledClass = `${baseClass}__disabled`;

  const fieldsetClasses = classNames(
    className,
    baseClass,
    wrapClass,
    directionClass,
    {
      [disabledClass]: disabled,
    }
  );

  const helperClasses = classNames(helperClass, {
    [errorClass]: hasError,
  });

  const contextValue = {
    hasError,
    setHasError,
  };

  const showHelper = helper || hasError;

  const helperMessage = hasError ? errorMessage : helper;

  console.log({ hasError, helper, errorMessage, helperMessage });

  return (
    <fieldset className={fieldsetClasses} {...props}>
      <div className={`${baseClass}--legend-wrapper`}>
        {legend && (
          <legend className={`${baseClass}--legend`}>
            {legend}
            {tooltip && (
              <Tooltip
                className={`${baseClass}--legend--tooltip`}
                icon={true}
                label={tooltip}
                theme={"dark"}
              ></Tooltip>
            )}
          </legend>
        )}
        {showHelper && <span className={helperClasses}>{helperMessage}</span>}
      </div>
      <div className={`${baseClass}--elements`}>
        <FieldsetErrorContext.Provider value={contextValue}>
          {children}
        </FieldsetErrorContext.Provider>
      </div>
    </fieldset>
  );
};

export default Fieldset;
