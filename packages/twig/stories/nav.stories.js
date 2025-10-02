import Navigation from "../src/components/nav/nav.twig";
import NavigationPatterns from "../src/components/nav/nav.component.yml";
import { Maestro } from "@ilo-org/maestro";
console.log(NavigationPatterns);

const story = Maestro.create(Navigation, NavigationPatterns);

const Meta = {
  title: "Components/Navigation/SubsiteNav",
  tags: ["autodocs"],
  ...story.meta,
};

console.log(story.stories);
const [Default, Compact, Complex, Main] = story.stories;

export default Meta;
export { Default, Compact, Complex, Main };
