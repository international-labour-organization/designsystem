import { createContext, ElementType, useContext } from "react";

import { MegaNavLabels, MegaNavRootProps } from "../../MegaNav.props";
import { MegaNavIds } from "../hooks/useIds";
import { useOpenState } from "../hooks/useOpenState";
import { ParsedItem } from "./parser";

type OpenState = ReturnType<typeof useOpenState>;

interface MegaNavContextValue extends OpenState {
  items: ParsedItem[];
  branding: MegaNavRootProps["branding"];
  widgets: MegaNavRootProps["widgets"];
  labels: Required<MegaNavLabels>;
  linkComponent: ElementType;
  ids: MegaNavIds;
  isDesktop: boolean;
  isClient: boolean;
  isDrawerOpen: boolean;
  setDrawerOpen: (isOpen: boolean) => void;
}

const MegaNavContext = createContext<MegaNavContextValue | null>(null);

function useMegaNav() {
  const context = useContext(MegaNavContext);

  if (!context) {
    throw new Error("MegaNav pieces must be rendered inside MegaNav.Root");
  }

  return context;
}

/**
 * The nav's state, for custom pieces: what is open and the mobile drawer
 */
function useMegaNavState() {
  const { open, toggle, close, isDesktop, isDrawerOpen, setDrawerOpen } =
    useMegaNav();

  return { open, toggle, close, isDesktop, isDrawerOpen, setDrawerOpen };
}

export type { MegaNavContextValue };
export { MegaNavContext, useMegaNav, useMegaNavState };
