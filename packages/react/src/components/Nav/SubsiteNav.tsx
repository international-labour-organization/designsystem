import { forwardRef } from "react";

import { SubsiteNavProps } from "./Navigation.props";
import { CompactNav } from "./Subsite/CompactNav";
import { ComplexNav } from "./Subsite/ComplexNav";

const ComponentMap = {
  complex: ComplexNav,
  compact: CompactNav,
};

const SubsiteNav = forwardRef<HTMLElement, SubsiteNavProps>(
  ({ type = "compact", props }, ref) => {
    const Component = ComponentMap[type];

    return <Component ref={ref} props={props} />;
  }
);

export { SubsiteNav };
