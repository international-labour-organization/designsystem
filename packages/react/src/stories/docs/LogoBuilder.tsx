import { useState, useRef } from "react";
import { Logo } from "../../components/Logo";
import * as brandAssets from "@ilo-org/brand-assets";
import { toPng, toSvg, toPixelData } from "html-to-image";
import {
  Fieldset,
  Dropdown,
  TextInput,
  NumberPicker,
  Form,
  Button,
} from "../../components";
import { OptionProps } from "../../components/Dropdown/Dropdown.props";

type LogoVariant = "en" | "fr" | "es";
type Theme = "light" | "dark";

// Get a list of logos from the brand-assets package
const logos = Object.keys(brandAssets).filter(
  (key) => key.includes("svg") && key.includes("logo")
);

// Create a map of logos with the language as the key and the logo as the value
const logoOptions = logos.reduce(
  (acc, logo) => {
    const language = logo.split("_")[1];
    const color = logo.match(/(blue|white)/)?.[1];
    if (!color) return acc;
    const theme = color === "blue" ? "light" : "dark";
    if (!acc[language]) {
      acc[language] = {};
    }
    acc[language][theme] = brandAssets[logo as keyof typeof brandAssets];
    return acc;
  },
  {} as Record<string, { light?: URL; dark?: URL }>
);

// Create language options using Intl.DisplayNames
const languageOptions = Object.keys(logoOptions).map((langCode) => {
  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  return {
    value: langCode,
    label: languageNames.of(langCode),
  };
});

export const LogoBuilder = () => {
  const [selectedLogo, setSelectedLogo] = useState<LogoVariant>("en");
  const [subbrand, setSubbrand] = useState("");
  const [theme, setTheme] = useState<Theme>("light");
  const [size, setSize] = useState(400);
  const logoRef = useRef<HTMLDivElement>(null);

  const handleDownload = async (format: "png" | "svg" | "cropped-png") => {
    if (!logoRef.current) return;

    if (format === "cropped-png") {
      const pixelData = await toPixelData(logoRef.current);
      console.log(pixelData);
      return;
    }

    try {
      const dataUrl =
        format === "png"
          ? await toPng(logoRef.current)
          : await toSvg(logoRef.current);

      const link = document.createElement("a");
      link.download = `ilo-logo-${selectedLogo}-${subbrand || "default"}.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div
      className="ilo--logo-builder"
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "800px",
        }}
      >
        <div className="ilo--richtext">
          <h1>Logo Builder</h1>
          <p>
            The Logo builder allows you to create a logo for your project. You
            can choose the logo variant, the theme, and the size. You can also
            add a subbrand text to the logo.
          </p>
        </div>
        <Form theme="light" style={{ width: "100%", maxWidth: "750px" }}>
          <Fieldset wrap="wrap" direction="row" style={{ width: "100%" }}>
            <Dropdown
              label="Language"
              name="logo-language"
              options={languageOptions as OptionProps[]}
              value={selectedLogo}
              onChange={(e) => setSelectedLogo(e.target.value as LogoVariant)}
              style={{ flex: "1 1 30%" }}
            />
            <Dropdown
              label="Theme"
              name="theme"
              options={[
                { label: "Light", value: "light" },
                { label: "Dark", value: "dark" },
              ]}
              value={theme}
              onChange={(e) => setTheme(e.target.value as Theme)}
              style={{ flex: "1 1 30%" }}
            />

            <NumberPicker
              label="Size"
              tooltip="Width in pixels"
              name="size"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{ flex: "1 1 30%" }}
            />
          </Fieldset>
          <Fieldset wrap="wrap" direction="row" style={{ width: "100%" }}>
            <TextInput
              type="text"
              label="Sub-brand"
              tooltip="The sub-brand text to be displayed next to the logo"
              name="subbrand"
              value={subbrand}
              onChange={(e) => setSubbrand(e.target.value)}
              placeholder="Enter subrand name"
              style={{ flex: "0 1 32%" }}
            />
          </Fieldset>
        </Form>

        <div
          style={{
            display: "inline-block",
            background: "transparent",
            border: "1px solid red",
          }}
        >
          <div
            ref={logoRef}
            style={{ border: "1px solid blue", display: "inline-block" }}
          >
            <Logo
              src={logoOptions[selectedLogo][theme]?.href as string}
              alt="International Labour Organization"
              subbrand={subbrand}
              size={size}
              theme={theme}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => handleDownload("svg")} type="secondary">
            Download SVG
          </Button>
          <Button onClick={() => handleDownload("png")} type="secondary">
            Download PNG
          </Button>
          <Button
            onClick={() => handleDownload("cropped-png")}
            type="secondary"
          >
            Download Cropped PNG
          </Button>
        </div>
      </div>
    </div>
  );
};
