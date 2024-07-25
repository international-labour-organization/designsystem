import Localnav from "../src/components/localnav/localnav.twig";
import LocalnavPatterns from "../src/components/localnav/localnav.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Localnav, LocalnavPatterns);

const Meta = {
  title: "Components/Navigation/Local nav",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
