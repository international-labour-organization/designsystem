import Toggle from "../src/components/toggle/toggle.twig";
import TogglePatterns from "../src/components/toggle/toggle.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Toggle, TogglePatterns);

story.meta.parameters.githubLink = {
  url: "/toggle/toggle.twig",
};

const Meta = {
  title: "Components/Forms/Toggle",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
