import CardFeature from "../src/components/card_feature/card_feature.twig";
import CardFeaturePatterns from "../src/components/card_feature/card_feature.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardFeature, CardFeaturePatterns);

const Meta = {
  title: "Components/Cards/Feature Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
