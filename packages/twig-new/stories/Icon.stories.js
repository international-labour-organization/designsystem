import Icon from "../components/icon/icon.twig";
import IconPatterns from "../components/icon/icon.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Icon, IconPatterns);

const Meta = {
  title: "Components/User Interfaces/Icon",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;

export { Default };
