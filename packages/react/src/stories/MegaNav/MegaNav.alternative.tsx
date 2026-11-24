import { StoryObj } from "@storybook/react-vite";

import { LanguageToggle } from "../../components/LanguageToggle";
import { MegaNav, useMegaNavState } from "../../components/MegaNav";

import { MegaNavArgs } from "./MegaNav.args";
import { MegaNavItems } from "./MegaNav.items";

const LightTop = () => {
  const { isDesktop } = useMegaNavState();

  if (!isDesktop) return null;

  return (
    <div
      style={{
        backgroundColor: "var(--ilo-color-light-container-bg-default)",
        borderBlockEnd: "1px solid var(--ilo-color-light-border-subtle)",
      }}
    >
      <MegaNav.Container>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBlock: 8,
          }}
        >
          {MegaNavArgs.widgets?.language && (
            <LanguageToggle theme="dark" {...MegaNavArgs.widgets.language} />
          )}
        </div>
      </MegaNav.Container>
      <MegaNav.Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlockEnd: 24,
          }}
        >
          <a href="/" aria-label="International Labour Organization">
            <img
              src="/logo_en_horizontal_blue.svg"
              alt=""
              style={{ display: "block", height: 72 }}
            />
          </a>
          <div style={{ display: "grid", gap: 4, textAlign: "end" }}>
            <strong
              style={{
                fontSize: "1.125rem",
                color: "var(--ilo-color-light-text-brand)",
              }}
            >
              Advancing social justice, promoting decent work
            </strong>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--ilo-color-light-text-subtle)",
              }}
            >
              ILO is a specialized agency of the United Nations
            </span>
          </div>
        </div>
      </MegaNav.Container>
    </div>
  );
};

const AlternativeStory: StoryObj<typeof MegaNav.Root> = {
  parameters: {
    docs: {
      description: {
        story:
          "Two colours, like the complex SubsiteNav: a light top area of the site's own, with the language toggle, the logo and the tagline on white, over the standard dark MegaNav.Bar. MegaNav.Top is left out, so the top can look however the site needs.",
      },
    },
  },
  render: () => (
    <MegaNav.Root
      {...MegaNavArgs}
      branding={{
        ...MegaNavArgs.branding,
        logo: {
          main: <img src="/logo_en_horizontal_white.svg" alt="" />,
          drawer: <img src="/logo_en_horizontal_blue.svg" alt="" />,
        },
      }}
      as="header"
    >
      <LightTop />
      <MegaNav.Bar>
        <MegaNav.Menu>{MegaNavItems}</MegaNav.Menu>
        <MegaNav.Search />
        <MegaNav.Burger />
      </MegaNav.Bar>
      <MegaNav.Drawer />
    </MegaNav.Root>
  ),
};

export { AlternativeStory };
