import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ImageProps, ImageUrl } from "./Image.props";
import { Tooltip } from "../Tooltip";

const Image: FC<ImageProps> = ({
  alt,
  caption,
  className,
  credit,
  url,
  theme,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--image`;

  const imageClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}__theme__${theme}`]: theme,
  });

  return (
    <figure className={imageClasses}>
      <div className={`${baseClass}--wrapper`}>
        <picture>
          {url &&
            url
              .sort((a: ImageUrl, b: ImageUrl) => a.breakpoint - b.breakpoint)
              .slice(1)
              .reverse()
              .map((item: ImageUrl, index: number) => (
                <source
                  srcSet={item.src}
                  media={`(min-width: ${item.breakpoint}px)`}
                  key={index}
                />
              ))}
          {url && <img src={url[0].src} alt={alt} />}
        </picture>
        {credit && (
          <div className={`${baseClass}--credit`}>
            <div className={`${baseClass}--tooltip`}>
              <Tooltip
                label={credit}
                iconTheme={theme === "dark" ? "light" : "dark"}
              />
            </div>
            <div className={`${baseClass}--label`}>{credit}</div>
          </div>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default Image;
