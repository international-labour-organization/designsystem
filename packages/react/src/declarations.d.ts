import videojs from "video.js";

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "video.js" {
  interface VideoJsPlayerOptionsAugmentation extends videojs.PlayerOptions {
    liveTracker: boolean;
    textTrackSettings: boolean;
    errorDisplay: boolean;
    resizeManager: boolean;
    dataSetup: {
      techOrder: string[];
    };
  }

  type ILOVideo = (
    id: string | HTMLVideoElement,
    options: VideoJsPlayerOptionsAugmentation,
    ready?: () => void
  ) => videojs.Player;
}

declare module "videojs-youtube" {}
