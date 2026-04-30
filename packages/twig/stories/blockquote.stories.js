import Blockquote from "../src/components/blockquote/blockquote.twig";
import BlockquotePatterns from "../src/components/blockquote/blockquote.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Blockquote, BlockquotePatterns);

story.meta.parameters.githubLink = {
  url: "/blockquote/blockquote.twig",
};

const Meta = {
  title: "Components/Content/Blockquote",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
