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
  iconPosition,
  label,
  size = "large",
  target = "",
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
    [`icon icon__position--${icoPos}`]: icon,
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
        <Link className={ButtonClasses} target={target} url={url} label={label}>
          {icon && <Icon name={icon} hidden={true} />}
        </Link>
      ) : (
        <button
          className={ButtonClasses}
          onClick={e => handleClick(e)}
          disabled={disabled}
        >
          {label && <span className="button__label">{label}</span>}
          {icon && <Icon name={icon} hidden={true} />}
        </button>
      )}
    </>
  );
};

export default Button;
