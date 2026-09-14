import React from "react";
import { addons, types } from "@storybook/manager-api";
import { IconButton } from "@storybook/components";
import { GithubIcon, ShareAltIcon } from "@storybook/icons";
import theme from "./theme";

const REPO_URL =
  "https://github.com/international-labour-organization/designsystem";

// Sidebar entries whose label should be an external link instead of a
// navigation item. Keys are the story ids of the placeholder docs pages in
// src/stories/docs (the slugified Meta title).
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
