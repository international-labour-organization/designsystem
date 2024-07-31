import Numberpicker from "../src/components/numberpicker/numberpicker.twig";
import NumberpickerPatterns from "../src/components/numberpicker/numberpicker.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Numberpicker, NumberpickerPatterns);

const Meta = {
  title: "Components/Forms/Number Picker",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
