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

  /**
   * Callback function that is invoked when the audio track ends
   */
  onEnded?: () => void;
}

const initialState = {
  currentTime: 0,
  totalTime: 0,
  playing: false,
  volume: 1,
};

enum AudioPlayerActionType {
  INITIALIZE = "INITIALIZE",
  SET_PLAYING = "SET_PLAYING",
  UPDATE_TIME = "UPDATE_TIME",
  SEEK_TO = "SEEK_TO",
  SET_VOLUME = "SET_VOLUME",
}

type AudioPlayerAction =
  | { type: AudioPlayerActionType.INITIALIZE; totalTime: number }
  | { type: AudioPlayerActionType.SET_PLAYING; playing: boolean }
  | { type: AudioPlayerActionType.UPDATE_TIME; time: number }
  | { type: AudioPlayerActionType.SEEK_TO; time: number }
  | { type: AudioPlayerActionType.SET_VOLUME; volume: number };

const reducer = (state: typeof initialState, action: AudioPlayerAction) => {
  switch (action.type) {
    case AudioPlayerActionType.INITIALIZE:
      return { ...state, totalTime: action.totalTime };
    case AudioPlayerActionType.SET_PLAYING:
      return { ...state, playing: action.playing };
    case AudioPlayerActionType.UPDATE_TIME:
      return { ...state, currentTime: action.time };
    case AudioPlayerActionType.SEEK_TO:
      return { ...state, currentTime: action.time };
    case AudioPlayerActionType.SET_VOLUME:
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
  onEnded,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--audio-player`;
  const audioPlayerClasses = classNames(baseClass, className);

  const [state, dispatch] = useReducer(reducer, initialState);

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlaying = () => {
    if (audioRef.current) {
      if (!state.playing) {
        void audioRef.current.play();
        dispatch({ type: AudioPlayerActionType.SET_PLAYING, playing: true });
      } else {
        audioRef.current.pause();
        dispatch({ type: AudioPlayerActionType.SET_PLAYING, playing: false });
      }
    }
  };

  // Handle audio playback controls embedded in the browser
  const handlePlay = () => {
    dispatch({ type: AudioPlayerActionType.SET_PLAYING, playing: true });
  };

  const handlePause = () => {
    dispatch({ type: AudioPlayerActionType.SET_PLAYING, playing: false });
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      dispatch({
        type: AudioPlayerActionType.INITIALIZE,
        totalTime: audioRef.current.duration,
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch({
        type: AudioPlayerActionType.UPDATE_TIME,
        time: audioRef.current.currentTime,
      });
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

  const handleVolumeClick = () => {
    if (audioRef.current) {
      if (state.volume === 0) {
        audioRef.current.volume = 1;
        dispatch({ type: AudioPlayerActionType.SET_VOLUME, volume: 1 });
      } else {
        audioRef.current.volume = 0;
        dispatch({ type: AudioPlayerActionType.SET_VOLUME, volume: 0 });
      }
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
    dispatch({ type: AudioPlayerActionType.SET_VOLUME, volume: newVolume });
  };

  // Make the component behave better in multi-track scenarios
  useEffect(() => {
    // Reset current time when src changes
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      dispatch({ type: AudioPlayerActionType.UPDATE_TIME, time: 0 });

      // Retain playing state if already playing
      if (state.playing) {
        void audioRef.current.play();
      }

      // The audio element automatically pauses when src changes
      // Sync that state to the reducer
      dispatch({
        type: AudioPlayerActionType.SET_PLAYING,
        playing: !audioRef.current.paused,
      });
    }
  }, [src]);

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
            <Icon
              className={`${baseClass}--play-icon`}
              name={state.playing ? "Pause" : "TriangleRight"}
              size={32}
            />
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
          <button
            className={`${baseClass}--volume-icon`}
            onClick={handleVolumeClick}
          >
            <Icon name={state.volume === 0 ? "SoundOff" : "SoundOn"} />
          </button>
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
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={onEnded}
      />
    </div>
  );
};
