import Accordion from "../components/accordion/accordion.twig";
import AccordionPatterns from "../components/accordion/accordion.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Accordion, AccordionPatterns);

const Meta = {
  title: "Components/Content/Accordion",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default, Scrollable, Focus] = story.stories;

export default Meta;

export { Default, Scrollable, Focus };
