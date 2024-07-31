import Link from "../src/components/link/link.twig";
import LinkPatterns from "../src/components/link/link.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Link, LinkPatterns);

const Meta = {
  title: "Components/Navigation/Link",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
