import { createContext } from "react";
import { GlobalProviderContextProps } from "./GlobalProvider.props";

export const GlobalProviderContext = createContext(
  {} as GlobalProviderContextProps
);
