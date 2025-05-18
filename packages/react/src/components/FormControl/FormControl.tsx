import classnames from "classnames";
import { nanoid } from "nanoid";
import {
  FC,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useGlobalSettings } from "../../hooks";
import { Tooltip } from "../Tooltip";
import { FormControlProps } from "./FormControl.props";
import { useFormContext } from "../Form/Form";

interface AllyFields {
  tooltip?: string;
  helper?: string;
  errorMessage?: string;
}

interface AllyFieldsIds {
  tooltipId?: string;
  helperId?: string;
  errorId?: string;
}

export interface FormControlContextProps {
  ariaDescribedBy?: string;
}

// Calculates unique IDs for the internal accessibility elements
// TODO: When we upgrade to React 8, this should use useId instead
function getA11yFields(
  baseClass = "",
  { tooltip, helper, errorMessage }: AllyFields = {}
) {
  return {
    tooltipId: tooltip && `${baseClass}--tooltip--${nanoid()}`,
    helperId: helper && `${baseClass}--helper--${nanoid()}`,
    errorId: errorMessage && `${baseClass}--error--${nanoid()}`,
  };
}

// Calculates the aria-describedby attribute value based on whether or not there's an error
function getAriaDescribedBy(getAllyFields: AllyFieldsIds, hasError?: boolean) {
  const { tooltipId, helperId, errorId } = getAllyFields;

  const ariaDescribedBy = classnames(tooltipId, {
    [`${helperId}`]: !hasError,
    [`${errorId}`]: hasError,
  });

  // For some reason, classnames seems to return "undefined" as a string sometimes
  if (!ariaDescribedBy || ariaDescribedBy === "undefined") {
    return undefined;
  }
  return ariaDescribedBy;
}

// The context passed down to form elements wrapped by the form control
export const FormControlContext: React.Context<FormControlContextProps> =
  createContext({});

// Hook to get the context value
export const useFormControl = () => useContext(FormControlContext);

const FormControl: FC<FormControlProps> = ({
  children,
  className,
  label,
  helper,
  errorMessage,
  tooltip,
  style,
  error,
  disabled,
  fieldId,
  theme = "light",
  labelSize = "medium",
  labelPlacement = "top",
}) => {
  const { prefix } = useGlobalSettings();
  const { theme: formTheme } = useFormContext();

  const formControlTheme = formTheme || theme;

  // Classes applied to the outer container
  const baseClass = `${prefix}--form-control`;

  // The ids of the tooltip, helper, and error only get calculated on first render
  const a11yFields = useMemo(
    () => getA11yFields(baseClass, { helper, errorMessage, tooltip }),
    [baseClass, helper, errorMessage, tooltip]
  );

  // The ids of the tooltip, helper, and error
  const { tooltipId, helperId, errorId } = a11yFields;

  // The aria-describedby attribute value
  const [ariaDescribedBy, setAriaDescribedBy] = useState<string | undefined>(
    undefined
  );

  // Update the aria-describedby attribute value when the error changes
  useEffect(() => {
    setAriaDescribedBy(
      getAriaDescribedBy({ tooltipId, helperId, errorId }, error)
    );
  }, [tooltipId, helperId, errorId, error]);

  // The context passed down to form elements wrapped by the form control
  const contextValue: FormControlContextProps = {
    ariaDescribedBy,
  };

  // Classes applied to the outer container
  const errorClass = `${baseClass}__error`;
  const disabledClass = `${baseClass}__disabled`;
  const labelPlacementClass = `${baseClass}__label-placement__${labelPlacement}`;
  const themeClass = `${baseClass}__theme__${formControlTheme}`;

  const formControlClass = classnames(
    baseClass,
    className,
    labelPlacementClass,
    themeClass,
    [{ [errorClass]: error }, { [disabledClass]: disabled }]
  );

  // Classes applies to the label
  const labelBaseClass = `${baseClass}--label`;
  const labelSizeClass = `${labelBaseClass}__size__${labelSize}`;
  const labelClass = classnames(labelBaseClass, labelSizeClass);

  // Helper class
  const helperClass = `${baseClass}--helper`;

  // Show the error message if there is an error and an error message
  const showError = !!error && !!errorMessage;

  // Show the helper text if there is no error and a helper text
  const showHelper = !showError && !!helper;

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
              theme={formControlTheme === "dark" ? "light" : "dark"}
              iconTheme={formControlTheme}
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
          <span id={errorId} className={helperClass} aria-live="assertive">
            {errorMessage}
          </span>
        )}
      </div>
    </FormControlContext.Provider>
  );
};

export default FormControl;
