import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ButtonProps } from "./Button.props";
import { Link } from "../Link";

const Button: FC<ButtonProps> = ({
  callback,
  children,
  className,
  disabled = false,
  icon,
  iconPosition,
  label,
  size = "large",
  type = "primary",
  url,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--button`;
  const hasURL = !!url;
  const icoPos = iconPosition || "left";

  const ButtonClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${size}`]: size,
    [`${baseClass}--${type}`]: type,
    [`icon--${icon} icon__position--${icoPos}`]: icon,
  });

  /**
   * On click, if there is a callback, call it
   */
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    <>
      {hasURL ? (
        <Link
          children={children}
          className={ButtonClasses}
          url={url}
          label={label}
        />
      ) : (
        <button className={ButtonClasses} onClick={(e) => handleClick(e)} disabled={disabled}>
          {label && <span className="button__label">{label}</span>}
        </button>
      )}
    </>
  );
};

export default Button;
