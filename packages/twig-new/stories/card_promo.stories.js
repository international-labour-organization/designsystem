import CardPromo from "../src/components/card_promo/card_promo.twig";
import CardPromoPatterns from "../src/components/card_promo/card_promo.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardPromo, CardPromoPatterns);

const Meta = {
  title: "Components/Cards/Promo Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
