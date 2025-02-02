import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { Link } from "../Link";
import { Icon } from "../Icon";
import { ButtonTypes, PositionTypes, SizeTypes } from "../../types";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  /**
   * Specify the content of your Button.
   */
  children?: ReactNode;

  /**
   * Specify an optional className to be added to your Button.
   */
  className?: string;

  /**
   * The size of the button: `small`, `medium`, `large`
   */
  size?: SizeTypes;

  /**
   * Types of the button: `primary`, `secondary`, `tertiary`, `ghost`
   */
  type?: ButtonTypes;

  /**
   * Specify if the button should be rendered as link
   */
  link?: {
    /**
     * Specify the url for the Button's href
     */
    url: string;

    /**
     * Specify the label for the Button
     */
    label: string;

    /**
     * Specify the target for when Button is really a link
     */
    target?: string;
  };
  icon?: {
    name: string;
    position?: PositionTypes;
    only?: boolean;
  };
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled = false,
      icon,
      size = "large",
      type = "primary",
      style,
      name,
      link,
      ...props
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--button`;

    const rootClasses = classNames(className, {
      [baseClass]: true,
      [`${baseClass}__${size}`]: size,
      [`${baseClass}__${type}`]: type,
      [`${baseClass}--icon ${baseClass}--icon--position__${icon?.position || "left"}`]:
        icon && !icon.only,
      [`${baseClass}--icon ${baseClass}--icon--only`]: icon && icon.only,
    });

    if (link) {
      return (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={rootClasses}
          target={link.target}
          url={link.url}
          label={link.label}
          style={style}
          // Link has no disabled state
        >
          {icon && <Icon name={icon.name} hidden={true} />}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={rootClasses}
        disabled={disabled}
        style={style}
        name={name}
        {...props}
      >
        <span className="button__label">{children}</span>
        {icon && <Icon name={icon.name} hidden={true} />}
      </button>
    );
  }
);

export { Button };
