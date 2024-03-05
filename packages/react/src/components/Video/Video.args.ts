import { VideoProps } from "./Video.props";

const videofile: VideoProps = {
  className: "image",
  caption:
    "The ILO brings together governments, employers and workers to set labour standards and promote decent work.",
  poster: {
    src: "/media-file-poster.jpg",
    alt: "The ILO logo on a blue background",
  },
  controls: {
    fullscreen: "Fullscreen",
    play: "Play",
    pause: "Pause",
    volume: "Volume",
  },
  src: "/video-example.mp4",
  youtube: false,
};

const videoyt: VideoProps = {
  caption:
    "Indigenous entrepreneur Celestina Ábalos runs a tourism business in the UNESCO World Heritage site of Quebrada de Humahuaca in northern Argentina. ©ILO/Ivar Velasquez",
  className: "image",
  poster: {
    src: "/youtube-video-poster.avif",
    alt: "An smiling woman with gray hair holds a bowl full of corn in front of her home.",
  },
  controls: {
    fullscreen: "Fullscreen",
    play: "Play",
    pause: "Pause",
    volume: "Volume",
  },
  src: "https://youtu.be/X72_A4_6zjU",
  youtube: true,
};

/**
 * Sample prop definitions for Video's enumerable properties (imported in stories and tests).
 */
const videoArgs = {
  videofile,
  videoyt,
};

export default videoArgs;
