import Tooltip from "../src/components/tooltip/tooltip.twig";
import TooltipPatterns from "../src/components/tooltip/tooltip.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Tooltip, TooltipPatterns);

const Meta = {
  title: "Components/Feedback/Tooltip",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
