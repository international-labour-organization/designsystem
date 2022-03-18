import React, { createContext, FC } from "react";
import { prefix as defaultPrefix } from "../../theme.json";
import {
  GlobalProviderProps,
  GlobalProviderContextProps,
} from "./GlobalProvider.props";

export const GlobalProviderContext = createContext(
  {} as GlobalProviderContextProps
);

const GlobalProvider: FC<GlobalProviderProps> = ({
  prefix = defaultPrefix,
  children,
}) => {
  return (
    <GlobalProviderContext.Provider
      value={{
        prefix,
      }}
    >
      {children}
    </GlobalProviderContext.Provider>
  );
};

export default GlobalProvider;
