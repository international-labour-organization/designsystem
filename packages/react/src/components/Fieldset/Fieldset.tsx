import { Children, FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FieldsetChild, FieldsetProps } from "./Fieldset.props";
import { Tooltip } from "../Tooltip";

const Fieldset: FC<FieldsetProps> = ({
  children,
  className,
  fieldsetid,
  grouperror,
  grouphelper,
  grouptooltip,
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
      id={fieldsetid ? fieldsetid : undefined}
    >
      {legend && (
        <legend className={`${baseClass}--legend`}>
          {legend}
          {grouptooltip && (
            <Tooltip
              className={`${baseClass}--legend--tooltip`}
              icon={true}
              label={grouptooltip}
              theme={"dark"}
            ></Tooltip>
          )}
        </legend>
      )}
      {grouphelper && !grouperror && (
        <span className={`${baseClass}--helper`}>{grouphelper}</span>
      )}
      {grouperror && (
        <span className={`${baseClass}--error`}>{grouperror}</span>
      )}
      {Children.map(children, (child: FieldsetChild, i) => (
        <>
          {child && child.props && (
            <div
              key={`${baseClass}--input--${i}`}
              className={`${baseClass}--input${
                child.props?.type ? "--" + child.props.type : ""
              } ${child.props.error ? "error" : ""}`}
            >
              {child.props.label && (
                <label
                  className={`${baseClass}--label`}
                  htmlFor={child.props.id ? child.props.id : child.props.name}
                >
                  {child.props.label}
                  {child.props.tooltip && (
                    <Tooltip
                      className={`${baseClass}--label--tooltip`}
                      icon={true}
                      label={child.props.tooltip}
                      theme={"dark"}
                    ></Tooltip>
                  )}
                </label>
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
