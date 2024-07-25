import Button from "../src/components/button/button.twig";
import ButtonPatterns from "../src/components/button/button.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Button, ButtonPatterns);

const Meta = {
  title: "Components/User Interface/Button",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;

export { Default };
