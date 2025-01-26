import classNames from "classnames";
import { forwardRef } from "react";

import { SocialTypes } from "../../types";
import { useGlobalSettings } from "../../hooks";

export type SocialMediaIcons = {
  /**
   * The name of the icon to display
   */
  icon: SocialTypes;

  /**
   * The url to link to
   */
  url: string;

  /**
   * The alt text of the link
   */
  label: string;

  className?: string;
};

export type SocialMediaProps = {
  /**
   * An optional headline to display above the icons
   */
  headline?: string;

  /**
   * Specify an optional className to be added to your SocialMedia.
   */
  className?: string;

  /**
   * Specify the theme of the SocialMedia.
   */
  theme?: "light" | "dark";

  /**
   * The justification of the icons
   */
  justify?: "start" | "center";

  /**
   * Specify the icons to display.
   */
  icons: SocialMediaIcons[];

  /**
   * The size of the social media icons
   */
  iconSize: "normal" | "large";
};

const SocialMedia = forwardRef<HTMLDivElement, SocialMediaProps>(
  (
    {
      className,
      theme = "light",
      justify = "start",
      headline,
      icons,
      iconSize = "normal",
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();

    const baseClass = `${prefix}--social-media`;

    return (
      <div
        className={classNames(
          baseClass,
          `${baseClass}__theme__${theme}`,
          `${baseClass}__justify__${justify}`,
          className
        )}
        ref={ref}
      >
        {headline && <h5 className={`${baseClass}--headline`}>{headline}</h5>}
        <ul
          className={classNames(
            `${baseClass}--list`,
            `${baseClass}--list__size__${iconSize}`
          )}
        >
          {icons.map((item) => (
            <li
              className={classNames(`${baseClass}--list--item`, item.className)}
              key={item.url}
            >
              <a
                title={item.label}
                className={classNames(
                  `${baseClass}--list--item--icon`,
                  `${baseClass}--list--item--icon__${item.icon}`
                )}
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export { SocialMedia };
