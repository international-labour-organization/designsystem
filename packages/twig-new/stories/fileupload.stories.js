import Fileupload from "../src/components/fileupload/fileupload.twig";
import FileuploadPatterns from "../src/components/fileupload/fileupload.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Fileupload, FileuploadPatterns);

const Meta = {
  title: "Components/Forms/File Upload",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
