import CardFactList from "../src/components/card_factlist/card_factlist.twig";
import CardFactListPatterns from "../src/components/card_factlist/card_factlist.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardFactList, CardFactListPatterns);

story.meta.parameters.githubLink = {
  url: "/card_factlist/card_factlist.twig",
};

const Meta = {
  title: "Components/Cards/Fact List Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
