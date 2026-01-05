import Tableofcontents from "../src/components/tableofcontents/tableofcontents.twig";
import TableofcontentsPatterns from "../src/components/tableofcontents/tableofcontents.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Tableofcontents, TableofcontentsPatterns);

story.meta.parameters.githubLink = {
  url: "/tableofcontents/tableofcontents.twig",
};

const Meta = {
  title: "Components/Navigation/Table Of Contents",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
