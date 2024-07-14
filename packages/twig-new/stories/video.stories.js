import Video from "../src/components/video/video.twig";
import VideoPatterns from "../src/components/video/video.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Video, VideoPatterns);

const Meta = {
  title: "Components/Media/Video",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
