import CardGroup from "../src/components/cardgroup/cardgroup.twig";
import CardGroupPatterns from "../src/components/cardgroup/cardgroup.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardGroup, CardGroupPatterns);

story.meta.parameters.githubLink = {
  url: "/cardgroup/cardgroup.twig",
};

const Meta = {
  title: "Components/Cards/Card Group",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
