import { VideoProps } from "./Video.props";

const videofile: VideoProps = {
  alt: "The ILO logo on a blue background",
  className: "image",
  caption:
    "The ILO brings together governments, employers and workers to set labour standards and promote decent work.",
  poster: {
    url: [{ src: "/media-file-poster.jpg" }],
    alt: "",
  },
  video: {
    controls: {
      fullscreen: "Fullscreen",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
    },
    src: "/video-example.mp4",
    youtube: false,
  },
};

const videoyt: VideoProps = {
  alt: "An smiling woman with gray hair holds a bowl full of corn in front of her home.",
  caption:
    "Indigenous entrepreneur Celestina Ábalos runs a tourism business in the UNESCO World Heritage site of Quebrada de Humahuaca in northern Argentina. ©ILO/Ivar Velasquez",
  className: "image",
  poster: {
    url: [{ src: "/youtube-video-poster.avif" }],
    alt: "",
  },
  video: {
    controls: {
      fullscreen: "Fullscreen",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
    },
    src: "https://youtu.be/X72_A4_6zjU",
    youtube: true,
  },
};

/**
 * Sample prop definitions for Video's enumerable properties (imported in stories and tests).
 */
const videoArgs = {
  videofile,
  videoyt,
};

export default videoArgs;
