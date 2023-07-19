import { StoryObj, Meta } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from "@storybook/blocks";
import { Hero } from "../../components/Hero";
import * as heroArgs from "../../components/Hero/Hero.args";

const HeroMeta: Meta<typeof Hero> = {
  title: "Components/Content/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Hero is an attention-grabbing section of a web page designed to
            engage users and create a memorable first impression.
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

export const Default: StoryObj<typeof Hero> = {
  args: heroArgs.darkPortal,
};

export const Light: StoryObj<typeof Hero> = {
  args: heroArgs.lightPortal,
};

export const SemiTransparent: StoryObj<typeof Hero> = {
  args: heroArgs.semiTransparent,
};

export const Transparent: StoryObj<typeof Hero> = {
  args: heroArgs.transparent,
};

export const Offset: StoryObj<typeof Hero> = {
  args: heroArgs.offset,
};

export const Center: StoryObj<typeof Hero> = {
  args: heroArgs.center,
};

export const CenterBottom: StoryObj<typeof Hero> = {
  args: heroArgs.centerBottom,
};

export const NoPoster: StoryObj<typeof Hero> = {
  args: heroArgs.noPoster,
};
