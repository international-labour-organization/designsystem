import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ButtonProps } from "./Button.props";
import { Link } from "../Link";
import { Icon } from "../Icon";

const Button: FC<ButtonProps> = ({
  callback,
  className,
  disabled = false,
  icon,
  icononly,
  iconPosition,
  kind = "button",
  label,
  opensmodal,
  size = "large",
  target = "",
  type = "primary",
  url,
  style,
  name,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--button`;
  const hasURL = !!url;
  const icoPos = iconPosition || "left";

  const ButtonClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}__${size}`]: size,
    [`${baseClass}__${type}`]: type,
    [`${baseClass}--icon ${baseClass}--icon--position__${icoPos}`]:
      icon && !icononly,
    [`${baseClass}--icon ${baseClass}--icon--only`]: icon && icononly,
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
          className={ButtonClasses}
          target={target}
          url={url}
          label={label}
          style={style}
        >
          {icon && <Icon name={icon} hidden={true} />}
        </Link>
      ) : (
        <button
          className={ButtonClasses}
          onClick={(e) => handleClick(e)}
          disabled={disabled}
          type={kind}
          aria-haspopup={opensmodal ? `dialog` : false}
          style={style}
          name={name}
        >
          {label && <span className="button__label">{label}</span>}
          {icon && <Icon name={icon} hidden={true} />}
        </button>
      )}
    </>
  );
};

export default Button;
