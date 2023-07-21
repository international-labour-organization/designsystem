import { LogoGridProps } from "./LogoGrid.props";
import { logo_en_horizontal_blue_svg } from "@ilo-org/brand-assets";

export const defaultLogoGrid: LogoGridProps = {
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

export const darkLogoGrid: LogoGridProps = {
  ...defaultLogoGrid,
  theme: "dark",
};

export const noLinksGrid: LogoGridProps = {
  logos: defaultLogoGrid.logos.map(({ label, src }) => ({
    label,
    src,
  })),
};
