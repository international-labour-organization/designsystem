import Callout from "../src/components/callout/callout.twig";
import CalloutPatterns from "../src/components/callout/callout.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Callout, CalloutPatterns);

story.meta.parameters.githubLink = {
  url: "/callout/callout.twig",
};

const Meta = {
  title: "Components/Feedback/Callout",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
