import Video from "../src/components/video/video.twig";
import VideoPatterns from "../src/components/video/video.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Video, VideoPatterns);

story.meta.parameters.githubLink = {
  url: "/video/video.twig",
};

const Meta = {
  title: "Components/Media/Video",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
