import { Meta, StoryObj } from "@storybook/react-vite";
import { LogoGrid } from "../../components/LogoGrid";
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgTypes,
} from "@storybook/addon-docs/blocks";
import { LogoGridProps } from "../../components/LogoGrid/LogoGrid.props";
import { logo_en_horizontal_blue_svg } from "@ilo-org/brand-assets";

const defaultLogoGrid: LogoGridProps = {
  logos: [
    {
      label: "International Labour Organization",
      src: logo_en_horizontal_blue_svg,
      url: "https://www.ilo.org/",
    },
    {
      label: "Food and Agriculture Organization",
      src: "/fao-logo.svg",
      url: "https://www.fao.org",
    },
    {
      label: "World Health Organization",
      src: "/who-logo.svg",
      url: "https://www.who.int/",
    },
    {
      label: "World Food Programme",
      src: "/wfp-logo.svg",
      url: "https://www.wfp.org/",
    },

    {
      label: "UNICEF",
      src: "/unicef-logo.png",
      url: "https://www.unicef.org/",
    },
    {
      label: "UN Refugees",
      src: "/unhcr-logo.svg",
      url: "https://www.unhcr.org/",
    },
  ],
};

const darkLogoGrid: LogoGridProps = {
  ...defaultLogoGrid,
  theme: "dark",
};

const noLinksGrid: LogoGridProps = {
  logos: [
    {
      label: "International Labour Organization",
      src: logo_en_horizontal_blue_svg,
    },
    {
      label: "Food and Agriculture Organization",
      src: "/fao-logo.svg",
    },
    {
      label: "World Health Organization",
      src: "/who-logo.svg",
    },
    {
      label: "World Food Programme",
      src: "/wfp-logo.svg",
    },
    {
      label: "UNICEF",
      src: "/unicef-logo.png",
    },
    {
      label: "UN Refugees",
      src: "/unhcr-logo.svg",
    },
  ],
};

const LogoMeta: Meta<typeof LogoGrid> = {
  title: "Components/Media/LogoGrid",
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
  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};

export const noLinks: StoryObj<typeof LogoGrid> = {
  args: noLinksGrid,
};
