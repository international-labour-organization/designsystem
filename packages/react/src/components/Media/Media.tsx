import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { MediaProps } from "./Media.props";

const Media: FC<MediaProps> = ({ alt, caption, className, credit, url }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--media`;

  const mediaClasses = classNames(className, {
    [baseClass]: true,
  });

  const imgClasses = classNames("", {
    [`${baseClass}--img`]: true,
  });

  const captionClasses = classNames("", {
    [`${baseClass}--caption`]: true,
  });

  const creditClasses = classNames("", {
    [`${baseClass}--credit`]: true,
  });

  return (
    <figure className={mediaClasses}>
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
      {credit && <span className={creditClasses}>{credit}</span>}
      {caption && <figcaption className={captionClasses}>{caption}</figcaption>}
    </figure>
  );
};

export default Media;
