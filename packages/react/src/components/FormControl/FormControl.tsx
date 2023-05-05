import { FC } from "react";
import { FormControlProps } from "./FormControl.props";
import { useGlobalSettings } from "../../hooks";
import classnames from "classnames";
import { Tooltip } from "../Tooltip";

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
  const htmlFor = children.props.id;
  const error = children.props.error;
  const disabled = children.props.disabled;

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

  return (
    <div className={formControlClass} style={style}>
      <span className={labelClass}>
        <label htmlFor={htmlFor}>{label}</label>
        {tooltip && (
          <Tooltip
            className={`${baseClass}--legend--tooltip`}
            icon={true}
            label={tooltip}
            theme={"dark"}
          />
        )}
      </span>
      {children}
      {helperText && <span className={helperClass}>{helperText}</span>}
    </div>
  );
};

export default FormControl;
