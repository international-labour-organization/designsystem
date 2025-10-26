import classNames from "classnames";
import { forwardRef } from "react";
import { SocialMediaProps } from "./SocialMedia.props";
import { useGlobalSettings } from "../../hooks";
import { DynamicHeading } from "../DynamicHeading/DynamicHeading";

const SocialMedia = forwardRef<HTMLDivElement, SocialMediaProps>(
  (
    {
      className,
      theme = "light",
      justify = "start",
      headline,
      icons,
      iconSize = "normal",
      titleLevel = "h5",
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
        {headline && (
          <DynamicHeading
            level={titleLevel}
            className={`${baseClass}--headline`}
          >
            {headline}
          </DynamicHeading>
        )}
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

export default SocialMedia;
