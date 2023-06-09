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
      [errorClass]: hasError,
      [disabledClass]: disabled,
    }
  );

  const contextValue = {
    hasError,
    setHasError,
  };

  return (
    <fieldset className={fieldsetClasses} {...props}>
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
      <div className={`${baseClass}--elements`}>
        <FieldsetErrorContext.Provider value={contextValue}>
          {children}
        </FieldsetErrorContext.Provider>
      </div>
      {helper && <span className={helperClass}>{helper}</span>}
    </fieldset>
  );
};

export default Fieldset;
