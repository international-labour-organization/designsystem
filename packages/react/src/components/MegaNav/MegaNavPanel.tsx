import classNames from "classnames";
import { useRef } from "react";

import { prefix } from "../../utils";

import { usePanelOffset } from "./internals/hooks/usePanelOffset";
import {
  useMegaNavConfig,
  useMegaNavItem,
  useMegaNavItemStatus,
} from "./internals/utils/context";
import { MegaNavPanelProps } from "./MegaNav.props";

const MegaNavPanel = ({ className, children }: MegaNavPanelProps) => {
  const { ids, hoverHandlers } = useMegaNavConfig();
  const { id } = useMegaNavItem();
  const { isOpen } = useMegaNavItemStatus();
  const ref = useRef<HTMLDivElement>(null);
  const style = usePanelOffset(ref, isOpen);

  return (
    <div
      ref={ref}
      id={ids.panel(id)}
      className={classNames(`${prefix}--mega-nav-panel`, className)}
      style={style}
      hidden={!isOpen}
      {...hoverHandlers(id)}
    >
      {children}
    </div>
  );
};

export { MegaNavPanel };
