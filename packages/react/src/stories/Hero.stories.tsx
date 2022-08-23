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
  argTypes: {},
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

/**
 * Article Hero Instance
 *
 */
export const ArticleHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
ArticleHero.args = heroArgs.articleHero;
ArticleHero.storyName = "Article Hero";

/**
 * Article Centered Hero Instance
 *
 */
export const ArticleCenteredHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
ArticleCenteredHero.args = heroArgs.articleCenteredHero;
ArticleCenteredHero.storyName = "Article Centered Hero";

/**
 * Portal Hero Instance
 *
 */
export const PortalHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
PortalHero.args = heroArgs.portalHero;
PortalHero.storyName = "Portal Hero";

/**
 * Publication Hero Instance
 *
 */
export const PublicationHero = HeroTemplate.bind({});

// enumerate the props for the hero only option
PublicationHero.args = heroArgs.publicationHero;
PublicationHero.storyName = "Publication Hero";
