import { forwardRef } from "react";
import classNames from "classnames";

import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ThemeTypes, SizeTypes } from "../../types";

export type ProfileProps = {
  /**
   * Specify the theme for your profile component.
   */
  theme?: ThemeTypes;

  /**
   * Specify the size for your profile component.
   */
  size?: SizeTypes;

  /**
   * Specify an avatar to be added to your Profile component. Image *must* be a perfect square. CMS backend should provide a fallback if the avatar is not populated.
   */
  avatar: string;

  /**
   * Specify a role to be added to your Profile component.
   */
  role?: string;

  /**
   * Specify the name to be added to your Profile component.
   */
  name: string;

  /**
   * Specify an optional className to be added to your Profile component.
   */
  className?: string;

  /**
   * Specify an optional description to be added to your Profile component.
   */
  description?: string;

  /**
   * Specify an optional link to be added to your Profile component.
   */
  link?: {
    /**
     * Specify the label for the Profile's link
     */
    label: string;

    /**
     * Specify the url for the Profile's link
     */
    url: string;
  };
};

const Profile = forwardRef<HTMLElement, ProfileProps>(
  (
    {
      avatar,
      className,
      description,
      link,
      name,
      role,
      theme = "light",
      size = "large",
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--profile`;
    const profileClasses = classNames(className, {
      [baseClass]: true,
      [`${baseClass}__theme__${theme}`]: theme,
      [`${baseClass}__size__${size}`]: size,
    });

    return (
      <figure className={profileClasses} ref={ref}>
        <img
          className={`${baseClass}--avatar`}
          src={avatar}
          alt={`Avatar for ${name}`}
        />
        <figcaption>
          <div className={`${baseClass}--figcaption--content`}>
            <div className={`${baseClass}--name`}>{name}</div>
            {role && <div className={`${baseClass}--role`}>{role}</div>}
          </div>
        </figcaption>
        {description && (
          <p className={`${baseClass}--description`}>{description}</p>
        )}
        {link && (
          <div className={`${baseClass}--link`}>
            <a href={link.url} target="__blank" rel="noopener noreferrer">
              <span className={`${baseClass}--link--label`}>{link.label}</span>
            </a>
          </div>
        )}
      </figure>
    );
  }
);

export { Profile };
