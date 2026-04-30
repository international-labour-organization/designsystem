import LinkList from "../src/components/linklist/linklist.twig";
import LinkListPatterns from "../src/components/linklist/linklist.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(LinkList, LinkListPatterns);

story.meta.parameters.githubLink = {
  url: "/linklist/linklist.twig",
};

const Meta = {
  title: "Components/Navigation/Linklist",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
