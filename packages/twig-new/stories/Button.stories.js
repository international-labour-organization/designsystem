import Button from "../components/button/button.twig";
import ButtonPatterns from "../components/button/button.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Button, ButtonPatterns);

const Meta = {
  title: "Components/User Interfaces/Button",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;

export { Default };
