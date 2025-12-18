import Icon from "../src/components/icon/icon.twig";
import IconPatterns from "../src/components/icon/icon.component.yml";
import { Maestro } from "@ilo-org/maestro";
import * as Icons from "@ilo-org/icons";

const story = Maestro.create(Icon, IconPatterns);

story.meta.parameters.githubLink = {
  url: "/icon/icon.twig",
};

const iconNames = new Set();

for (const icon in Icons) {
  iconNames.add(Icons[icon].name);
}

const nameArgType = {
  control: {
    type: "select",
  },
  options: Array.from(iconNames),
};

const argTypes = { ...story.meta.argTypes, name: nameArgType };

const storyMeta = { ...story.meta, argTypes };

const Meta = {
  title: "Components/User Interface/Icon",
  tags: ["autodocs"],
  ...storyMeta,
};

const [Default] = story.stories;

export default Meta;

export { Default };
