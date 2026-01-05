import Textinput from "../src/components/textinput/textinput.twig";
import TextinputPatterns from "../src/components/textinput/textinput.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Textinput, TextinputPatterns);

story.meta.parameters.githubLink = {
  url: "/textinput/textinput.twig",
};

const Meta = {
  title: "Components/Forms/Text Input",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
