import Table from "../src/components/table/table.twig";
import TablePatterns from "../src/components/table/table.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Table, TablePatterns);

const Meta = {
  title: "Components/Content/Table",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
