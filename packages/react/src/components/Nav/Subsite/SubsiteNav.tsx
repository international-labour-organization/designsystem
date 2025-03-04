import { forwardRef } from "react";

import { SubsiteNavProps } from "../Navigation.props";
import { CompactNav } from "./CompactNav";
import { ComplexNav } from "./ComplexNav";

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
