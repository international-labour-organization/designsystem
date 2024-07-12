import Tableofcontents from "../src/components/tableofcontents/tableofcontents.twig";
import TableofcontentsPatterns from "../src/components/tableofcontents/tableofcontents.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Tableofcontents, TableofcontentsPatterns);

const Meta = {
  title: "Components/Navigation/Table Of Contents",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
