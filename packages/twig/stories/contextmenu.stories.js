import ContextMenu from "../src/components/contextmenu/contextmenu.twig";
import ContextMenuPatterns from "../src/components/contextmenu/contextmenu.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(ContextMenu, ContextMenuPatterns);

story.meta.parameters.githubLink = {
  url: "/contextmenu/contextmenu.twig",
};

const Meta = {
  title: "Components/Navigation/Context Menu",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
