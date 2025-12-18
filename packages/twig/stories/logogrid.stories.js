import Logogrid from "../src/components/logogrid/logogrid.twig";
import LogogridPatterns from "../src/components/logogrid/logogrid.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Logogrid, LogogridPatterns);

story.meta.parameters.githubLink = {
  url: "/logogrid/logogrid.twig",
};

const Meta = {
  title: "Components/Media/Logo Grid",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
