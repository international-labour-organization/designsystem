import React from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { HeadingProps } from "./Heading.props";

const Heading: React.FC<HeadingProps> = ({
  headingLevel = "h3",
  children,
  className,
  color,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const UseHeading = headingLevel;
  const baseClass = `${prefix}--${headingLevel}`;
  const headingClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${color}`]: color,
  });

  return (
    <UseHeading className={headingClasses} {...rest}>
      {children}
    </UseHeading>
  );
};

export default Heading;
