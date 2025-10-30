import classNames from "classnames";
import { useEffect, useReducer, useRef } from "react";
import { Icon } from "../Icon";
import useGlobalSettings from "../../hooks/useGlobalSettings";

export interface AudioPlayerProps {
  /**
   * Path to audio file
   */
  src: string;

  /**
   * Specify custom class name for styling
   */
  className?: string;

  /**
   * The name of the audio track
   */
  name: string;

  /**
   * The name of the programme that the audio track belongs to
   */
  programme: string;

  /**
   * The name of the creator of the audio track
   */
  creator: string;
}

const initialState = {
  currentTime: 0,
  totalTime: 0,
  playing: false,
  volume: 1,
};

type AudioPlayerAction =
  | { type: "INITIALIZE"; totalTime: number }
  | { type: "TOGGLE_PLAYING" }
  | { type: "UPDATE_TIME"; time: number }
  | { type: "SEEK_TO"; time: number }
  | { type: "SET_VOLUME"; volume: number };

const reducer = (state: typeof initialState, action: AudioPlayerAction) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, totalTime: action.totalTime };
    case "TOGGLE_PLAYING":
      return { ...state, playing: !state.playing };
    case "UPDATE_TIME":
      return { ...state, currentTime: action.time };
    case "SEEK_TO":
      return { ...state, currentTime: action.time };
    case "SET_VOLUME":
      return { ...state, volume: action.volume };
    default:
      return state;
  }
};

const getTimeString = (time: number) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const getProgressPercentage = (currentTime: number, totalTime: number) => {
  if (totalTime === 0) {
    return 0;
  }
  return (currentTime / totalTime) * 100;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  className,
  name,
  programme,
  creator,
  src,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--audio-player`;
  const audioPlayerClasses = classNames(baseClass, className);

  const [state, dispatch] = useReducer(reducer, initialState);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Example: handle play/pause
  const togglePlaying = () => {
    if (audioRef.current) {
      if (!state.playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    dispatch({ type: "TOGGLE_PLAYING" });
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      dispatch({ type: "INITIALIZE", totalTime: audioRef.current.duration });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch({ type: "UPDATE_TIME", time: audioRef.current.currentTime });
    }
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 15,
        state.totalTime
      );
    }
  };

  const handleSkipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime - 15,
        0
      );
    }
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const newTime = (clickX / rect.width) * state.totalTime;
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value) / 100;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    dispatch({ type: "SET_VOLUME", volume: newVolume });
  };

  return (
    <div className={audioPlayerClasses}>
      <div
        role="progressbar"
        tabIndex={-1}
        aria-valuenow={state.currentTime}
        aria-valuemin={0}
        aria-valuemax={state.totalTime}
        className={`${baseClass}--progress-bar`}
        onClick={handleProgressBarClick}
      >
        <div
          className={`${baseClass}--progress-complete`}
          style={
            {
              "--progress": `${getProgressPercentage(state.currentTime, state.totalTime)}%`,
            } as React.CSSProperties
          }
        />
      </div>
      <div className={`${baseClass}--body`}>
        <div className={`${baseClass}--left`}>
          <p className={`${baseClass}--track-name`}>{name}</p>
          <div className={`${baseClass}--track-details`}>
            <span className={`${baseClass}--track-programme`}>{programme}</span>
            <span className={`${baseClass}--track-creator`}>{creator}</span>
          </div>
        </div>
        <div className={`${baseClass}--center`}>
          <button
            className={`${baseClass}--skip-button`}
            onClick={handleSkipBackward}
            aria-label="Rewind 15 seconds"
          >
            <Icon name="Ffbackward_15" />
          </button>
          <button
            className={`${baseClass}--play-button`}
            aria-label={state.playing ? "Pause" : "Play"}
            onClick={togglePlaying}
          >
            {!state.playing && (
              <Icon
                className={`${baseClass}--play-icon`}
                name="TriangleRight"
                size={32}
              />
            )}
            {state.playing && (
              <Icon
                className={`${baseClass}--play-icon`}
                name="Pause"
                size={32}
              />
            )}
          </button>
          <button
            className={`${baseClass}--skip-button`}
            onClick={handleSkipForward}
            aria-label="Fast forward 15 seconds"
          >
            <Icon name="Fforward_15" />
          </button>
        </div>
        <div className={`${baseClass}--right`}>
          <div className={`${baseClass}--duration`}>
            <p className={`${baseClass}--duration-played`}>
              {getTimeString(state.currentTime)}
            </p>
            <p className={`${baseClass}--duration-total`}>
              {getTimeString(state.totalTime)}
            </p>
          </div>
          <div className={`${baseClass}--separator`}></div>
          <Icon
            className={`${baseClass}--volume-icon`}
            name={state.volume === 0 ? "SoundOff" : "SoundOn"}
          />
          <input
            type="range"
            className={`${baseClass}--volume-slider`}
            style={
              {
                "--progress": `${state.volume * 100}%`,
              } as React.CSSProperties
            }
            value={state.volume * 100}
            onChange={handleVolumeChange}
            min={0}
            max={100}
            step={10}
          ></input>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};
