import Card_factlist from "../src/components/card_factlist/card_factlist.twig";
import Card_factlistPatterns from "../src/components/card_factlist/card_factlist.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Card_factlist, Card_factlistPatterns);

const Meta = {
  title: "Components/Cards/Fact List Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
