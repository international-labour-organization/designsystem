import { StoryObj } from "@storybook/react-vite";

import { LanguageToggle } from "../../components/LanguageToggle";
import { MegaNav, useMegaNavState } from "../../components/MegaNav";

import { ShellArgs, ShellItems } from "./MegaNav.shell";

const ShellWidgets = () => {
  const { isDesktop } = useMegaNavState();

  if (!isDesktop || !ShellArgs.widgets?.language) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        marginInlineStart: 24,
        whiteSpace: "nowrap",
      }}
    >
      <a
        href="https://www.ilo.org"
        style={{
          color: "var(--ilo-color-light-text-inverse)",
          fontSize: "0.875rem",
        }}
      >
        Go to main ILO website
      </a>
      <LanguageToggle theme="dark-blue" {...ShellArgs.widgets.language} />
    </div>
  );
};

const CustomShellStory: StoryObj<typeof MegaNav.Root> = {
  parameters: {
    docs: {
      description: {
        story:
          "Everything in a single bar: the logo, the menu, then a link back to ilo.org, the language toggle and search. Composed from MegaNav.Root, Bar, Menu, Search, Burger and Drawer, with the widgets as a piece of its own that only renders on desktop, as the drawer shows them on mobile. --ilo-mega-nav-menu-gap shrinks the space kept free after the menu, since the bar has more after it.",
      },
    },
  },
  render: () => (
    <MegaNav.Root {...ShellArgs} as="header" className="shell-nav">
      <style>{".shell-nav { --ilo-mega-nav-menu-gap: 32px; }"}</style>
      <MegaNav.Bar logo="always">
        <MegaNav.Menu>{ShellItems}</MegaNav.Menu>
        <ShellWidgets />
        <MegaNav.Search />
        <MegaNav.Burger />
      </MegaNav.Bar>
      <MegaNav.Drawer />
    </MegaNav.Root>
  ),
};

export { CustomShellStory };
