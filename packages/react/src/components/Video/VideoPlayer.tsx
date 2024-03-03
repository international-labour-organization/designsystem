import { FC, useEffect, useRef } from "react";
import "videojs-youtube";
import { VideoPlayerProps } from "./VideoPlayer.props";
import videojs, { ILOVideo } from "video.js";

const video = videojs as unknown as ILOVideo;

const VideoPlayer: FC<VideoPlayerProps> = ({ src, poster, youtube }) => {
  const videoNode = useRef<HTMLVideoElement>(null);
  const player = useRef<videojs.Player>();

  useEffect(() => {
    if (videoNode.current) {
      player.current = video(videoNode.current, {
        autoplay: false,
        controls: true,
        preload: "auto",
        bigPlayButton: false,
        poster: poster?.src,
        controlBar: {
          descriptionsButton: false,
          playbackRateMenuButton: false,
          chaptersButton: false,
          audioTrackButton: false,
          pictureInPictureToggle: false,
          subsCapsButton: false,
          seekToLive: false,
          liveDisplay: false,
        },
        errorDisplay: false,
        textTrackSettings: false,
        resizeManager: false,
        /**
         * If youtube is true, it will default to the youtube video
         */
        sources: [
          { type: youtube ? "video/youtube" : undefined, src: src as string },
        ],
        dataSetup: {
          techOrder: ["youtube"],
        },
        liveTracker: false,
      });
    }
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [poster?.src, src, youtube]);

  return (
    <div className="ilo--videoplayer">
      <video ref={videoNode} className="ilo--video--element" />
    </div>
  );
};

export default VideoPlayer;
