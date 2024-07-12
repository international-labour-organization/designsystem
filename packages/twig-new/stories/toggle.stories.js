import Toggle from "../src/components/toggle/toggle.twig";
import TogglePatterns from "../src/components/toggle/toggle.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Toggle, TogglePatterns);

const Meta = {
  title: "Components/Forms/Toggle",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
