import Tags from "../src/components/tags/tags.twig";
import TagsPatterns from "../src/components/tags/tags.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Tags, TagsPatterns);

const Meta = {
  title: "Components/User Interface/Tags",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
