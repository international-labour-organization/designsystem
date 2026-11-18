import classNames from "classnames";
import { useId, useMemo } from "react";

import { prefix } from "../../utils";

import { MegaNavLinksContext } from "./internals/utils/context";
import { MegaNavLinksProps } from "./MegaNav.props";

const baseClass = `${prefix}--mega-nav-links`;

const MegaNavLinks = ({ title, className, children }: MegaNavLinksProps) => {
  const group = useId();
  const context = useMemo(() => ({ group, title }), [group, title]);

  return (
    <MegaNavLinksContext.Provider value={context}>
      <div className={classNames(baseClass, className)}>
        {title && <p className={`${baseClass}__title`}>{title}</p>}
        <ul className={`${baseClass}__list`}>{children}</ul>
      </div>
    </MegaNavLinksContext.Provider>
  );
};

export { MegaNavLinks };
