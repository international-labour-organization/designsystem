import { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
  Subheading,
} from "@storybook/addon-docs";
import { SocialMedia } from "../../components/SocialMedia";
import { SocialMediaProps } from "../../components/SocialMedia/SocialMedia.props";
import {
  defaultArgs,
  centredArgs,
  darkArgs,
} from "../../components/SocialMedia/SocialMedia.args";
import { brand } from "@ilo-org/themes/tokens/brand/base.json";

console.log(brand);

const SocialMediaMeta: Meta<SocialMediaProps> = {
  title: "Components/Navigation/SocialMedia",
  component: SocialMedia,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "white" },
        { name: "dark", value: brand["ilo-dark-blue"].value },
      ],
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Social Media component displays a list of social media icons. It
            can have a light or a dark theme and can be aligned to the start or
            center of its container.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
          <Subheading>Default props</Subheading>
          <ArgsTable />
        </>
      ),
    },
  },
};

export default SocialMediaMeta;

export const Default: StoryObj<typeof SocialMedia> = {
  args: defaultArgs,
};

export const Dark: StoryObj<typeof SocialMedia> = {
  args: darkArgs,
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Centred: StoryObj<typeof SocialMedia> = {
  args: centredArgs,
};
