import { forwardRef } from "react";

import { SubsiteNavProps } from "../Navigation.props";
import { CompactNav } from "./CompactNav";

const ComponentMap = {
  complex: CompactNav,
  compact: CompactNav,
};

const SubsiteNav = forwardRef<HTMLElement, SubsiteNavProps>(
  ({ type = "compact", props }, ref) => {
    const Component = ComponentMap[type];

    return <Component ref={ref} props={props} />;
  }
);

export { SubsiteNav };
