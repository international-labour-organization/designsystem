import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LinkProps } from "./Link.props";

const Link: FC<LinkProps> = ({
  children,
  className,
  label,
  target,
  theme = "light",
  url,
  style,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass =
    typeof className !== "undefined" && className.includes("button")
      ? ""
      : `${prefix}--link`;

  const linkClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
  });

  return (
    <a
      className={linkClasses}
      href={url}
      target={target}
      rel={target ? "noopener noreferrer" : ""}
      style={style}
      {...rest}
    >
      {label && <span className="link__label">{label}</span>}
      {children}
    </a>
  );
};

export default Link;
