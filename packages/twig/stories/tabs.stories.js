import Tabs from "../src/components/tabs/tabs.twig";
import TabsPatterns from "../src/components/tabs/tabs.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Tabs, TabsPatterns);

story.meta.parameters.githubLink = {
  url: "/tabs/tabs.twig",
};

const Meta = {
  title: "Components/User Interface/Tabs",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
