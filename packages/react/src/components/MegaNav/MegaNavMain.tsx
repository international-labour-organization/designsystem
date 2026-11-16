import { prefix } from "../../utils";

import { MegaNavMainProps } from "./MegaNav.props";

const MegaNavMain = ({ children }: MegaNavMainProps) => (
  <div className={`${prefix}--mega-nav-main`} data-meganav-role="main">
    {children}
  </div>
);

export { MegaNavMain };
