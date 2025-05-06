import { useState, useRef } from "react";
import { Logo } from "../../components/Logo";
import en_blue from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";
import en_white from "@ilo-org/brand-assets/logo_en_horizontal_white.svg";
import fr_blue from "@ilo-org/brand-assets/logo_fr_horizontal_blue.svg";
import fr_white from "@ilo-org/brand-assets/logo_fr_horizontal_white.svg";
import es_blue from "@ilo-org/brand-assets/logo_es_horizontal_blue.svg";
import es_white from "@ilo-org/brand-assets/logo_es_horizontal_white.svg";
import { toPng, toSvg } from "html-to-image";

type LogoVariant = "en" | "fr" | "es";
type Theme = "light" | "dark";

export const LogoBuilder = () => {
  const [selectedLogo, setSelectedLogo] = useState<LogoVariant>("en");
  const [subbrand, setSubbrand] = useState("");
  const [theme, setTheme] = useState<Theme>("light");
  const [size, setSize] = useState(400);
  const logoRef = useRef<HTMLDivElement>(null);

  const logoOptions = {
    en: { light: en_blue, dark: en_white },
    fr: { light: fr_blue, dark: fr_white },
    es: { light: es_blue, dark: es_white },
  } as const;

  const handleDownload = async (format: "png" | "svg") => {
    if (!logoRef.current) return;

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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Logo Variant:
          <select
            value={selectedLogo}
            onChange={(e) => setSelectedLogo(e.target.value as LogoVariant)}
            style={{ marginLeft: "1rem" }}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </label>

        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Subbrand Text:
          <input
            type="text"
            value={subbrand}
            onChange={(e) => setSubbrand(e.target.value)}
            placeholder="Enter subbrand text"
            style={{ marginLeft: "1rem" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            style={{ marginLeft: "1rem" }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Size (px):
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min="100"
            max="800"
            style={{ marginLeft: "1rem" }}
          />
        </label>
      </div>

      <div
        ref={logoRef}
        style={{
          padding: "2rem",
          background: theme === "dark" ? "#1a1a1a" : "#ffffff",
          borderRadius: "8px",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Logo
          src={logoOptions[selectedLogo]}
          alt="International Labour Organization"
          subbrand={subbrand}
          size={size}
          theme={theme}
        />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={() => handleDownload("png")}
          style={{
            padding: "0.75rem 1.5rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Download PNG
        </button>
        <button
          onClick={() => handleDownload("svg")}
          style={{
            padding: "0.75rem 1.5rem",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Download SVG
        </button>
      </div>
    </div>
  );
};
