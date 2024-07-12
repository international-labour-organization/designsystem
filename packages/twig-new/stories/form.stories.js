import Form from "../src/components/form/form.twig";
import FormPatterns from "../src/components/form/form.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Form, FormPatterns);

const Meta = {
  title: "Components/Forms/Form",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
