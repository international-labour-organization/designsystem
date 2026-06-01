import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import "videojs-youtube";
import {
  VideoPlayerProps,
  VideoPlayerRef,
  VideoTextTrack,
  defaultVideoControls,
} from "./VideoPlayer.props";
import videojs, { ILOVideo } from "video.js";

const video = videojs as unknown as ILOVideo;

const appendTextTracks = (
  videoElement: HTMLVideoElement,
  tracks: VideoTextTrack[]
) => {
  tracks.forEach((track) => {
    const { kind, src, srclang, label, default: isDefault } = track;
    const trackElement = document.createElement("track");
    trackElement.kind = kind ?? "captions";
    trackElement.src = src;
    trackElement.srclang = srclang;
    trackElement.label = label;
    trackElement.default = !!isDefault;
    videoElement.appendChild(trackElement);
  });
};

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ src, poster, youtube, tracks, controls }, ref) => {
    const placeholderRef = useRef<HTMLDivElement>(null);
    const player = useRef<videojs.Player | undefined>(undefined);
    const mergedControls = { ...defaultVideoControls, ...controls };

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
        if (tracks?.length) appendTextTracks(videoElement, tracks);
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
            subsCapsButton: !!tracks?.length,
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
      const container = placeholderRef.current;
      if (!container || !player.current) {
        return;
      }

      const subsCapsButton = container.querySelector(".vjs-subs-caps-button");
      const menuButton = subsCapsButton?.querySelector(
        ".vjs-menu-button, button"
      );
      const menuPanel = subsCapsButton?.querySelector(".vjs-menu");

      if (!subsCapsButton || !menuButton || !menuPanel) {
        return;
      }

      const openClassName = "ilo-cc-open";
      const closeButtonClassName = "ilo-cc-menu-close-button";
      const hiddenClassName = "vjs-hidden";
      const setMenuVisibility = (isOpen: boolean) => {
        subsCapsButton.classList.toggle(openClassName, isOpen);
        menuPanel.classList.toggle(hiddenClassName, !isOpen);
      };

      const closeMenu = () => {
        setMenuVisibility(false);
      };

      const handleToggle = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        const shouldOpen = menuPanel.classList.contains(hiddenClassName);
        setMenuVisibility(shouldOpen);
      };

      const handleOutsideTouch = (event: Event) => {
        const eventTarget = event.target as Node | null;
        if (!eventTarget || subsCapsButton.contains(eventTarget)) {
          return;
        }
        closeMenu();
      };

      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      };

      const existingCloseButton = menuPanel.querySelector<HTMLElement>(
        `.${closeButtonClassName}`
      );
      const closeButton = (existingCloseButton ??
        document.createElement("button")) as HTMLButtonElement;
      if (!existingCloseButton) {
        closeButton.className = closeButtonClassName;
        closeButton.type = "button";
        menuPanel.appendChild(closeButton);
      }

      const handleCloseButtonInteraction = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        closeMenu();
      };
      const handleTrackChange = () => closeMenu();

      menuButton.addEventListener("pointerup", handleToggle);
      closeButton.addEventListener("pointerup", handleCloseButtonInteraction);
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("pointerup", handleOutsideTouch);
      player.current.on("texttrackchange", handleTrackChange);

      return () => {
        menuButton.removeEventListener("pointerup", handleToggle);
        closeButton.removeEventListener(
          "pointerup",
          handleCloseButtonInteraction
        );
        document.removeEventListener("keydown", handleEscapeKey);
        document.removeEventListener("pointerup", handleOutsideTouch);
        player.current?.off("texttrackchange", handleTrackChange);
      };
    }, []);

    useEffect(() => {
      return () => {
        const trackElements = placeholderRef.current?.querySelectorAll("track");
        if (trackElements?.length) {
          trackElements.forEach((trackElement) => trackElement.remove());
        }

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
      <div
        className="ilo--videoplayer"
        style={
          {
            "--ilo-video-choose-subtitles": JSON.stringify(
              mergedControls.chooseSubtitles
            ),
            "--ilo-video-none": JSON.stringify(mergedControls.none),
          } as React.CSSProperties
        }
      >
        <div ref={placeholderRef} />
      </div>
    );
  }
);

export default VideoPlayer;
