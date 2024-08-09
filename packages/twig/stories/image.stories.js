import Image from "../src/components/image/image.twig";
import ImagePatterns from "../src/components/image/image.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Image, ImagePatterns);

const Meta = {
  title: "Components/Media/Image",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
