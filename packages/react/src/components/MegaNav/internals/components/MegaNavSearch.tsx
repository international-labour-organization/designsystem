import classNames from "classnames";
import { useEffect, useRef } from "react";

import { prefix } from "../../../../utils";
import { SearchField } from "../../../SearchField";

import { MegaNavSearchConfig } from "../../MegaNav.props";
import { MegaNavIds } from "../hooks/useIds";

const MegaNavSearchWidget = ({ search }: { search: MegaNavSearchConfig }) =>
  search.field ? <SearchField {...search.field} /> : <>{search.component}</>;

type MegaNavSearchPanelProps = {
  className?: string;
  search: MegaNavSearchConfig;
  isOpen: boolean;
  label: string;
  ids: MegaNavIds;
  onToggle: (id: string) => void;
};

const MegaNavSearchPanel = ({
  className,
  search,
  isOpen,
  label,
  ids,
  onToggle,
}: MegaNavSearchPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const baseClass = `${prefix}--mega-nav`;

  useEffect(() => {
    if (isOpen) panelRef.current?.querySelector("input")?.focus();
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        id={ids.toggle("search")}
        className={classNames(`${baseClass}__search`, className, {
          [`${baseClass}__search--open`]: isOpen,
        })}
        aria-label={label}
        aria-expanded={isOpen}
        aria-controls={ids.panel("search")}
        onClick={() => onToggle("search")}
      >
        <span className={`${baseClass}__search-icon`} />
      </button>
      <div
        ref={panelRef}
        id={ids.panel("search")}
        className={`${baseClass}__search-panel`}
        hidden={!isOpen}
      >
        <MegaNavSearchWidget search={search} />
      </div>
    </>
  );
};

export { MegaNavSearchPanel, MegaNavSearchWidget };
