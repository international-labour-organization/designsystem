import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { useBreakpoint, useGlobalSettings } from "../../../hooks";
import classNames from "classnames";
import { NavigationDropdown } from "../NavigationDropdown";
import { NavigationMenuGrid } from "../NavigationMenuGrid";
import { LanguageToggle } from "../../LanguageToggle";
import { MobileNavigation } from "../mobile/MobileNavigation";
import { CompactNavProps, ComplexNavProps } from "../Navigation.props";
import { NavigationLink } from "../NavigationLink";

const ComplexNav = forwardRef<HTMLElement, ComplexNavProps>(
  (
    {
      props: {
        branding,
        menu: { items, labels },
        widgets,
      },
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const { breakpoint } = useBreakpoint();
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isCompactOpen, setIsCompactOpen] = useState(false);

    const headerRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => headerRef.current as HTMLElement);

    const baseClass = `${prefix}--subsite-nav-complex`;
    return null;
  }
);

export { ComplexNav };
