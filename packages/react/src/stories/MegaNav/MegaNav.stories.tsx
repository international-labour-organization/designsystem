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
        component:
          'The navigation with mega menu panels. Each MegaNav.Item renders where it is written: MegaNav.Trigger opens MegaNav.Panel, which holds up to three MegaNav.Column or markup of your own. The MegaNav.Links and MegaNav.Link inside are collected, so "More" and the mobile drawer list the same items. MegaNav is the default layout in three rows: the widgets, the branding and the menu bar. For a different one, compose the pieces inside MegaNav.Root: Top, Bar, Menu, Search, Burger and Drawer, with MegaNav.Container to align content of your own, and use useMegaNavState (the collected items, what is open, the drawer) in pieces of your own.',
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
