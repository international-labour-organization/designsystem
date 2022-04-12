import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { LinkProps } from "./Link.props";

const Link: FC<LinkProps> = ({
  children,
  className,
  label,
<<<<<<< Updated upstream
  theme = "light",
=======
  target,
  theme = 'light',
>>>>>>> Stashed changes
  url,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--link`;

  const LinkClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
  });
  
  function createMarkup() {
    return {__html: label};
  }

  return (
<<<<<<< Updated upstream
    <a className={LinkClasses} href={url} {...rest}>
      {label && (
        <span className="link__label" dangerouslySetInnerHTML={createMarkup()}></span>
      )}
=======
    <a className={LinkClasses} href={url} target={target} rel={target ? "noopener noreferrer": ''} {...rest}>
      {label && 
        <span className="link__label" dangerouslySetInnerHTML={label}></span>
      }
>>>>>>> Stashed changes
      {children}
    </a>
  );
};

export default Link;
