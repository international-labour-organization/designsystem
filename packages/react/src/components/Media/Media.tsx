import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { MediaProps } from "./Media.props";
import { Credit } from "../Credit";
import { VideoPlayer } from "../VideoPlayer";

const Media: FC<MediaProps> = ({
  alt,
  caption,
  className,
  credit,
  url,
  video,
}) => {
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

  return (
    <figure className={mediaClasses}>
      <div className={`${mediaClasses}--wrapper`}>
        {video && !video.hasvideo && (
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
        )}
        {video && video.hasvideo && (
          <VideoPlayer
            {...video}
            poster={{ url: url[url.length - 1].src, alt: alt }}
          />
        )}
        {video && !video.hasvideo && credit && <Credit credit={credit} />}
      </div>
      {caption && <figcaption className={captionClasses}>{caption}</figcaption>}
    </figure>
  );
};

export default Media;
