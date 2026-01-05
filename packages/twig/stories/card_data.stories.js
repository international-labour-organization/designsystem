import CardData from "../src/components/card_data/card_data.twig";
import CardDataPatterns from "../src/components/card_data/card_data.component.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardData, CardDataPatterns);

story.meta.parameters.githubLink = {
  url: "/card_data/card_data.twig",
};

const Meta = {
  title: "Components/Cards/Data Card",
  tags: ["autodocs"],
  ...story.meta,
};

const [
  Default,
  No_Image,
  Two_Columns,
  Two_Columns_No_Image,
  Two_Columns_No_Links,
] = story.stories;

export default Meta;
export {
  Default,
  No_Image,
  Two_Columns,
  Two_Columns_No_Image,
  Two_Columns_No_Links,
};
