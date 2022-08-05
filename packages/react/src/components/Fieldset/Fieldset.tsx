import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FieldsetProps } from "./Fieldset.props";
import { Tooltip } from "../Tooltip";

const Fieldset: FC<FieldsetProps> = ({
  children,
  className,
  error,
  inputid,
  helper,
  label,
  tooltip,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--fieldset`;
  const fieldsetClasses = classNames(className, {
    [baseClass]: true,
    [`error`]: error,
  });

  return (
    <fieldset className={fieldsetClasses}>
      {label && (
        <label className={`${baseClass}--label`} htmlFor={inputid}>
          {label}
        </label>
      )}
      {tooltip && (
        <Tooltip
          className={`${baseClass}--label`}
          icon={true}
          label={tooltip}
          theme={"dark"}
        ></Tooltip>
      )}
      {children}
      {helper && !error && (
        <span className={`${baseClass}--helper`}>{helper}</span>
      )}
      {error && <span className={`${baseClass}--error`}>{error}</span>}
    </fieldset>
  );
};

export default Fieldset;
