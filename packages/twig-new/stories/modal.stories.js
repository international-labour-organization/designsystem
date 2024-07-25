import Modal from "../src/components/modal/modal.twig";
import ModalPatterns from "../src/components/modal/modal.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Modal, ModalPatterns);

const Meta = {
  title: "Components/Feedback/Modal",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
