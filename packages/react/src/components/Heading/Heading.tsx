import React from 'react';
import classNames from "classnames";
import useGlobalSettings from '../../hooks/useGlobalSettings';
import { HeadingProps } from './Heading.props';
  
const Heading: React.FC<HeadingProps> = ({
  level = 'h3',
  children,
  className,
  type,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const UseHeading = level;
  const baseClass = `${prefix}--${level}`;
  const headingClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${type}`]: type,
  });

  return (
    <UseHeading className={headingClasses} {...rest}>
      {children}
    </UseHeading>
  );
}

export default Heading;