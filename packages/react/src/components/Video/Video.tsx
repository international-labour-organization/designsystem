import { forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { VideoProps } from "./Video.props";
import VideoPlayer from "./VideoPlayer";
import { VideoPlayerRef } from "./VideoPlayer.props";

const Video = forwardRef<VideoPlayerRef, VideoProps>(
  ({ className, caption, ...video }, ref) => {
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
          {video && <VideoPlayer {...video} ref={ref} />}
        </div>
        {caption && (
          <figcaption className={captionClasses}>{caption}</figcaption>
        )}
      </figure>
    );
  }
);

export default Video;
