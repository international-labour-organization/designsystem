import { Meta, StoryObj } from "@storybook/react";
import { LogoGrid } from "../../components/LogoGrid";
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgTypes,
} from "@storybook/blocks";
import {
  defaultLogoGrid,
  darkLogoGrid,
  noLinksGrid,
} from "../../components/LogoGrid/LogoGrid.args";

const LogoMeta: Meta<typeof LogoGrid> = {
  title: "Components/Brand/LogoGrid",
  component: LogoGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Logo Grid component renders a series of logos representing a
            group of organizations. It can be shown on a light or dark
            background.
          </Description>
          <Primary />
          <Stories title="Examples"></Stories>
          <ArgTypes of={LogoMeta} />
        </>
      ),
    },
  },
};

export default LogoMeta;

export const basic: StoryObj<typeof LogoGrid> = {
  args: defaultLogoGrid,
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
};

export const dark: StoryObj<typeof LogoGrid> = {
  args: darkLogoGrid,
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const noLinks: StoryObj<typeof LogoGrid> = {
  args: noLinksGrid,
};
