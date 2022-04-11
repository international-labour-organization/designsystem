import React, { FC } from 'react';
import classNames from 'classnames';
import useGlobalSettings from '../../hooks/useGlobalSettings';
import { ButtonProps } from './Button.props';
import { Link } from '../Link';

const Button: FC<ButtonProps> = ({
  callback,
  children,
  className,
  icon,
  iconPosition,
  label,
  theme = 'large',
  url,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--button`;
  const hasURL = !!url;
  const icoPos = iconPosition || 'left';

  const ButtonClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
    [`icon--${icon} icon__position--${icoPos}`]: icon,
  });
  
  /**
   * On click, if there is a callback, call it
   */
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (callback) {
      callback(e);
    }
  };

  return (
    {hasURL ? (
      <Link  children={children} className={ButtonClasses} href={url} label={label} />
    ) : (
      <button className={ButtonClasses} label={label} onClick={(e) => handleClick(e)}>
        {label ? (
          <span className='button__label'>{label}</span>
        )}
      </button>
    )}
  );
};

export default Button;
