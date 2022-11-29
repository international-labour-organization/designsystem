import { Story, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { Hero } from "../components/Hero";
import { HeroProps } from "../components/Hero/Hero.props";
import heroArgs from "../components/Hero/Hero.args";

/**
 * Hero Story
 *
 */
export default {
  title: "Components/Hero",
  component: Hero,
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
    componentSubtitle: "Component",
    docs: {
      page: () => (
        <>
          <Subtitle />
          <Title />
          <Description>
            The Hero component displays an hero, along with an hero credit and
            optional caption.
          </Description>
          <Primary />
          <ArgsTable />
          <Stories title="Examples"></Stories>
        </>
      ),
    },
  },
} as Meta<typeof Hero>;

/**
 * HeroTemplate
 *
 * create a Storybook template for this component
 *
 *@param (Object) args - props to be passed to the component
 */
const HeroTemplate: Story<HeroProps> = (args) => <Hero {...args} />;

/**
 * Home Hero Instance
 *
 */
export const HomeHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
HomeHero.args = heroArgs.homeHero;
HomeHero.storyName = "Home Hero";
HomeHero.parameters = {
  docs: {
    description: {
      story: "The Home Hero...",
    },
  },
};

/**
 * Article Hero Instance
 *
 */
export const ArticleHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
ArticleHero.args = heroArgs.articleHero;
ArticleHero.storyName = "Article Hero";
ArticleHero.parameters = {
  docs: {
    description: {
      story: "The Article Hero...",
    },
  },
};

/**
 * Article Centered Hero Instance
 *
 */
export const ArticleCenteredHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
ArticleCenteredHero.args = heroArgs.articleCenteredHero;
ArticleCenteredHero.storyName = "Article Centered Hero";
ArticleCenteredHero.parameters = {
  docs: {
    description: {
      story: "The Article Centered Hero...",
    },
  },
};

/**
 * Article No-Image Hero Instance
 *
 */
export const ArticleNoImageHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
ArticleNoImageHero.args = heroArgs.articleNoImageHero;
ArticleNoImageHero.storyName = "Article No Image Hero";
ArticleNoImageHero.parameters = {
  docs: {
    description: {
      story: "The Article No Image Hero...",
    },
  },
};

/**
 * Graphic Hero Instance
 *
 */
export const GraphicHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
GraphicHero.args = heroArgs.graphicHero;
GraphicHero.storyName = "Graphic Hero";
GraphicHero.parameters = {
  docs: {
    description: {
      story: "The Graphic Hero...",
    },
  },
};

/**
 * Portal Hero Instance
 *
 */
export const PortalHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
PortalHero.args = heroArgs.portalHero;
PortalHero.storyName = "Portal Hero";
PortalHero.parameters = {
  docs: {
    description: {
      story: "The Portal Hero...",
    },
  },
};

/**
 * Project Hero Instance
 *
 */
export const ProjectHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
ProjectHero.args = heroArgs.projectHero;
ProjectHero.storyName = "Project Hero";

/**
 * Publication Hero Instance
 *
 */
export const PublicationHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
PublicationHero.args = heroArgs.publicationHero;
PublicationHero.storyName = "Publication Hero";
PublicationHero.parameters = {
  docs: {
    description: {
      story: "The Publication Hero...",
    },
  },
};
