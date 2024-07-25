import Breadcrumb from "../src/components/breadcrumb/breadcrumb.twig";
import BreadcrumbPatterns from "../src/components/breadcrumb/breadcrumb.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Breadcrumb, BreadcrumbPatterns);

const Meta = {
  title: "Components/Navigation/Breadcrumb",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
