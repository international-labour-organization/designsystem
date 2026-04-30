import Navigation from "../src/components/navigation/navigation.twig";
import NavigationPatterns from "../src/components/navigation/navigation.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Navigation, NavigationPatterns);

story.meta.parameters.githubLink = {
  url: "/navigation/navigation.twig",
};

const Meta = {
  title: "Components/Navigation/Navigation",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
