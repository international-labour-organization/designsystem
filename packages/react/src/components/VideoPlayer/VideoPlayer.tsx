import { FC, useRef } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import { VideoPlayerProps } from "./VideoPlayer.props";

const VideoPlayer: FC<VideoPlayerProps> = ({ controls, src }) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--media`;

  const videoElement = useRef(null);

  const {
    handleOnTimeUpdate,
    handleVideoScrub,
    handleVolumeChange,
    playing,
    progress,
    showvolume,
    toggleFullscreen,
    togglePlay,
    toggleVolumeSlider,
  } = useVideoPlayer(videoElement);

  const controlsClasses = classNames("", {
    [`${baseClass}--controls`]: true,
  });

  const playbuttonClass = playing ? "play" : "pause";

  // if we are given both src and youtube, default to src
  const uselocal = !!src && src !== "";

  return (
    <>
      {uselocal && (
        <video ref={videoElement} onTimeUpdate={handleOnTimeUpdate} />
      )}
      <div className={controlsClasses}>
        <button
          className={`${controlsClasses}--${playbuttonClass}`}
          onClick={togglePlay}
        >
          {playing ? controls.play : controls.pause}
        </button>
        <div className={`${controlsClasses}--progress`}>
          <progress
            id="progress"
            value={progress}
            max="100"
            onClick={handleVideoScrub}
          >
            <span id="progress-bar"></span>
          </progress>
        </div>
        <button
          className={`${controlsClasses}--volume`}
          onClick={toggleVolumeSlider}
        >
          {controls.volume}
        </button>
        <input
          className={`${controlsClasses}--input-range ${
            showvolume ? "show" : ""
          }`}
          type="range"
          step="0.5"
          defaultValue="5"
          min="1"
          max="10"
          onClick={handleVolumeChange}
        />
        <button
          className={`${controlsClasses}--fullscreen`}
          onClick={toggleFullscreen}
        >
          {controls.fullscreen}
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
