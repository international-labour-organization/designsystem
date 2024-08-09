import Footer from "../src/components/footer/footer.twig";
import FooterPatterns from "../src/components/footer/footer.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Footer, FooterPatterns);

const Meta = {
  title: "Components/Navigation/Footer",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories;

export default Meta;
export { Default };
