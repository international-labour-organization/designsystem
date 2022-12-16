import { VideoProps } from "./Video.props";

const videofile: VideoProps = {
  alt: "My alt text",
  className: "image",
  caption: "my video caption",
  poster: "https://placekitten.com/g/1600/1200",
  video: {
    controls: {
      fullscreen: "Fullscreen",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
    },
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    youtube: false,
  },
};

const videoyt: VideoProps = {
  alt: "My alt text",
  caption: "my video caption",
  className: "image",
  poster: "https://placekitten.com/g/1600/1200",
  video: {
    controls: {
      fullscreen: "Fullscreen",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
    },
    src: "https://youtu.be/ombTwldE3Kw",
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
