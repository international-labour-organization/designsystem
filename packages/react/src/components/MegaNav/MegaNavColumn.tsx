import classNames from "classnames";

import { prefix } from "../../utils";

import { MegaNavColumnProps } from "./MegaNav.props";

const MegaNavColumn = ({ className, children }: MegaNavColumnProps) => (
  <div className={classNames(`${prefix}--mega-nav-column`, className)}>
    {children}
  </div>
);

export { MegaNavColumn };
