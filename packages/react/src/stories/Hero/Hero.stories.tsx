import { StoryFn, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from "@storybook/blocks";
import { Hero } from "../../components/Hero";
import { HeroProps } from "../../components/Hero/Hero.props";
import heroArgs from "../../components/Hero/Hero.args";

const HeroMeta: Meta<typeof Hero> = {
  title: "Components/Content/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
    types: {
      options: [
        "publication",
        "graphic",
        "article",
        "portal",
        "project",
        "home",
      ],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Hero component displays an hero, along with an hero credit and
            optional caption.
          </Description>
          <Primary />
          <Stories title="Examples" />
          <Subheading>Default Props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default HeroMeta;

const HeroTemplate: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const HomeHero: StoryFn<HeroProps> = HeroTemplate.bind({});
HomeHero.args = heroArgs.homeHero;
HomeHero.storyName = "Homepage";

export const ArticleHero: StoryFn<HeroProps> = HeroTemplate.bind({});
ArticleHero.args = heroArgs.articleHero;
ArticleHero.storyName = "Article";

export const ArticleCenteredHero: StoryFn<HeroProps> = HeroTemplate.bind({});
ArticleCenteredHero.args = heroArgs.articleCenteredHero;
ArticleCenteredHero.storyName = "Centered";

export const ArticleNoImageHero: StoryFn<HeroProps> = HeroTemplate.bind({});
ArticleNoImageHero.args = heroArgs.articleNoImageHero;
ArticleNoImageHero.storyName = "No Image";

export const GraphicHero: StoryFn<HeroProps> = HeroTemplate.bind({});
GraphicHero.args = heroArgs.graphicHero;
GraphicHero.storyName = "Graphic";

export const PortalHero: StoryFn<HeroProps> = HeroTemplate.bind({});
PortalHero.args = heroArgs.portalHero;
PortalHero.storyName = "Portal";

export const ProjectHero: StoryFn<HeroProps> = HeroTemplate.bind({});
ProjectHero.args = heroArgs.projectHero;
ProjectHero.storyName = "Project";

export const PublicationHero: StoryFn<HeroProps> = HeroTemplate.bind({});
PublicationHero.args = heroArgs.publicationHero;
PublicationHero.storyName = "Publication";
