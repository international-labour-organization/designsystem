import { StoryObj } from "@storybook/react-vite";

import { Button } from "../../components/Button";
import { MegaNav, useMegaNavState } from "../../components/MegaNav";

import { MegaNavArgs } from "./MegaNav.args";
import { MegaNavItems } from "./MegaNav.items";

const AppMobileMenu = () => {
  const { items, isDrawerOpen, setDrawerOpen } = useMegaNavState();

  if (!isDrawerOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Menu"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10,
        padding: 24,
        background: "var(--ilo-color-light-container-bg-default)",
      }}
    >
      <Button
        type="secondary"
        size="small"
        onClick={() => setDrawerOpen(false)}
      >
        Close
      </Button>
      <ul style={{ marginTop: 24, display: "grid", gap: 16 }}>
        {items.map((item) =>
          item.groups.length ? (
            <li key={item.id}>
              <details>
                <summary>{item.label}</summary>
                <ul style={{ display: "grid", gap: 8, padding: "8px 16px" }}>
                  <li>
                    <a href={item.href}>Overview</a>
                  </li>
                  {item.groups
                    .flatMap((group) => group.links)
                    .map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target={link.target}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </details>
            </li>
          ) : (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          )
        )}
      </ul>
      <ul
        style={{
          marginTop: 24,
          paddingTop: 24,
          display: "grid",
          gap: 16,
          borderTop: "1px solid var(--ilo-color-light-border-subtle)",
        }}
      >
        <li>
          <a href="#account">My account</a>
        </li>
        <li>
          <a href="#saved">Saved publications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

const CustomMobileStory: StoryObj<typeof MegaNav.Root> = {
  parameters: {
    docs: {
      description: {
        story:
          "The default pieces with a mobile menu of the site's own instead of MegaNav.Drawer, opened by MegaNav.Burger. It lists the items collected from MegaNav.Menu through useMegaNavState().items, then adds options of its own. Visible below the lg breakpoint.",
      },
    },
  },
  render: () => (
    <MegaNav.Root {...MegaNavArgs} as="header">
      <MegaNav.Top />
      <MegaNav.Bar>
        <MegaNav.Menu>{MegaNavItems}</MegaNav.Menu>
        <MegaNav.Search />
        <MegaNav.Burger />
      </MegaNav.Bar>
      <AppMobileMenu />
    </MegaNav.Root>
  ),
};

export { CustomMobileStory };
