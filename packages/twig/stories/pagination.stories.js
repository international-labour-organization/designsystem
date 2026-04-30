import Pagination from "../src/components/pagination/pagination.twig";
import PaginationPatterns from "../src/components/pagination/pagination.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Pagination, PaginationPatterns);

story.meta.parameters.githubLink = {
  url: "/pagination/pagination.twig",
};

const Meta = {
  title: "Components/Navigation/Pagination",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
