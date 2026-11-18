import classNames from "classnames";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { useBreakpoint } from "../../hooks";
import { prefix } from "../../utils";

import { useIds } from "./internals/hooks/useIds";
import { useOpenState } from "./internals/hooks/useOpenState";
import {
  isDev,
  reservedIds,
  MegaNavCollectedItem,
  useRegistry,
  warn,
} from "./internals/utils/collection";
import {
  MegaNavConfigContext,
  MegaNavStatusContext,
} from "./internals/utils/context";
import { MegaNavLabels, MegaNavRootProps } from "./MegaNav.props";

const DEFAULT_LABELS: Required<MegaNavLabels> = {
  nav: "Main",
  more: "More",
  menu: "Open navigation",
  back: "Menu home",
  close: "Close navigation",
  overview: "Overview",
  search: "Search",
  toggle: (label) => `${label} submenu`,
};

const DESKTOP_BREAKPOINTS = ["lg", "xl", "xxl"];

const MegaNavRoot = forwardRef<HTMLElement, MegaNavRootProps>(
  (
    {
      branding,
      widgets,
      labels: customLabels,
      linkComponent = "a",
      hoverDelay,
      as: Element = "div",
      className,
      children,
    },
    ref
  ) => {
    const { breakpoint } = useBreakpoint();
    const ids = useIds();
    const rootRef = useRef<HTMLElement>(null);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useImperativeHandle(ref, () => rootRef.current as HTMLElement);

    // No breakpoint matches on the server, or below the smallest one
    const isDesktop = DESKTOP_BREAKPOINTS.includes(
      breakpoint ?? (isClient ? "xs" : "xl")
    );
    const [itemEntries, registerItem] = useRegistry<MegaNavCollectedItem>();
    const items = useMemo(
      () => itemEntries.map((entry) => entry.value),
      [itemEntries]
    );
    const itemKeys = useMemo(
      () => itemEntries.map((entry) => entry.key),
      [itemEntries]
    );
    const labels = useMemo(
      () => ({ ...DEFAULT_LABELS, ...customLabels }),
      [customLabels]
    );

    const openState = useOpenState({
      rootRef,
      toggleId: ids.toggle,
      openDelay: hoverDelay?.open ?? 100,
      closeDelay: hoverDelay?.close ?? 300,
    });
    const { close } = openState;

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (!isDev) return;
      const seen = new Set<string>();
      for (const { id } of items) {
        if (reservedIds.includes(id)) {
          warn(`the id "${id}" is reserved for the built-in ${id} button.`);
        } else if (seen.has(id)) {
          warn(`the id "${id}" is used by more than one item.`);
        }
        seen.add(id);
      }
    }, [items]);

    useEffect(() => {
      close();
      setDrawerOpen(false);
    }, [isDesktop, close]);

    const { open, toggle, hoverHandlers } = openState;

    const config = useMemo(
      () => ({
        branding,
        widgets,
        labels,
        linkComponent,
        ids,
        registerItem,
        toggle,
        close,
        hoverHandlers,
        setDrawerOpen,
      }),
      [
        branding,
        widgets,
        labels,
        linkComponent,
        ids,
        registerItem,
        toggle,
        close,
        hoverHandlers,
      ]
    );

    const status = useMemo(
      () => ({ open, items, itemKeys, isDesktop, isClient, isDrawerOpen }),
      [open, items, itemKeys, isDesktop, isClient, isDrawerOpen]
    );

    return (
      <MegaNavConfigContext.Provider value={config}>
        <MegaNavStatusContext.Provider value={status}>
          <Element
            ref={rootRef}
            className={classNames(`${prefix}--mega-nav`, className)}
          >
            {children}
          </Element>
        </MegaNavStatusContext.Provider>
      </MegaNavConfigContext.Provider>
    );
  }
);

MegaNavRoot.displayName = "MegaNav.Root";

export { MegaNavRoot };
