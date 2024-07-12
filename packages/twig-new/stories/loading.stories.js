import Loading from "../src/components/loading/loading.twig";
import LoadingPatterns from "../src/components/loading/loading.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Loading, LoadingPatterns);

const Meta = {
  title: "Components/Transitions/Loading",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
