import { LogoProps } from "./Logo.props";
import en_blue from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";
import en_white from "@ilo-org/brand-assets/logo_en_horizontal_white.svg";

export const basic: LogoProps = {
  src: en_blue,
  url: "https://www.ilo.org",
  alt: "International Labour Organization",
  size: 400,
  target: "_blank",
};

export const withTheme: LogoProps = {
  ...basic,
  theme: "light",
  src: {
    light: en_blue,
    dark: en_white,
  },
};

export const withSubBrand: LogoProps = {
  ...withTheme,
  subbrand: "Voices",
  url: "https://voices.ilo.org",
};

export const withDarkTheme: LogoProps = {
  ...withSubBrand,
  subbrand: "Voices",
  theme: "dark",
  url: "https://live.ilo.org",
};

export const withLongSubbrand: LogoProps = {
  ...withTheme,
  subbrand: "Digital Design System",
};

export const fluidWidth: LogoProps = {
  ...withDarkTheme,
  url: "https://live.ilo.org",
  size: "fluid",
  subbrand: "Live",
};
