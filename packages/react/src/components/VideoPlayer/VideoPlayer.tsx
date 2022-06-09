import { FC, createRef, useState } from "react";
/* temporary way of importing ReactPlayer due to a known issue with ReactPlayer.
 * Revert to standard method of importing once RP's dev has fixed.
 */
import { default as RP } from "react-player";
import { findDOMNode } from "react-dom";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = RP as unknown as FC<ReactPlayerProps>;
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { VideoPlayerProps } from "./VideoPlayer.props";
import hoursMinutesSeconds from "../../utils/hoursMinutesSeconds";
import screenfull from "screenfull";

const VideoPlayer: FC<VideoPlayerProps> = ({
  controls,
  src,
  poster,
  youtube,
  tracks,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--video`;

  const playerClasses = classNames("", {
    [`${baseClass}--player`]: true,
  });

  const controlsClasses = classNames("", {
    [`${baseClass}--controls`]: true,
  });

  /**
   * State hooks for our player controls
   */
  const [duration, setDuration] = useState("0:00");
  const [playedtime, setPlayedtime] = useState("0:00");
  const [buffer, setBuffer] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [playhead, setPlayhead] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMute] = useState(false);
  const [showposter, showPoster] = useState(true);
  const [showvolume, showVolume] = useState(false);
  const [seeking, setSeeking] = useState(false);

  /**
   * Ref for the video element
   */
  const videoElement = createRef();

  /**
   * Set some constants to pass as props
   */
  const url = src ? src : youtube ? youtube : "";

  const youtubeparams = {
    controls: 0,
    modestbranding: 1,
  };

  const playerconfig = {
    file: {
      tracks: tracks || [],
    },
    youtube: url === youtube ? { playerVars: youtubeparams } : {},
  };

  /**
   * Fullscreen functionality
   */
  const toggleFullscreen = () => {
    /* This is a known issue with ReactPlayer */
    /* @ts-ignore */
    screenfull.request(findDOMNode(videoElement.current));
  };

  /**
   * Play/pause functionality
   */
  const togglePlay = () => {
    setPlaying(!playing);
    showPoster(false);
  };

  /**
   * Show volume slider
   */
  const showVolumeSlider = () => {
    showVolume(true);
  };

  /**
   * Hide volume slider
   */
  const hideVolumeSlider = () => {
    setTimeout(() => {
      showVolume(false);
    }, 2000);
  };

  /**
   * Mute/unmute
   */
  const toggleMute = () => {
    setMute(!muted);
    hideVolumeSlider();
  };

  /**
   * Volume change
   */
  const handleVolumeChange = (event: any) => {
    console.log("handleVolumeChange", event.target.value);
    setVolume(event.target.value * 0.1);
  };

  /**
   * Begin seek
   */
  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  /**
   * Seek
   */
  const handleSeekChange = (event: any) => {
    setPlayhead(parseFloat(event.target.value));
  };

  /**
   * End seek
   */
  const handleSeekMouseUp = (event: any) => {
    setSeeking(false);
    /* This is a known issue with ReactPlayer */
    /* @ts-ignore */
    videoElement.current.seekTo(parseFloat(event.target.value));
  };

  /**
   * handle display of progress
   */
  const handleProgress = (state: any) => {
    if (!seeking) {
      setPlayhead(state.played);
      setBuffer(state.loaded);
      setPlayedtime(hoursMinutesSeconds(state.playedSeconds));
    }
  };

  /**
   * get the duration to display
   */
  const handleDuration = (duration: any) => {
    setDuration(hoursMinutesSeconds(duration));
  };

  /**
   * on video end
   */
  const handleEnded = () => {
    setPlaying(false);
    setSeeking(false);
  };

  return (
    <div className={baseClass}>
      <ReactPlayer
        className={playerClasses}
        config={playerconfig as any}
        loop={false}
        muted={muted}
        playing={playing}
        ref={videoElement}
        url={url}
        width="100%"
        height="100%"
        volume={volume}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onEnded={handleEnded}
      />
      <img
        src={poster && poster.url}
        alt={poster && poster.alt}
        className={`${baseClass}--poster ${showposter ? "show" : ""}`}
      />
      <div className={`${controlsClasses} ${showposter ? "notplayed" : ""}`}>
        <label
          className={`${controlsClasses}--duration ${showposter ? "show" : ""}`}
        >
          {duration}
        </label>
        <button
          className={`${controlsClasses}--${!playing ? "play" : "pause"}`}
          onClick={togglePlay}
        >
          <span>
            {!playing ? controls && controls.play : controls && controls.pause}
          </span>
        </button>
        <div
          className={`${controlsClasses}--progress ${showposter ? "" : "show"}`}
        >
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={playhead}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className={`${controlsClasses}--progress-playhead`}
          />
          <progress
            className={`${controlsClasses}--progress-current`}
            max={1}
            value={playhead}
          />
          <progress
            className={`${controlsClasses}--progress-loaded`}
            max={1}
            value={buffer}
          />
          <div className={`${controlsClasses}--progress-played-container`}>
            <label
              className={`${controlsClasses}--progress-played`}
              style={{ ["--playhead" as any]: `${playhead * 100}%` }}
            >
              {playedtime}
            </label>
          </div>
        </div>
        <div
          className={`${controlsClasses}--volume ${showposter ? "" : "show"}`}
          onMouseEnter={showVolumeSlider}
          onMouseLeave={hideVolumeSlider}
        >
          <button
            className={`${controlsClasses}--showvolume ${muted ? "muted" : ""}`}
            onClick={toggleMute}
          >
            <span>{controls && controls.volume}</span>
          </button>
          <div className={`${controlsClasses}--setvolume-container`}>
            <input
              className={`${controlsClasses}--setvolume ${
                showvolume ? "show" : ""
              }`}
              type="range"
              step="0.5"
              defaultValue={volume}
              min="1"
              max="10"
              onChange={handleVolumeChange}
              onMouseLeave={hideVolumeSlider}
            />
          </div>
        </div>
        <button
          className={`${controlsClasses}--fullscreen ${
            showposter ? "" : "show"
          }`}
          onClick={toggleFullscreen}
        >
          <span>{controls && controls.fullscreen}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
