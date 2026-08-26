import { create } from "@storybook/theming/create";
//@ts-ignore brand assets have wrong type declarations
import ilo_logo from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";

export default create({
  base: "light",
  brandTitle: "ILO Design System for React",
  brandUrl: "https://www.ilo.org/",
  brandImage: ilo_logo,
  brandTarget: "_self",

  // Values from packages/styles/scss/theme/_foundation.scss
  colorPrimary: "rgba(35, 0, 80, 1)", // --ilo-color-brand-800
  colorSecondary: "rgba(30, 45, 190, 1)", // --ilo-color-brand-600

  // UI
  appBg: "rgba(235, 245, 253, 1)", // --ilo-color-brand-100
  appContentBg: "rgba(255, 255, 255, 1)", // --ilo-color-neutrals-white
  appBorderColor: "rgba(184, 196, 204, 1)", // --ilo-color-neutrals-500
  appBorderRadius: 0,

  fontBase: "'Noto Sans', sans-serif",
  fontCode: "'Fira Code', monospace",

  // Text colors
  textColor: "rgba(35, 0, 80, 1)", // --ilo-color-brand-800
  textInverseColor: "rgba(255, 255, 255, 1)", // --ilo-color-neutrals-white
  textMutedColor: "rgba(109, 109, 109, 1)", // --ilo-color-neutrals-700

  // Toolbar default and active colors
  barTextColor: "rgba(255, 255, 255, 1)", // --ilo-color-neutrals-white
  barSelectedColor: "rgba(255, 205, 45, 1)", // --ilo-color-yellow-400
  barHoverColor: "rgba(255, 205, 45, 1)", // --ilo-color-yellow-400
  barBg: "rgba(35, 0, 80, 1)", // --ilo-color-brand-800

  buttonBg: "rgba(255, 255, 255, 1)", // --ilo-color-neutrals-white
  buttonBorder: "rgba(184, 196, 204, 1)", // --ilo-color-neutrals-500
  booleanBg: "rgba(235, 245, 253, 1)", // --ilo-color-brand-100
  booleanSelectedBg: "rgba(255, 255, 255, 1)", // --ilo-color-neutrals-white
  inputBg: "rgba(235, 245, 253, 1)", // --ilo-color-brand-100
  inputBorder: "rgba(184, 196, 204, 1)", // --ilo-color-neutrals-500
  inputTextColor: "rgba(35, 0, 80, 1)", // --ilo-color-brand-800
  inputBorderRadius: 3,
});
