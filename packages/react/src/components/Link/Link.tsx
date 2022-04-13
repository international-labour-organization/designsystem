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
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass =
  typeof className !== "undefined" && className.includes("button")
    ? ""
    : `${prefix}--link`;

  const LinkClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
  });
  
  function createMarkup() {
    return {__html: label};
  }

  return (
    <a className={LinkClasses} href={url} target={target} rel={target ? "noopener noreferrer": ''} {...rest}>
      {label && (
        <span className="link__label" dangerouslySetInnerHTML={createMarkup()}></span>
      )}
      {children}
    </a>
  );
};

export default Link;
