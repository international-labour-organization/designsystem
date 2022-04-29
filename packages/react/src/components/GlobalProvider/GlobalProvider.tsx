import { createContext, FC } from "react";
import { prefix as defaultPrefix } from "@ilo-org/themes/tokens/theme/base.json";
import {
  GlobalProviderProps,
  GlobalProviderContextProps,
} from "./GlobalProvider.props";

export const GlobalProviderContext = createContext(
  {} as GlobalProviderContextProps
);

const GlobalProvider: FC<GlobalProviderProps> = ({
  prefix = defaultPrefix.value,
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
