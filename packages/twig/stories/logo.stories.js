import Logo from "../src/components/logo/logo.twig";
import LogoPatterns from "../src/components/logo/logo.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Logo, LogoPatterns);

const Meta = {
  title: "Components/Media/Logo",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
