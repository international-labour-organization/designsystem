import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { ImageProps } from "./Image.props";
import { Credit } from "../Credit";

const Image: FC<ImageProps> = ({ alt, caption, className, credit, url }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--image`;

  const imageClasses = classNames(className, {
    [baseClass]: true,
  });

  const imgClasses = classNames("", {
    [`${baseClass}--img`]: true,
  });

  const captionClasses = classNames("", {
    [`${baseClass}--caption`]: true,
  });

  return (
    <figure className={imageClasses}>
      <div className={`${imageClasses}--wrapper`}>
        <picture className={imgClasses}>
          {url &&
            url
              .sort(
                (a: any, b: any) =>
                  parseFloat(a.breakpoint) - parseFloat(b.breakpoint)
              )
              .slice(1)
              .reverse()
              .map((item: any, index: any) => (
                <source
                  srcSet={item.src}
                  media={`(min-width: ${item.breakpoint}px)`}
                  key={index}
                />
              ))}
          <img src={url[0].src} alt={alt} />
        </picture>
        {credit && <Credit credit={credit} />}
      </div>
      {caption && <figcaption className={captionClasses}>{caption}</figcaption>}
    </figure>
  );
};

export default Image;
