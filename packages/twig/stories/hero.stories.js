import Hero from "../src/components/hero/hero.twig";
import HeroPatterns from "../src/components/hero/hero.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Hero, HeroPatterns);

const Meta = {
  title: "Components/Content/Hero",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default, Homepage, Article] = story.stories;

export default Meta;
export { Default, Homepage, Article };
