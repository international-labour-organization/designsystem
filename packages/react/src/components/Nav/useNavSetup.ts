import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import { useBreakpoint } from "../../hooks";

import { NavigationLinkProps } from "./Navigation.props";

interface UseNavSetupArgs {
  menu: NavigationLinkProps[];
  split: {
    desktop: number;
    mobile: number;
  };
}

interface UseNavSetupResponse {
  menu: {
    facade: NavigationLinkProps[];
    more: NavigationLinkProps[];
  };
  more: [boolean, Dispatch<SetStateAction<boolean>>];
  mobile: [boolean, Dispatch<SetStateAction<boolean>>];
  ref: RefObject<HTMLElement>;
  isDesktop: boolean;
}

function useNavSetup({ menu, split }: UseNavSetupArgs): UseNavSetupResponse {
  const { breakpoint } = useBreakpoint();
  const [more, setMore] = useState(false);
  const [mobile, setMobile] = useState(false);

  const ref = useRef<HTMLElement>(null);

  const isAboveXL = ["xl", "xxl"].includes(breakpoint || "md");
  const sliceIndex = isAboveXL ? split.desktop : split.mobile;
  const facade = menu.slice(0, sliceIndex);
  const moreItems = menu.slice(sliceIndex);

  return {
    menu: { facade, more: moreItems },
    more: [more, setMore],
    mobile: [mobile, setMobile],
    isDesktop: isAboveXL,
    ref,
  };
}

export { useNavSetup };
