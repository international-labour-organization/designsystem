import Socialmedia from "../src/components/socialmedia/socialmedia.twig";
import SocialmediaPatterns from "../src/components/socialmedia/socialmedia.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Socialmedia, SocialmediaPatterns);

const Meta = {
  title: "Components/Navigation/Social Media",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
