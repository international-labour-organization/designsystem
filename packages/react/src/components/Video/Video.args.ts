import { VideoProps } from "./Video.props";

const videofile: VideoProps = {
  alt: "My alt text",
  className: "image",
  caption: "my video caption",
  url: [
    {
      breakpoint: 0,
      src: "https://place-hold.it/400x225?text=SmallBreakpointImage",
    },
    {
      breakpoint: 800,
      src: "https://place-hold.it/800x450?text=MediumBreakpointImage",
    },
    {
      breakpoint: 1200,
      src: "https://place-hold.it/1200x675?text=LargeBreakpointImage",
    },
    {
      breakpoint: 1440,
      src: "https://place-hold.it/1600x900?text=LargestBreakpointImage",
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
      src: "https://place-hold.it/400x225?text=SmallBreakpointImage",
    },
    {
      breakpoint: 800,
      src: "https://place-hold.it/800x450?text=MediumBreakpointImage",
    },
    {
      breakpoint: 1200,
      src: "https://place-hold.it/1200x675?text=LargeBreakpointImage",
    },
    {
      breakpoint: 1440,
      src: "https://place-hold.it/1600x900?text=LargestBreakpointImage",
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
