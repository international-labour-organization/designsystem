import Accordion from "../src/components/accordion/accordion.twig";
import AccordionPatterns from "../src/components/accordion/accordion.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Accordion, AccordionPatterns);

story.meta.parameters.githubLink = {
  url: "/accordion/accordion.twig",
};

const Meta = {
  title: "Components/Content/Accordion",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default, Scrollable, Focus] = story.stories;

export default Meta;

export { Default, Scrollable, Focus };
