import LanguageToggle from "../src/components/languagetoggle/languagetoggle.twig";
import LanguageTogglePatterns from "../src/components/languagetoggle/languagetoggle.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(LanguageToggle, LanguageTogglePatterns);

story.meta.parameters.githubLink = {
  url: "/languagetoggle/languagetoggle.twig",
};

const Meta = {
  title: "Components/Navigation/LanguageToggle",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
