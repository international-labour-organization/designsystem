import { FC } from "react";
import classNames from "classnames";
import { HeadingProps } from "./Heading.props";

const Heading: FC<HeadingProps> = ({
  level = "h3",
  children,
  className,
  type,
  ...rest
}) => {
  const UseHeading = level;
  const baseClass = `ilo--${level}`;
  const headingClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${type}`]: type,
  });

  return (
    <UseHeading className={headingClasses} {...rest}>
      {children}
    </UseHeading>
  );
};

export default Heading;
