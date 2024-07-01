import Link from "../components/link/link.twig";
import LinkPatterns from "../components/link/link.pattern.yml";
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
