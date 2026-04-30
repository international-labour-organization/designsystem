import Form from "../src/components/form/form.twig";
import FormPatterns from "../src/components/form/form.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Form, FormPatterns);

story.meta.parameters.githubLink = {
  url: "/form/form.twig",
};

const Meta = {
  title: "Components/Forms/Form",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
