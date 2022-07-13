import { FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { VideoProps } from "./Video.props";
import VideoPlayer from "./VideoPlayer";

const Video: FC<VideoProps> = ({ alt, className, caption, url, video }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--video`;

  const videoClasses = classNames(className, {
    [baseClass]: true,
  });

  const captionClasses = classNames("", {
    [`${baseClass}--caption`]: true,
  });

  return (
    <figure className={videoClasses}>
      <div className={`${videoClasses}--wrapper`}>
        {video && <VideoPlayer {...video} poster={{ url: url, alt: alt }} />}
      </div>
      {caption && <figcaption className={captionClasses}>{caption}</figcaption>}
    </figure>
  );
};

export default Video;
