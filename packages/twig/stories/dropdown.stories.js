import Dropdown from "../src/components/dropdown/dropdown.twig";
import DropdownPatterns from "../src/components/dropdown/dropdown.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Dropdown, DropdownPatterns);

story.meta.parameters.githubLink = {
  url: "/dropdown/dropdown.twig",
};

const Meta = {
  title: "Components/Forms/Dropdown",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
