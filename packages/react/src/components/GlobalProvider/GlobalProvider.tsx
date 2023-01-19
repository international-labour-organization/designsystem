import { themeprefix } from "@ilo-org/themes/tokens/theme/base.json";
import { FC } from "react";
import { GlobalProviderContext } from "./GlobalCtx";
import { GlobalProviderProps } from "./GlobalProvider.props";

const GlobalProvider: FC<GlobalProviderProps> = ({
  prefix = themeprefix.value,
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
