import Card from "../src/components/card/card.twig";
import CardPatterns from "../src/components/card/card.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Card, CardPatterns);

const Meta = {
  title: "Components/Cards/Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Basic, Feature, Text, Detail, Promo, MultiLink, Data, Stat] =
  story.stories;

export default Meta;
export { Basic, Feature, Text, Detail, Promo, MultiLink, Data, Stat };
