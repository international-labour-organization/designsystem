import { Meta, StoryObj } from "@storybook/react-vite";

import { MegaNav, MegaNavProps } from "../../components/MegaNav";

import { AlternativeStory } from "./MegaNav.alternative";
import { MegaNavArgs } from "./MegaNav.args";
import { CustomMenuStory } from "./MegaNav.customMenu";
import { CustomMobileStory } from "./MegaNav.customMobile";
import { CustomShellStory } from "./MegaNav.customShell";
import { MegaNavItems } from "./MegaNav.items";
import { MinimalStory } from "./MegaNav.minimal";

const meta: Meta<typeof MegaNav> = {
  title: "Components/Navigation/MegaNav",
  component: MegaNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `The main navigation with mega menu panels. Every \`MegaNav.Item\` renders where it is written: \`MegaNav.Trigger\` opens \`MegaNav.Panel\`, which holds up to three \`MegaNav.Column\` or markup of your own. The links inside \`MegaNav.Links\` are collected, so **More** and the mobile drawer list the same items.

\`<MegaNav>\` is the default layout. On desktop it has the top area (language toggle, logo and tagline) and the dark bar with the menu and search, the items that don't fit the bar move under **More**. Below \`lg\` the bar shows the logo and the burger, which opens the drawer built from the same items. It only needs \`branding\`, \`widgets\` and the items as its children.

![MegaNav anatomy: the pieces on desktop and mobile](meganav.png)

### Components

\`<MegaNav>\` is a ready made \`MegaNav.Root\` with \`Top\`, \`Bar\`, \`Menu\`, \`Search\`, \`Burger\` and \`Drawer\`, its children go inside \`MegaNav.Menu\`. Every piece below is also available on its own, to compose other layouts inside \`MegaNav.Root\`, like the stories below.

| Component | What it does |
| --- | --- |
| \`MegaNav\` | The default layout, rendered as a \`header\`. Takes the same props as \`MegaNav.Root\`, \`branding\` is required |
| \`MegaNav.Root\` | Holds the state (open panel, collected items, drawer) and shares it with every piece inside. Takes \`branding\`, \`widgets\`, \`labels\`, \`linkComponent\`, \`hoverDelay\` and \`as\` |
| \`MegaNav.Top\` | The top area: \`branding.logo.main\`, \`branding.tag\` and the language toggle from \`widgets.language\` |
| \`MegaNav.Bar\` | The dark bar. \`logo\` decides where the logo is shown: \`mobile\` (default), \`always\` or \`none\` |
| \`MegaNav.Menu\` | The \`nav\` landmark with the items. Measures them and moves the ones that don't fit under **More** |
| \`MegaNav.Item\` | One entry of the menu, \`label\` and \`href\` are required. Without children it's a plain link |
| \`MegaNav.Trigger\` | Opens the item's panel. By default the item's link and a toggle button, with \`children\` a single button with your content |
| \`MegaNav.Panel\` | The item's panel, holds \`MegaNav.Column\` or any markup |
| \`MegaNav.Column\` | A column of the panel, up to three from \`xl\`, two below |
| \`MegaNav.Links\` | A group of links with an optional \`title\`. Its links are collected for **More** and the drawer |
| \`MegaNav.Link\` | A link. \`label\` is used under **More** and on mobile, \`children\` can show richer content in the panel |
| \`MegaNav.Search\` | The search button and its panel, renders only when \`widgets.search\` is set |
| \`MegaNav.Burger\` | Opens the drawer, shown below \`lg\` |
| \`MegaNav.Drawer\` | The mobile drawer, built from the collected items, with the language toggle and search |
| \`MegaNav.Container\` | Content of your own, aligned with the bar and the panels |
| \`useMegaNavState()\` | The state for pieces of your own: \`items\`, \`open\`, \`toggle\`, \`close\`, \`isDesktop\`, \`isDrawerOpen\`, \`setDrawerOpen\` |`,
      },
    },
  },
};

export const Default: StoryObj<MegaNavProps> = {
  args: {
    ...MegaNavArgs,
    children: MegaNavItems,
  },
};

export const Minimal = MinimalStory;
export const CustomShell = CustomShellStory;
export const Alternative = AlternativeStory;
export const CustomMenu = CustomMenuStory;
export const CustomMobile = CustomMobileStory;

export default meta;
