import React from "react";
import { addons, types, useGlobals } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { GithubIcon, ShareAltIcon, TransferIcon } from "@storybook/icons";
import theme from "./theme";

const REPO_URL =
  "https://github.com/international-labour-organization/designsystem";

const EXTERNAL_LINKS: Record<string, string> = {
  "design-system-homepage": "https://brand.ilo.org/designsystem",
  "design-system-drupal-twig-components": "https://twig.ui.ilo.org",
  "design-system-figma":
    "https://www.figma.com/design/RRxsfLNxjoypKrfJg1EwJf/ILO-Components-Library?node-id=34-1554",
};

addons.setConfig({
  theme: theme,
  sidebar: {
    renderLabel: (item) => {
      const href = EXTERNAL_LINKS[item.id.replace(/--docs$/, "")];

      if (!href) {
        return item.name;
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          // Keep Storybook from also navigating to the placeholder page
          onClick={(event) => event.stopPropagation()}
          style={{
            color: "inherit",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {item.name}
          <ShareAltIcon size={10} />
        </a>
      );
    },
  },
});

const TextDirectionTool = () => {
  const [globals, updateGlobals] = useGlobals();
  const direction = globals.textDirection === "rtl" ? "rtl" : "ltr";

  return (
    <IconButton
      key="ilo-text-direction"
      active={direction === "rtl"}
      title={`Switch text direction to ${
        direction === "ltr" ? "right-to-left" : "left-to-right"
      }`}
      onClick={() =>
        updateGlobals({ textDirection: direction === "ltr" ? "rtl" : "ltr" })
      }
    >
      <TransferIcon />
    </IconButton>
  );
};

addons.register("ilo/text-direction", () => {
  addons.add("ilo/text-direction/tool", {
    type: types.TOOL,
    title: "Text direction",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: TextDirectionTool,
  });
});

addons.register("ilo/github-link", () => {
  addons.add("ilo/github-link/tool", {
    type: types.TOOL,
    title: "GitHub repository",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: () => (
      <IconButton
        key="ilo-github"
        title="View the Design System on GitHub"
        onClick={() => window.open(REPO_URL, "_blank", "noopener,noreferrer")}
      >
        <GithubIcon />
      </IconButton>
    ),
  });
});
