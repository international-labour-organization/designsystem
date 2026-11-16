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
import { MegaNavContext } from "./internals/utils/context";
import { parseItems } from "./internals/utils/parser";
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
      items: itemsProp,
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

    const isDesktop = DESKTOP_BREAKPOINTS.includes(breakpoint ?? "xl");
    const items = useMemo(() => parseItems(itemsProp), [itemsProp]);
    const labels = useMemo(
      () => ({ ...DEFAULT_LABELS, ...customLabels }),
      [customLabels]
    );

    const openState = useOpenState({
      rootRef,
      toggleId: ids.toggle,
      delay: {
        open: hoverDelay?.open ?? 100,
        close: hoverDelay?.close ?? 300,
      },
    });
    const { close } = openState;

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      close();
      setDrawerOpen(false);
    }, [isDesktop, close]);

    const context = {
      ...openState,
      items,
      branding,
      widgets,
      labels,
      linkComponent,
      ids,
      isDesktop,
      isClient,
      isDrawerOpen,
      setDrawerOpen,
    };

    return (
      <MegaNavContext.Provider value={context}>
        <Element
          ref={rootRef}
          className={classNames(`${prefix}--mega-nav`, className)}
        >
          {children}
        </Element>
      </MegaNavContext.Provider>
    );
  }
);

MegaNavRoot.displayName = "MegaNav.Root";

export { MegaNavRoot };
