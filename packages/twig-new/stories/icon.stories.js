import Icon from "../src/components/icon/icon.twig";
import IconPatterns from "../src/components/icon/icon.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Icon, IconPatterns);

const Meta = {
  title: "Components/User Interface/Icon",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;

export { Default };
