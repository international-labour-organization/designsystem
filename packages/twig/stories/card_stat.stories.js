import CardStat from "../src/components/card_stat/card_stat.twig";
import CardStatPatterns from "../src/components/card_stat/card_stat.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardStat, CardStatPatterns);

const Meta = {
  title: "Components/Cards/Stat Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
