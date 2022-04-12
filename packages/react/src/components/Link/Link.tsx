import React, { FC } from 'react';
import classNames from 'classnames';
import useGlobalSettings from '../../hooks/useGlobalSettings';
import { LinkProps } from './Link.props';

const Link: FC<LinkProps> = ({
  children,
  className,
  label,
  theme = 'light',
  url,
  ...rest
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--link`;

  const LinkClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
  });

  return (
    <a className={LinkClasses} href={url} {...rest}>
      {label && 
        <span className="link__label" dangerouslySetInnerHTML={label}></span>
      }
      {children}
    </a>
  );
};

export default Link;
