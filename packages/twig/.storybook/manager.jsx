import React from "react";
import { addons, types } from "storybook/manager-api";
import { Button } from "storybook/internal/components";
import { GithubIcon } from "@storybook/icons";
import theme from "./theme";

const REPO_URL =
  "https://github.com/international-labour-organization/designsystem";

addons.setConfig({
  theme: theme,
});

addons.register("ilo/github-link", () => {
  addons.add("ilo/github-link/tool", {
    type: types.TOOL,
    title: "GitHub repository",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: () => (
      <Button
        key="ilo-github"
        variant="ghost"
        padding="small"
        ariaLabel="View the Design System on GitHub"
        onClick={() => window.open(REPO_URL, "_blank", "noopener,noreferrer")}
      >
        <GithubIcon />
      </Button>
    ),
  });
});
