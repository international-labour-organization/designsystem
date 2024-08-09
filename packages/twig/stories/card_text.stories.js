import CardText from "../src/components/card_text/card_text.twig";
import CardTextPatterns from "../src/components/card_text/card_text.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardText, CardTextPatterns);

const Meta = {
  title: "Components/Cards/Text Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
