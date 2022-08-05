import { VideoProps } from "./Video.props";

const videofile: VideoProps = {
  alt: "My alt text",
  className: "image",
  caption: "my video caption",
  url: [
    {
      breakpoint: 0,
      src: "https://placekitten.com/300/400",
    },
    {
      breakpoint: 800,
      src: "https://placekitten.com/600/800",
    },
    {
      breakpoint: 1200,
      src: "https://placekitten.com/900/1200",
    },
    {
      breakpoint: 1440,
      src: "https://placekitten.com/1200/1200",
    },
  ],
  video: {
    controls: {
      fullscreen: "Fullscreen",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
    },
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    tracks: null,
    youtube: false,
  },
};

const videoyt: VideoProps = {
  alt: "My alt text",
  caption: "my video caption",
  className: "image",
  url: [
    {
      breakpoint: 0,
      src: "https://placekitten.com/400/300",
    },
    {
      breakpoint: 800,
      src: "https://placekitten.com/800/600",
    },
    {
      breakpoint: 1200,
      src: "https://placekitten.com/1200/900",
    },
    {
      breakpoint: 1440,
      src: "https://placekitten.com/1600/1200",
    },
  ],
  video: {
    controls: {
      fullscreen: "Fullscreen",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
    },
    src: "https://youtu.be/ombTwldE3Kw",
    tracks: null,
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
