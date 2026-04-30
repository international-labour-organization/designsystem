import { create } from "@storybook/theming/create";
import ilo_logo from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";
import "@ilo-org/styles/css/global.css";
import "./manager.css";

export default create({
  base: "light",
  brandTitle: "ILO Design System for Twig",
  brandUrl: "https://www.ilo.org/",
  brandImage: ilo_logo,
  brandTarget: "_self",

  // Values from packages/styles/scss/theme/_foundation.scss
  colorPrimary: "rgba(35, 0, 80, 1)", // --ilo-color-blue-dark
  colorSecondary: "rgba(30, 45, 190, 1)", // --ilo-color-blue

  // UI
  appBg: "rgba(235, 245, 253, 1)", // --ilo-color-blue-lighter
  appContentBg: "rgba(255, 255, 255, 1)", // --ilo-color-white
  appBorderColor: "rgba(184, 196, 204, 1)", // --ilo-color-gray-base
  appBorderRadius: 0,

  fontBase: "'Noto Sans', sans-serif",
  fontCode: "'Fira Code', monospace",

  // Text colors
  textColor: "rgba(35, 0, 80, 1)", // --ilo-color-blue-dark
  textInverseColor: "rgba(255, 255, 255, 1)", // --ilo-color-white
  textMutedColor: "rgba(109, 109, 109, 1)", // --ilo-color-gray-accessible

  // Toolbar default and active colors
  barTextColor: "rgba(255, 255, 255, 1)", // --ilo-color-white
  barSelectedColor: "rgba(255, 205, 45, 1)", // --ilo-color-yellow
  barBg: "rgba(35, 0, 80, 1)", // --ilo-color-blue-dark

  buttonBg: "rgba(255, 255, 255, 1)", // --ilo-color-white
  buttonBorder: "rgba(184, 196, 204, 1)", // --ilo-color-gray-base
  booleanBg: "rgba(235, 245, 253, 1)", // --ilo-color-blue-lighter
  booleanSelectedBg: "rgba(255, 255, 255, 1)", // --ilo-color-white

  inputBg: "rgba(235, 245, 253, 1)", // --ilo-color-blue-lighter
  inputBorder: "rgba(184, 196, 204, 1)", // --ilo-color-gray-base
  inputTextColor: "rgba(35, 0, 80, 1)", // --ilo-color-blue-dark
  inputBorderRadius: 3,
});
