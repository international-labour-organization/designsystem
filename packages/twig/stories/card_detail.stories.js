import CardDetail from "../src/components/card_detail/card_detail.twig";
import CardDetailPatterns from "../src/components/card_detail/card_detail.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardDetail, CardDetailPatterns);

const Meta = {
  title: "Components/Cards/Detail Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
