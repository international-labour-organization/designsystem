import CardEvent from "../src/components/card_score/card_score.twig";
import CardEventPatterns from "../src/components/card_score/card_score.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardEvent, CardEventPatterns);

story.meta.parameters.githubLink = {
  url: "/card_score/card_score.twig",
};

const Meta = {
  title: "Components/Cards/Score Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
