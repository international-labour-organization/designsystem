import Datepicker from "../src/components/datepicker/datepicker.twig";
import DatepickerPatterns from "../src/components/datepicker/datepicker.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Datepicker, DatepickerPatterns);

const Meta = {
  title: "Components/Forms/Date Picker",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
