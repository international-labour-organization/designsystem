import CardMultiLink from "../src/components/card_multilink/card_multilink.twig";
import CardMultiLinkPatterns from "../src/components/card_multilink/card_multilink.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardMultiLink, CardMultiLinkPatterns);

const Meta = {
  title: "Components/Cards/Multi Link Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
