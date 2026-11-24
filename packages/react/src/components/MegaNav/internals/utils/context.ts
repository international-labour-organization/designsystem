import { createContext, ElementType, useContext } from "react";

import { MegaNavLabels, MegaNavRootProps } from "../../MegaNav.props";
import { MegaNavIds } from "../hooks/useIds";
import { useOpenState } from "../hooks/useOpenState";
import {
  MegaNavCollectedItem,
  MegaNavRegisteredLink,
  Register,
} from "./collection";

type OpenState = ReturnType<typeof useOpenState>;

interface MegaNavConfigValue {
  branding: MegaNavRootProps["branding"];
  widgets: MegaNavRootProps["widgets"];
  labels: Required<MegaNavLabels>;
  linkComponent: ElementType;
  ids: MegaNavIds;
  registerItem: Register<MegaNavCollectedItem>;
  toggle: OpenState["toggle"];
  close: OpenState["close"];
  hoverHandlers: OpenState["hoverHandlers"];
  setDrawerOpen: (isOpen: boolean) => void;
}

interface MegaNavStatusValue {
  open: string | null;
  items: MegaNavCollectedItem[];
  itemKeys: string[];
  isDesktop: boolean;
  isClient: boolean;
  isDrawerOpen: boolean;
}

interface MegaNavMenuValue {
  /**
   * Keys of the items moved under "More", empty until measured
   */
  hiddenKeys: Set<string>;
}

interface MegaNavItemValue {
  id: string;
  label: string;
  href: string;
  registerLink: Register<MegaNavRegisteredLink>;
}

interface MegaNavItemStatusValue {
  isOpen: boolean;
  isHidden: boolean;
}

interface MegaNavLinksValue {
  group: string;
  title?: string;
}

const MegaNavConfigContext = createContext<MegaNavConfigValue | null>(null);
const MegaNavStatusContext = createContext<MegaNavStatusValue | null>(null);
const MegaNavMenuContext = createContext<MegaNavMenuValue | null>(null);
const MegaNavItemContext = createContext<MegaNavItemValue | null>(null);
const MegaNavItemStatusContext = createContext<MegaNavItemStatusValue | null>(
  null
);
const MegaNavLinksContext = createContext<MegaNavLinksValue | null>(null);

function required<T>(value: T | null, message: string): T {
  if (!value) throw new Error(message);
  return value;
}

const outsideRoot = "MegaNav pieces must be rendered inside MegaNav.Root";
const outsideItem =
  "MegaNav.Trigger and MegaNav.Panel must be rendered inside MegaNav.Item";

/**
 * Values that don't change while the nav is used: config, ids and actions
 */
function useMegaNavConfig() {
  return required(useContext(MegaNavConfigContext), outsideRoot);
}

/**
 * Values that change: what is open, the collected items, the breakpoint
 */
function useMegaNavStatus() {
  return required(useContext(MegaNavStatusContext), outsideRoot);
}

function useMegaNavMenu() {
  return required(
    useContext(MegaNavMenuContext),
    "MegaNav.Item must be rendered inside MegaNav.Menu"
  );
}

function useMegaNavItem() {
  return required(useContext(MegaNavItemContext), outsideItem);
}

function useMegaNavItemStatus() {
  return required(useContext(MegaNavItemStatusContext), outsideItem);
}

/**
 * The nav's state for custom pieces: the collected items, what is open and
 * the drawer
 */
function useMegaNavState() {
  const { toggle, close, setDrawerOpen } = useMegaNavConfig();
  const { items, open, isDesktop, isDrawerOpen } = useMegaNavStatus();

  return { items, open, toggle, close, isDesktop, isDrawerOpen, setDrawerOpen };
}

export type {
  MegaNavConfigValue,
  MegaNavItemStatusValue,
  MegaNavItemValue,
  MegaNavStatusValue,
};
export {
  MegaNavConfigContext,
  MegaNavItemContext,
  MegaNavItemStatusContext,
  MegaNavLinksContext,
  MegaNavMenuContext,
  MegaNavStatusContext,
  useMegaNavConfig,
  useMegaNavItem,
  useMegaNavItemStatus,
  useMegaNavMenu,
  useMegaNavState,
  useMegaNavStatus,
};
