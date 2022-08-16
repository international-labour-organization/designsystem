import { Children, FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FieldsetProps } from "./Fieldset.props";
import { Tooltip } from "../Tooltip";

const Fieldset: FC<FieldsetProps> = ({
  children,
  className,
  fieldsetid,
  legend,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--fieldset`;
  const fieldsetClasses = classNames(className, {
    [baseClass]: true,
  });

  return (
    <fieldset
      className={fieldsetClasses}
      id={fieldsetid ? (fieldsetid as any) : undefined}
    >
      {legend && <legend className={`${baseClass}--legend`}>{legend}</legend>}
      {Children.map(children, (child, i) => (
        <>
          {child && child.props && (
            <div
              key={`${baseClass}--input--${i} ${
                child.props.error ? "error" : ""
              }`}
            >
              {child.props.label && (
                <label
                  className={`${baseClass}--label`}
                  htmlFor={child.props.id}
                >
                  {child.props.label}
                </label>
              )}
              {child.props.tooltip && (
                <Tooltip
                  className={`${baseClass}--label`}
                  icon={true}
                  label={child.props.tooltip}
                  theme={"dark"}
                ></Tooltip>
              )}
              {child}
              {child.props.helper && !child.props.error && (
                <span className={`${baseClass}--helper`}>
                  {child.props.helper}
                </span>
              )}
              {child.props.error && (
                <span className={`${baseClass}--error`}>
                  {child.props.error}
                </span>
              )}
            </div>
          )}
        </>
      ))}
    </fieldset>
  );
};

export default Fieldset;
