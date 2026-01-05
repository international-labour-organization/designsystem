import Herocard from "../src/components/herocard/herocard.twig";
import HerocardPatterns from "../src/components/herocard/herocard.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Herocard, HerocardPatterns);

story.meta.parameters.githubLink = {
  url: "/herocard/herocard.twig",
};

const Meta = {
  title: "Components/Content/Hero Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
