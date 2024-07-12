import Readmore from "../src/components/readmore/readmore.twig";
import ReadmorePatterns from "../src/components/readmore/readmore.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Readmore, ReadmorePatterns);

const Meta = {
  title: "Components/User Interface/Read More",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
