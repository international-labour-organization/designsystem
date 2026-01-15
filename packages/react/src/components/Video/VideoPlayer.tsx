import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import "videojs-youtube";
import { VideoPlayerProps, VideoPlayerRef } from "./VideoPlayer.props";
import videojs, { ILOVideo } from "video.js";

const video = videojs as unknown as ILOVideo;

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ src, poster, youtube }, ref) => {
    const placeholderRef = useRef<HTMLDivElement>(null);
    const player = useRef<videojs.Player | undefined>(undefined);

    useImperativeHandle(
      ref,
      () => ({
        get player() {
          return player.current;
        },
      }),
      [player]
    );

    useEffect(() => {
      if (!placeholderRef.current) {
        return;
      }

      if (!player.current) {
        const videoElement = document.createElement("video");
        videoElement.className = "ilo--video--element";
        placeholderRef.current.appendChild(videoElement);

        player.current = video(videoElement, {
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
          sources: [{ type: youtube ? "video/youtube" : undefined, src: src }],
          dataSetup: {
            techOrder: ["youtube"],
          },
          liveTracker: false,
        });
      } else {
        player.current.poster(poster?.src || "");
        player.current.src([
          { type: youtube ? "video/youtube" : undefined, src: src },
        ]);
      }
    }, [poster?.src, src, youtube]);

    useEffect(() => {
      return () => {
        if (player.current) {
          player.current.dispose();
          player.current = undefined;
        }
        if (placeholderRef.current) {
          placeholderRef.current.innerHTML = "";
        }
      };
    }, []);

    return (
      <div className="ilo--videoplayer">
        <div ref={placeholderRef} />
      </div>
    );
  }
);

export default VideoPlayer;
