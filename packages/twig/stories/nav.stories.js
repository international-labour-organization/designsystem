import Navigation from "../src/components/nav/nav_complex.twig";
import NavigationPatterns from "../src/components/nav/nav.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Navigation, NavigationPatterns);

const Meta = {
  title: "Components/Navigation/NavComplex",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
