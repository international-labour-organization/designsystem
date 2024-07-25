import { create } from "@storybook/theming/create";
import ilo_logo from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";
import { brand } from "@ilo-org/themes/tokens/brand/base.json";

export default create({
  base: "light",
  brandTitle: "ILO Design System for Twig",
  brandUrl: "https://www.ilo.org/",
  brandImage: ilo_logo,
  brandTarget: "_self",

  colorPrimary: brand["ilo-dark-blue"].value,
  colorSecondary: brand["ilo-blue"].value,

  // UI
  appBg: brand["ilo-light-blue"].value,
  appContentBg: brand["ilo-white"].value,
  appBorderColor: brand["ilo-grey-ui"].value,
  appBorderRadius: 0,

  fontBase: "'Noto Sans', sans-serif",
  fontCode: "'Fira Code', monospace",

  // Text colors
  textColor: brand["ilo-dark-blue"].value,
  textInverseColor: brand["ilo-white"].value,
  textMutedColor: brand["ilo-grey-accessible"].value,

  // Toolbar default and active colors
  barTextColor: brand["ilo-white"].value,
  barSelectedColor: brand["ilo-yellow"].value,
  barBg: brand["ilo-dark-blue"].value,

  buttonBg: brand["ilo-white"].value,
  buttonBorder: brand["ilo-grey-ui"].value,
  booleanBg: brand["ilo-light-blue"].value,
  booleanSelectedBg: brand["ilo-white"].value,

  inputBg: brand["ilo-light-blue"].value,
  inputBorder: brand["ilo-grey-ui"].value,
  inputTextColor: brand["ilo-dark-blue"].value,
  inputBorderRadius: 3,
});
