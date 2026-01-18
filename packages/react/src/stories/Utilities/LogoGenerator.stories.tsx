import { useState, useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Logo from "../../components/Logo/Logo";
// Import Design System components
import TextInput from "../../components/TextInput/TextInput";
import NumberPicker from "../../components/NumberPicker/NumberPicker";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Button } from "../../components/Button/Button";
import RichText from "../../components/RichText/RichText";
import Form from "../../components/Form/Form";
import Fieldset from "../../components/Fieldset/Fieldset";
import Toggle from "../../components/Toggle/Toggle";

import { toSvg, toPng } from "html-to-image";

// Import all available logos from brand-assets
import logo_ar_blue from "@ilo-org/brand-assets/logo_ar_horizontal_blue.svg";
import logo_ar_white from "@ilo-org/brand-assets/logo_ar_horizontal_white.svg";
import logo_de_blue from "@ilo-org/brand-assets/logo_de_horizontal_blue.svg";
import logo_de_white from "@ilo-org/brand-assets/logo_de_horizontal_white.svg";
import logo_en_blue from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";
import logo_en_white from "@ilo-org/brand-assets/logo_en_horizontal_white.svg";
import logo_es_blue from "@ilo-org/brand-assets/logo_es_horizontal_blue.svg";
import logo_es_white from "@ilo-org/brand-assets/logo_es_horizontal_white.svg";
import logo_fr_blue from "@ilo-org/brand-assets/logo_fr_horizontal_blue.svg";
import logo_fr_white from "@ilo-org/brand-assets/logo_fr_horizontal_white.svg";
import logo_it_blue from "@ilo-org/brand-assets/logo_it_horizontal_blue.svg";
import logo_it_white from "@ilo-org/brand-assets/logo_it_horizontal_white.svg";
import logo_ja_blue from "@ilo-org/brand-assets/logo_ja_horizontal_blue.svg";
import logo_ja_white from "@ilo-org/brand-assets/logo_ja_horizontal_white.svg";
import logo_nl_blue from "@ilo-org/brand-assets/logo_nl_horizontal_blue.svg";
import logo_nl_white from "@ilo-org/brand-assets/logo_nl_horizontal_white.svg";
import logo_pt_blue from "@ilo-org/brand-assets/logo_pt_horizontal_blue.svg";
import logo_pt_white from "@ilo-org/brand-assets/logo_pt_horizontal_white.svg";
import logo_ru_blue from "@ilo-org/brand-assets/logo_ru_horizontal_blue.svg";
import logo_ru_white from "@ilo-org/brand-assets/logo_ru_horizontal_white.svg";
import logo_tr_blue from "@ilo-org/brand-assets/logo_tr_horizontal_blue.svg";
import logo_tr_white from "@ilo-org/brand-assets/logo_tr_horizontal_white.svg";
import logo_uk_blue from "@ilo-org/brand-assets/logo_uk_horizontal_blue.svg";
import logo_uk_white from "@ilo-org/brand-assets/logo_uk_horizontal_white.svg";
import logo_vi_blue from "@ilo-org/brand-assets/logo_vi_horizontal_blue.svg";
import logo_vi_white from "@ilo-org/brand-assets/logo_vi_horizontal_white.svg";
import logo_zh_blue from "@ilo-org/brand-assets/logo_zh_horizontal_blue.svg";
import logo_zh_white from "@ilo-org/brand-assets/logo_zh_horizontal_white.svg";

const logos: Record<string, Record<string, string>> = {
  ar: { blue: logo_ar_blue, white: logo_ar_white },
  de: { blue: logo_de_blue, white: logo_de_white },
  en: { blue: logo_en_blue, white: logo_en_white },
  es: { blue: logo_es_blue, white: logo_es_white },
  fr: { blue: logo_fr_blue, white: logo_fr_white },
  it: { blue: logo_it_blue, white: logo_it_white },
  ja: { blue: logo_ja_blue, white: logo_ja_white },
  nl: { blue: logo_nl_blue, white: logo_nl_white },
  pt: { blue: logo_pt_blue, white: logo_pt_white },
  ru: { blue: logo_ru_blue, white: logo_ru_white },
  tr: { blue: logo_tr_blue, white: logo_tr_white },
  uk: { blue: logo_uk_blue, white: logo_uk_white },
  vi: { blue: logo_vi_blue, white: logo_vi_white },
  zh: { blue: logo_zh_blue, white: logo_zh_white },
};

const languages = [
  { label: "Arabic", value: "ar" },
  { label: "German", value: "de" },
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "Italian", value: "it" },
  { label: "Japanese", value: "ja" },
  { label: "Dutch", value: "nl" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Turkish", value: "tr" },
  { label: "Ukrainian", value: "uk" },
  { label: "Vietnamese", value: "vi" },
  { label: "Chinese", value: "zh" },
];

const colors = [
  { label: "ILO Blue", value: "blue" },
  { label: "White", value: "white" },
  { label: "Black", value: "black" },
];

/**
 * The Logo Generator is a utility to help you create and download
 * ILO logos with specific subbrands and sizes.
 */
const LogoGenerator = () => {
  const [hasSubbrand, setHasSubbrand] = useState(false);
  const [subbrand, setSubbrand] = useState("");
  const [size, setSize] = useState(400);
  const [language, setLanguage] = useState("en");
  const [color, setColor] = useState("blue");
  const logoRef = useRef<HTMLDivElement>(null);

  /**
   * Helper to get options for html-to-image.
   * Firefox has a known issue parsing fonts when cloning DOM for SVG/PNG,
   * so we skip font processing in Firefox to avoid TypeErrors.
   */
  const getHtmlToImageOptions = (baseOptions: any = {}) => {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    return {
      ...baseOptions,
      backgroundColor: "transparent",
      cacheBust: true,
      ...(isFirefox ? { skipFonts: true } : {}),
    };
  };

  // Generate filename based on current settings
  const getFilename = (extension: string) => {
    const parts = ["ilo-logo", language, color];
    if (hasSubbrand) {
      parts.push(subbrand.trim().toLowerCase().replace(/\s+/g, "-"));
    }
    return `${parts.join("-")}.${extension}`;
  };

  // Helper to handle the download logic for SVG
  const downloadSvg = async () => {
    if (logoRef.current) {
      try {
        // Ensure fonts are loaded before capturing
        await document.fonts.ready;

        const dataUrl = await toSvg(logoRef.current, getHtmlToImageOptions({}));
        const link = document.createElement("a");
        link.download = getFilename("svg");
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error("Failed to download SVG", err);
      }
    }
  };

  // Helper to handle the download logic for PNG
  const downloadPng = async () => {
    if (logoRef.current) {
      try {
        await document.fonts.ready;

        const dataUrl = await toPng(
          logoRef.current,
          getHtmlToImageOptions({
            pixelRatio: 3, // Higher quality for PNG
          })
        );
        const link = document.createElement("a");
        link.download = getFilename("png");
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error("Failed to download PNG", err);
      }
    }
  };

  // Get the logo source based on language and color
  // If black is selected, we use the blue logo and apply a filter in the preview
  const getLogoSrc = () => {
    const selectedColor = color === "black" ? "blue" : color;
    return logos[language][selectedColor];
  };

  return (
    <div
      className="sb-unstyled"
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <header
        className="ilo--richtext ilo--richtext__theme__light"
        style={{ marginBottom: "40px" }}
      >
        <h1>Download logos</h1>
        <p style={{ color: "var(--ilo-color-gray-accessible)" }}>
          Configure and download the official ILO logo for your specific needs.
        </p>
      </header>

      <Form
        onSubmit={(e) => e.preventDefault()}
        style={{ width: "100%", marginBottom: "40px" }}
        theme="light"
      >
        <Fieldset direction="row" style={{ width: "100%" }} wrap="wrap">
          <Dropdown
            name="language"
            label="Language"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            options={languages}
            style={{ flex: "1 1 30%" }}
          />
          <Dropdown
            name="color"
            label="Color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            options={colors}
            style={{ flex: "1 1 30%" }}
          />
          <NumberPicker
            name="size"
            label="Logo Size (pixels)"
            id="size"
            min={100}
            max={1200}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            tooltip="Width of the logo in pixels."
            style={{ flex: "1 1 30%" }}
          />
        </Fieldset>

        <Fieldset
          direction="row"
          legend="Subbrand (Optional)"
          tooltip="Add custom text next to the ILO logo for programme or event branding."
          style={{ width: "100%" }}
          wrap="wrap"
        >
          <Toggle
            name="has-subbrand"
            label="Add subbrand"
            id="has-subbrand"
            checked={hasSubbrand}
            onChange={(e) => setHasSubbrand(e.target.checked)}
            labelPlacement="end"
          />
          {hasSubbrand && (
            <TextInput
              name="subbrand"
              label="Subbrand Text"
              type="text"
              id="subbrand"
              value={subbrand}
              onChange={(e) => setSubbrand(e.target.value)}
              placeholder="e.g. Innovation Day"
              style={{ flex: "1 1 100%" }}
            />
          )}
        </Fieldset>

        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <Button onClick={downloadSvg} type="primary">
            Download SVG (Vector)
          </Button>
          <Button onClick={downloadPng} type="secondary">
            Download PNG (Raster)
          </Button>
        </div>
      </Form>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}>
          Preview
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
            padding: "40px",
            backgroundColor: color === "white" ? "#230050" : "white", // Dark background for white logo
            backgroundImage:
              color === "white"
                ? "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)"
                : "radial-gradient(#ddd 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            border: "1px solid #eee",
            borderRadius: "8px",
            overflow: "auto",
          }}
        >
          <div
            ref={logoRef}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              // Filter to make logo black if color is set to black
              filter: color === "black" ? "grayscale(1) brightness(0)" : "none",
            }}
          >
            <Logo
              key={`logo-${!!subbrand}`}
              alt={`ILO ${
                languages.find((l) => l.value === language)?.label
              } Logo`}
              size={size}
              src={getLogoSrc()}
              subbrand={hasSubbrand ? subbrand : undefined}
              theme={color === "white" ? "dark" : "light"}
            />
          </div>
        </div>
      </section>

      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #eee",
        }}
      >
        <RichText
          content="
            <p style='margin: 0 0 8px 0'><strong>Note on Exports:</strong></p>
            <ul style='margin: 0; padding-left: 20px'>
              <li>SVG is ideal for high-quality printing and scaling.</li>
              <li>PNG is better for web and presentations but may differ slightly from the preview due to browser rasterization.</li>
            </ul>
          "
        />
      </footer>
    </div>
  );
};

const meta: Meta = {
  title: "Utilities/Brand",
  component: LogoGenerator,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: null, // Disable default docs page to show our custom UI
    },
  },
};

export default meta;

export const Logos: StoryObj = {
  render: () => <LogoGenerator />,
};
