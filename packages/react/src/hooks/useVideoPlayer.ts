import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement: any) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showvolume, showVolume] = useState(false);

  /**
   * Fullscreen functionality
   */
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  useEffect(() => {
    if (fullscreen) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }, [fullscreen, videoElement]);

  /**
   * Play/pause functionality
   */
  const togglePlay = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? videoElement.current.play() : videoElement.current.pause();
  }, [playing, videoElement]);

  /**
   * Progress indicator
   */
  const handleOnTimeUpdate = () => {
    setProgress(
      (videoElement.current.currentTime / videoElement.current.duration) * 100
    );
  };

  /**
   * Scrub functionality
   */
  const handleVideoScrub = (event: any) => {
    const scrubValue = Number(
      (event.offsetX * event.target.max) / event.target.offsetWidth
    );
    videoElement.current.currentTime =
      videoElement.current.duration * scrubValue;
    setProgress(scrubValue);
  };

  /**
   * Show volume slider
   */
  const toggleVolumeSlider = () => {
    showVolume(!showvolume);
  };

  /**
   * Volume change
   */
  const handleVolumeChange = (event: any) => {
    videoElement.volume = event.target.value;
  };

  return {
    handleOnTimeUpdate,
    handleVideoScrub,
    handleVolumeChange,
    playing,
    progress,
    showvolume,
    toggleFullscreen,
    togglePlay,
    toggleVolumeSlider,
  };
};

export default useVideoPlayer;
