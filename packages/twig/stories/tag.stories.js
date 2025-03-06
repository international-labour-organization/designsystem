import Tag from "../src/components/tag/tag.twig";
import TagPatterns from "../src/components/tag/tag.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Tag, TagPatterns);

const Meta = {
  title: "Components/User Interface/Tag",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
