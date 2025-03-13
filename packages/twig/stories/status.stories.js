import Status from "../src/components/status/status.twig";
import StatusPatterns from "../src/components/status/status.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Status, StatusPatterns);

const Meta = {
  title: "Components/User Interface/Status",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
