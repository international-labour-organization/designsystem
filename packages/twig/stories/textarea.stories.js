import Textarea from "../src/components/textarea/textarea.twig";
import TextareaPatterns from "../src/components/textarea/textarea.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Textarea, TextareaPatterns);

const Meta = {
  title: "Components/Forms/Text Area",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
