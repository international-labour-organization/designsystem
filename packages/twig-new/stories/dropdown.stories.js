import Dropdown from "../src/components/dropdown/dropdown.twig";
import DropdownPatterns from "../src/components/dropdown/dropdown.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Dropdown, DropdownPatterns);

const Meta = {
  title: "Components/Forms/Dropdown",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
