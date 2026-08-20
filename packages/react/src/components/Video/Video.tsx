import { forwardRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { VideoProps } from "./Video.props";
import VideoPlayer from "./VideoPlayer";
import { VideoPlayerRef } from "./VideoPlayer.props";

const Video = forwardRef<VideoPlayerRef, VideoProps>(
  ({ className, caption, theme, ...video }, ref) => {
    const { prefix } = useGlobalSettings();
    const baseClass = `${prefix}--video`;

    const videoClasses = classNames(className, {
      [baseClass]: true,
      [`${baseClass}__theme__${theme}`]: theme,
    });

    return (
      <figure className={videoClasses}>
        <div className={`${baseClass}--wrapper`}>
          {video && <VideoPlayer {...video} ref={ref} />}
        </div>
        {caption && (
          <figcaption className={`${baseClass}--caption`}>{caption}</figcaption>
        )}
      </figure>
    );
  }
);

export default Video;
