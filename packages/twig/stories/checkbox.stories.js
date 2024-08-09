import Checkbox from "../src/components/checkbox/checkbox.twig";
import CheckboxPatterns from "../src/components/checkbox/checkbox.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Checkbox, CheckboxPatterns);

const Meta = {
  title: "Components/Forms/Checkbox",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
