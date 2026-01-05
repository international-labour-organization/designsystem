import Profile from "../src/components/profile/profile.twig";
import ProfilePatterns from "../src/components/profile/profile.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Profile, ProfilePatterns);

story.meta.parameters.githubLink = {
  url: "/profile/profile.twig",
};

const Meta = {
  title: "Components/Content/Profile",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
