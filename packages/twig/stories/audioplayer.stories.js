import AudioPlayer from "../src/components/audioplayer/audioplayer.twig";
import AudioPlayerPatterns from "../src/components/audioplayer/audioplayer.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(AudioPlayer, AudioPlayerPatterns);

story.meta.parameters.githubLink = {
  url: "/audioplayer/audioplayer.twig",
};

const Meta = {
  title: "Components/Media/Audio Player",
  tags: ["autodocs"],

  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
