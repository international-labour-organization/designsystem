import classnames from "classnames";
import { nanoid } from "nanoid";
import { FC, createContext, useContext, useMemo, useState } from "react";
import { useGlobalSettings } from "../../hooks";
import { Tooltip } from "../Tooltip";
import { FormControlProps } from "./FormControl.props";

interface FormControlContextProps {
  tooltipId: string;
  helperId: string;
  errorId: string;
  setDisabled?: (disabled: boolean) => void;
  setError?: (error: boolean) => void;
  setFieldId?: (id: string) => void;
}

export const FormControlContext: React.Context<FormControlContextProps> =
  createContext({
    tooltipId: "",
    helperId: "",
    errorId: "",
  });

export const useFormControlContext = () => useContext(FormControlContext);

// A function used to calculate unique IDs for the internal accessibility elements
function getA11yFields(prefix = "ilo") {
  return {
    tooltipId: `${prefix}--tooltip--${nanoid()}`,
    helperId: `${prefix}--helper--${nanoid()}`,
    errorId: `${prefix}--error--${nanoid()}`,
  };
}

const FormControl: FC<FormControlProps> = ({
  children,
  className,
  label,
  helper,
  errorMessage,
  tooltip,
  style,
  labelSize = "medium",
  labelPlacement = "top",
}) => {
  const { prefix } = useGlobalSettings();

  // The ids of the tooltip, helper, and error only get calculated on first render
  const a11yFields = useMemo(() => getA11yFields(prefix), [prefix]);

  const { tooltipId, helperId, errorId } = a11yFields;

  const [error, setError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [fieldId, setFieldId] = useState<string>("");

  // The context passed down to form elements wrapped by the form control
  const contextValue: FormControlContextProps = {
    tooltipId,
    helperId,
    errorId,
    setError,
    setDisabled,
    setFieldId,
  };

  // Classes applied to the outer container
  const baseClass = `${prefix}--form-control`;
  const errorClass = `${baseClass}__error`;
  const disabledClass = `${baseClass}__disabled`;
  const labelPlacementClass = `${baseClass}__label-placement__${labelPlacement}`;

  const formControlClass = classnames(
    baseClass,
    className,
    labelPlacementClass,
    [{ [errorClass]: error }, { [disabledClass]: disabled }]
  );

  // Classes applies to the label
  const labelBaseClass = `${baseClass}--label`;
  const labelSizeClass = `${labelBaseClass}__size__${labelSize}`;
  const labelClass = classnames(labelBaseClass, labelSizeClass);

  // Helper class
  const helperClass = `${baseClass}--helper`;

  // Helper text
  const helperText = error ? errorMessage : helper;

  // Show the error message if there is an error and an error message
  const showError = !!error && !!errorMessage;

  // Show the helper text if there is no error and a helper text
  const showHelper = !showError && !!helperText;

  return (
    <FormControlContext.Provider value={contextValue}>
      <div className={formControlClass} style={style}>
        <span className={labelClass}>
          <label htmlFor={fieldId}>{label}</label>
          {tooltip && (
            <Tooltip
              id={tooltipId}
              className={`${baseClass}--legend--tooltip`}
              icon={true}
              label={tooltip}
              theme={"dark"}
            />
          )}
        </span>
        {children}
        {showHelper && (
          <span id={helperId} className={helperClass}>
            {helper}
          </span>
        )}
        {showError && (
          <span id={errorId} className={helperClass}>
            {errorMessage}
          </span>
        )}
      </div>
    </FormControlContext.Provider>
  );
};

export default FormControl;
