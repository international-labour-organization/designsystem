import Card_detail from "../src/components/card_detail/card_detail.twig";
import Card_detailPatterns from "../src/components/card_detail/card_detail.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Card_detail, Card_detailPatterns);

const Meta = {
  title: "Components/Cards/Detail Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
