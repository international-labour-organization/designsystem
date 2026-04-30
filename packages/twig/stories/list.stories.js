import List from "../src/components/list/list.twig";
import ListPatterns from "../src/components/list/list.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(List, ListPatterns);

story.meta.parameters.githubLink = {
  url: "/list/list.twig",
};

const Meta = {
  title: "Components/Content/List",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
