import Textarea from "../src/components/textarea/textarea.twig";
import TextareaPatterns from "../src/components/textarea/textarea.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Textarea, TextareaPatterns);

story.meta.parameters.githubLink = {
  url: "/textarea/textarea.twig",
};

const Meta = {
  title: "Components/Forms/Text Area",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
