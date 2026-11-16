import { createContext, ElementType, useContext } from "react";

interface MegaNavContextValue {
  linkComponent: ElementType;
}

const MegaNavContext = createContext<MegaNavContextValue>({
  linkComponent: "a",
});

function useMegaNav() {
  return useContext(MegaNavContext);
}

export { MegaNavContext, useMegaNav };
