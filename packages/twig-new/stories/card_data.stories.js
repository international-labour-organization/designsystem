import CardData from "../src/components/card_data/card_data.twig";
import CardDataPatterns from "../src/components/card_data/card_data.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(CardData, CardDataPatterns);

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
export { Default, Two_Columns, Two_Columns_No_Image, Two_Columns_No_Links };

No_Image.storyName = "No Image";
Two_Columns.storyName = "Two Columns";
Two_Columns_No_Image.storyName = "Two Columns No Image";
Two_Columns_No_Links.storyName = "Two Columns No Links";
