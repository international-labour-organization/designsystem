import Richtext from "../src/components/richtext/richtext.twig";
import RichtextPatterns from "../src/components/richtext/richtext.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Richtext, RichtextPatterns);

const Meta = {
  title: "Components/Content/Rich Text",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
