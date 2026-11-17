import classNames from "classnames";
import { useEffect, useRef } from "react";

import { prefix } from "../../../../utils";
import { SearchField } from "../../../SearchField";

import { MegaNavPieceProps, MegaNavSearchConfig } from "../../MegaNav.props";
import { useMegaNavConfig, useMegaNavStatus } from "../utils/context";

const MegaNavSearchWidget = ({ search }: { search: MegaNavSearchConfig }) =>
  search.field ? <SearchField {...search.field} /> : <>{search.component}</>;

const MegaNavSearch = ({ className }: MegaNavPieceProps) => {
  const { widgets, toggle, ids, labels } = useMegaNavConfig();
  const { open } = useMegaNavStatus();
  const panelRef = useRef<HTMLDivElement>(null);
  const baseClass = `${prefix}--mega-nav`;
  const isOpen = open === "search";

  useEffect(() => {
    if (isOpen) panelRef.current?.querySelector("input")?.focus();
  }, [isOpen]);

  if (!widgets?.search) return null;

  return (
    <>
      <button
        type="button"
        id={ids.toggle("search")}
        className={classNames(`${baseClass}__search`, className, {
          [`${baseClass}__search--open`]: isOpen,
        })}
        aria-label={labels.search}
        aria-expanded={isOpen}
        aria-controls={ids.panel("search")}
        onClick={() => toggle("search")}
      >
        <span className={`${baseClass}__search-icon`} />
      </button>
      <div
        ref={panelRef}
        id={ids.panel("search")}
        className={`${baseClass}__search-panel`}
        hidden={!isOpen}
      >
        <MegaNavSearchWidget search={widgets.search} />
      </div>
    </>
  );
};

export { MegaNavSearch, MegaNavSearchWidget };
