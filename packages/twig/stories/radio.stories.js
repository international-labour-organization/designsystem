import Radio from "../src/components/radio/radio.twig";
import RadioPatterns from "../src/components/radio/radio.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Radio, RadioPatterns);

story.meta.parameters.githubLink = {
  url: "/radio/radio.twig",
};

const Meta = {
  title: "Components/Forms/Radio",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
