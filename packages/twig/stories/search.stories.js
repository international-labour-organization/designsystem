import Search from "../src/components/search/search.twig";
import SearchPatterns from "../src/components/search/search.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Search, SearchPatterns);

story.meta.parameters.githubLink = {
  url: "/search/search.twig",
};

const Meta = {
  title: "Components/Forms/Search",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
