import Tooltip from "../src/components/tooltip/tooltip.twig";
import TooltipPatterns from "../src/components/tooltip/tooltip.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Tooltip, TooltipPatterns);

story.meta.parameters.githubLink = {
  url: "/tooltip/tooltip.twig",
};

const Meta = {
  title: "Components/Feedback/Tooltip",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
