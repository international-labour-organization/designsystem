import { FC } from "react";
import { GlobalProviderContext } from "./GlobalCtx";
import { GlobalProviderProps } from "./GlobalProvider.props";

const GlobalProvider: FC<GlobalProviderProps> = ({
  prefix = "ilo",
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
